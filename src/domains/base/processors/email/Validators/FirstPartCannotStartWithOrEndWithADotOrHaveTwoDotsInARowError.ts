import { DataError } from '../../../../base/Error'

export class FirstPartCannotStartWithOrEndWithADotOrHaveTwoDotsInARowError extends DataError<{
  value?: any
  regex?: any
  negate_regex?: any
}> {
}
