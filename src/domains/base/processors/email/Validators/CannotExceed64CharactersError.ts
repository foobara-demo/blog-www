import { DataError } from '../../../../base/Error'

export class CannotExceed64CharactersError extends DataError<{
  value?: any
  regex?: any
  negate_regex?: any
}> {
}
