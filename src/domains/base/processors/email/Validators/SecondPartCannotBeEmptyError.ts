import { DataError } from '../../../../base/Error'

export class SecondPartCannotBeEmptyError extends DataError<{
  value?: any
  regex?: any
  negate_regex?: any
}> {
}
