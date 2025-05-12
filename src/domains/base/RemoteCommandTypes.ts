import type RemoteCommand from './RemoteCommand'

export type InputsOf<CommandClass> = CommandClass extends RemoteCommand<infer Inputs, any, any> ? Inputs : never
export type ResultOf<CommandClass> = CommandClass extends RemoteCommand<any, infer Result, any> ? Result : never
export type ErrorOf<CommandClass> = CommandClass extends RemoteCommand<any, any, infer Error> ? Error : never
