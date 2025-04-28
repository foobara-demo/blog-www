import { DataError } from '../../../../base/Error'

export class FirstPartHasBadCharactersError extends DataError<{
  value?: any
  regex?: any
  negate_regex?: any
}> {
}
