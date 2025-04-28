import LogoutCommand from '../../../Foobara/Auth/LogoutCommand'

import type Inputs from './Inputs'
import type Result from './Result'
import { type Error } from './Errors'

export class Logout extends LogoutCommand<Inputs, Result, Error> {
  static readonly organizationName = 'Foobara'
  static readonly domainName = 'Auth'
  static readonly commandName = 'Logout'
}
