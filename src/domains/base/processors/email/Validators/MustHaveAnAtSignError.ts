import { DataError } from '../../../../base/Error'

export class MustHaveAnAtSignError extends DataError<{
  value?: any
  regex?: any
  negate_regex?: any
}> {
}
