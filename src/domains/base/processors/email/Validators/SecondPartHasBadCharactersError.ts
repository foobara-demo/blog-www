import { DataError } from '../../../../base/Error'

export class SecondPartHasBadCharactersError extends DataError<{
  value?: any
  regex?: any
  negate_regex?: any
}> {
}
