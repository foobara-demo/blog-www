import type RemoteCommand from '../base/RemoteCommand'
import type Query from '../base/Query'
import { type InputsOf } from '../base/RemoteCommandTypes'

const queryCache = new Map<string, Query<RemoteCommand<any, any, any>>>()

interface RemoteCommandConstructor<CommandT extends RemoteCommand<any, any, any>> {
  new (inputs: InputsOf<CommandT>): CommandT
  fullCommandName: string
}

export function getQuery<CommandT extends RemoteCommand<any, any, any>> (
  CommandClass: RemoteCommandConstructor<CommandT>,
  inputs: InputsOf<CommandT>
): Query<CommandT> | null {
  const hit = queryCache.get(toKey(CommandClass, inputs))
  return (hit as unknown as Query<CommandT>) ?? null
}

function toKey<CommandT extends RemoteCommand<any, any, any>> (
  CommandClass: RemoteCommandConstructor<CommandT>,
  inputs: InputsOf<CommandT>
): string {
  let key = CommandClass.fullCommandName

  if (inputs != null) {
    key += JSON.stringify(inputs)
  }

  return key
}
