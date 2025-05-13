import { type FoobaraError } from '../base/Error'
import type RemoteCommand from '../base/RemoteCommand'
import { type Outcome } from '../base/Outcome'
import { type InputsOf, type ResultOf, type ErrorOf } from '../base/RemoteCommandTypes'
import Query from '../base/Query'
import { useState, useRef, useEffect } from 'react'

interface QueryState<InputsT, ResultT, ErrorT extends FoobaraError> {
  isLoading: boolean
  isPending: boolean
  isFailure: boolean
  isSuccess: boolean
  isError: boolean
  outcome: null | Outcome<ResultT, ErrorT>
  result: null | ResultT
  errors: null | ErrorT[]
  failure: any
  setInputs: (inputs: InputsT) => void
  setDirty: () => void
}

function queryToQueryState<InputsT, ResultT, ErrorT extends FoobaraError> (
  query: Query<RemoteCommand<InputsT, ResultT, ErrorT>>
): QueryState<InputsT, ResultT, ErrorT> {
  return {
    isLoading: query.isLoading,
    isPending: query.isPending,
    isFailure: query.isFailure,
    isSuccess: query.isSuccess,
    isError: query.isError,
    outcome: query.outcome,
    result: query.result,
    errors: query.errors,
    failure: query.failure,
    setInputs: (inputs: InputsT) => { query.setInputs(inputs) },
    setDirty: () => { query.setDirty() }
  }
}

export default function useQuery<CommandT extends RemoteCommand<any, any, any>> (
  CommandClass: new (inputs: InputsOf<CommandT>) => CommandT,
  inputs: InputsOf<CommandT> | undefined = undefined
): QueryState<InputsOf<CommandT>, ResultOf<CommandT>, ErrorOf<CommandT>> {
  const queryRef = useRef<Query<CommandT>>(null)

  if (queryRef.current == null) {
    queryRef.current = new Query<CommandT>(CommandClass, inputs)
  }

  const query = queryRef.current

  useEffect(() => {
    const unsubscribe = query.onChange(() => {
      setQueryState(queryToQueryState(query))
    })

    if (arguments.length === 2) {
      query.run()
    }

    return unsubscribe
  }, [])

  const [queryState, setQueryState] = useState<QueryState<InputsOf<CommandT>, ResultOf<CommandT>, ErrorOf<CommandT>>>(
    queryToQueryState(query)
  )

  return queryState
}
