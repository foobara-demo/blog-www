import { DataError } from '../../../../base/Error'

export class FirstPartCannotBeEmptyError extends DataError<{
  value?: any
  regex?: any
  negate_regex?: any
}> {
}
