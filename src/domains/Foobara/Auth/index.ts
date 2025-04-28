export * as config from './config'

export const isGlobal = false
export const organizationName = 'Foobara'
export const domainName = 'Auth'

export { Login } from '../../Foobara/Auth/Login'

export * as LoginErrors from '../../Foobara/Auth/Login/errors'

export { Logout } from '../../Foobara/Auth/Logout'

export * as LogoutErrors from '../../Foobara/Auth/Logout/errors'

export { RefreshLogin } from '../../Foobara/Auth/RefreshLogin'

export * as RefreshLoginErrors from '../../Foobara/Auth/RefreshLogin/errors'

export { Register } from '../../Foobara/Auth/Register'

// TODO: put these on an entities module so that commands can be the only top-level interface.
