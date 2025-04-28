import { DataError } from '../../../../base/Error'

export class CannotHaveMultipleAtSignsError extends DataError<{
  value?: any
  regex?: any
  negate_regex?: any
}> {
}
