import { type FoobaraError } from '../base/Error'
import type RemoteCommand from '../base/RemoteCommand'
import { type Outcome } from '../base/Outcome'
import Query from '../base/Query'
import { useState } from 'react'

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

export default function useQuery<
  CommandT extends RemoteCommand<InputsT, ResultT, ErrorT>, InputsT, ResultT, ErrorT extends FoobaraError
> (
  CommandClass: new (inputs: InputsT) => CommandT,
  inputs: InputsT | undefined = undefined
) {
  const query = new Query<CommandT>(CommandClass, inputs)
  query.run()

  const [queryState, setQueryState] = useState<QueryState<InputsT, ResultT, ErrorT>>({
    isLoading: false,
    isPending: true,
    isFailure: false,
    isSuccess: false,
    isError: false,
    outcome: null,
    result: null,
    errors: null,
    failure: null,
    setInputs: () => {},
    setDirty: () => {}
  })

  return queryState
}
