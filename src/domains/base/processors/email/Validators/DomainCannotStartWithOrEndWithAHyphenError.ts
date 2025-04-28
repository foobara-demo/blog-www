import { DataError } from '../../../../base/Error'

export class DomainCannotStartWithOrEndWithAHyphenError extends DataError<{
  value?: any
  regex?: any
  negate_regex?: any
}> {
}
