import LoginCommand from '../../../Foobara/Auth/LoginCommand'

import type Inputs from './Inputs'
import type Result from './Result'
import { type Error } from './Errors'

export class RefreshLogin extends LoginCommand<Inputs, Result, Error> {
  static readonly organizationName = 'Foobara'
  static readonly domainName = 'Auth'
  static readonly commandName = 'RefreshLogin'
}
