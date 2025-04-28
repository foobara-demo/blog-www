import RemoteCommand from '../../../base/RemoteCommand'

import type Inputs from './Inputs'
import type Result from './Result'
import { type Error } from './Errors'

export class Register extends RemoteCommand<Inputs, Result, Error> {
  static readonly organizationName = 'Foobara'
  static readonly domainName = 'Auth'
  static readonly commandName = 'Register'
}
