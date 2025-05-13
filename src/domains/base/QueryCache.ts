import type RemoteCommand from '../base/RemoteCommand'
import Query from '../base/Query'
import { type InputsOf } from '../base/RemoteCommandTypes'

const queryCache = new Map<string, Query<RemoteCommand<any, any, any>>>()

interface RemoteCommandConstructor<CommandT extends RemoteCommand<any, any, any>> {
  new (inputs: InputsOf<CommandT>): CommandT
  fullCommandName: string
}

export function getQuery<CommandT extends RemoteCommand<any, any, any>> (
  CommandClass: RemoteCommandConstructor<CommandT>,
  inputs: InputsOf<CommandT>
): Query<CommandT> {
  const key: string = toKey(CommandClass, inputs)
  const hit = queryCache.get(key)

  if (hit != null) {
    return (hit as unknown as Query<CommandT>)
  }

  let query: Query<CommandT>
  if (arguments.length === 2) {
    query = new Query<CommandT>(CommandClass, inputs)
  } else {
    query = new Query<CommandT>(CommandClass)
  }

  query.onInputsChange(() => {
    queryCache.delete(key)
    const newKey = toKey(CommandClass, query.inputs)
    queryCache.set(newKey, query)
  })

  queryCache.set(key, query)
  return query
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
