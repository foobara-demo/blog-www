import RequiresAuthCommand from '../Foobara/Auth/RequiresAuthCommand'

import type Inputs from './Inputs'
import type Result from './Result'
import { type Error } from './Errors'

export class ComputeExponent extends RequiresAuthCommand<Inputs, Result, Error> {
  static readonly organizationName = 'GlobalOrganization'
  static readonly domainName = 'GlobalDomain'
  static readonly commandName = 'ComputeExponent'
}
