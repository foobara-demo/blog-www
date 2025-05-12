import { type InvalidRefreshTokenError } from '../../../Foobara/Auth/Logout/errors/InvalidRefreshTokenError'

import { type ExpiredTokenError } from '../../../Foobara/Auth/errors/VerifyToken/ExpiredTokenError'

import { type InactiveTokenError } from '../../../Foobara/Auth/errors/VerifyToken/InactiveTokenError'

import { type CannotCastError } from '../../../base/processors/Foobara/Value/Processor/CannotCastError'

import { type UnexpectedAttributesError } from '../../../base/processors/attributes/SupportedProcessors/UnexpectedAttributesError'

export interface PossibleErrors {

  'data.cannot_cast': CannotCastError

  'data.unexpected_attributes': UnexpectedAttributesError

  'foobara::auth::verify_token>runtime.expired_token': ExpiredTokenError

  'foobara::auth::verify_token>runtime.inactive_token': InactiveTokenError

  'runtime.invalid_refresh_token': InvalidRefreshTokenError

}

export type Error = CannotCastError |
InvalidRefreshTokenError |
UnexpectedAttributesError |
ExpiredTokenError |
InactiveTokenError
