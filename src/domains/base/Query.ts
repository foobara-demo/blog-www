import { type FoobaraError } from '../base/Error'
import type RemoteCommand from '../base/RemoteCommand'
import { type Outcome } from '../base/Outcome'

export default class Query<
  CommandT extends RemoteCommand<InputsT, ResultT, ErrorT>, InputsT, ResultT, ErrorT extends FoobaraError
> {
  inputs: InputsT
  CommandClass: new (inputs: InputsT) => CommandT
  command: CommandT | undefined
  isLoading: boolean = false
  isFailure: boolean = false
  isDirty: boolean = false
  ranWhileRunning: boolean = false
  listeners: Array<() => void> = []
  failure: any

  constructor (
    CommandClass: new (inputs: InputsT) => CommandT,
    inputs: InputsT | undefined = undefined
  ) {
    this.CommandClass = CommandClass
    this.inputs = inputs ?? (undefined as unknown as InputsT)
  }

  get outcome (): null | Outcome<ResultT, ErrorT> {
    return this.command?.outcome ?? null
  }

  get result (): null | ResultT {
    return this.command?.outcome?.result ?? null
  }

  get errors (): null | ErrorT[] {
    return this.command?.outcome?.errors ?? null
  }

  onChange (callback: () => void): void {
    this.listeners.push(callback)
  }

  fireChange (): void {
    this.listeners.forEach(listener => { listener() })
  }

  setInputs (inputs: InputsT): void {
    this.inputs = inputs
    this.setDirty()
  }

  setDirty (): void {
    this.isDirty = true
    this.run()
  }

  get isSuccess (): boolean {
    return !this.isFailure && (this.command?.outcome?.isSuccess() ?? false)
  }

  get isError (): boolean {
    if (this.command?.outcome == null) {
      return false
    }
    return !this.command.outcome.isSuccess()
  }

  get isPending (): boolean {
    return this.isLoading || this.isFailure || this.command != null
  }

  async run (): Promise<void> {
    if (this.isLoading) {
      this.ranWhileRunning = true
      this.fireChange()
      return
    }

    try {
      this.isLoading = true
      const command = new this.CommandClass(this.inputs)
      this.fireChange()

      await command.run()

      this.isFailure = false
      this.isDirty = false
      this.command = command
      this.failure = undefined
    } catch (error) {
      this.isFailure = true
      this.failure = error
      throw error
    } finally {
      this.isLoading = false
      this.fireChange()
      if (this.ranWhileRunning) {
        this.ranWhileRunning = false
        this.run()
      }
    }
  }
}
