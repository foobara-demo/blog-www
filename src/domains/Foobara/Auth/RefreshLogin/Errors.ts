import { type InvalidRefreshTokenError } from '../../../Foobara/Auth/RefreshLogin/errors/InvalidRefreshTokenError'

import { type RefreshTokenNotOwnedByUser } from '../../../Foobara/Auth/RefreshLogin/errors/RefreshTokenNotOwnedByUser'

import { type ExpiredTokenError } from '../../../Foobara/Auth/errors/VerifyToken/ExpiredTokenError'

import { type InactiveTokenError } from '../../../Foobara/Auth/errors/VerifyToken/InactiveTokenError'

import { type CannotCastError } from '../../../base/processors/Foobara/Value/Processor/CannotCastError'

import { type UnexpectedAttributesError } from '../../../base/processors/attributes/SupportedProcessors/UnexpectedAttributesError'

import { type MissingRequiredAttributeError } from '../../../base/processors/attributes/SupportedValidators/MissingRequiredAttributeError'

export interface PossibleErrors {

  'data.cannot_cast': CannotCastError

  'data.missing_required_attribute': MissingRequiredAttributeError

  'data.refresh_token.cannot_cast': CannotCastError

  'data.refresh_token.missing_required_attribute': MissingRequiredAttributeError

  'data.unexpected_attributes': UnexpectedAttributesError

  'foobara::auth::verify_token>runtime.expired_token': ExpiredTokenError

  'foobara::auth::verify_token>runtime.inactive_token': InactiveTokenError

  'runtime.invalid_refresh_token': InvalidRefreshTokenError

  'runtime.refresh_token_not_owned_by_user': RefreshTokenNotOwnedByUser

}

export type Error = CannotCastError |
InvalidRefreshTokenError |
MissingRequiredAttributeError |
RefreshTokenNotOwnedByUser |
UnexpectedAttributesError |
ExpiredTokenError |
InactiveTokenError
