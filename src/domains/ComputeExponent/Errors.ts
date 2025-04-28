import { type UnauthenticatedError } from '../Foobara/errors/CommandConnector/UnauthenticatedError'

import { type CannotCastError } from '../base/processors/Foobara/Value/Processor/CannotCastError'

import { type UnexpectedAttributesError } from '../base/processors/attributes/SupportedProcessors/UnexpectedAttributesError'

export interface PossibleErrors {

  'data.base.cannot_cast': CannotCastError

  'data.cannot_cast': CannotCastError

  'data.exponent.cannot_cast': CannotCastError

  'data.unexpected_attributes': UnexpectedAttributesError

  'runtime.unauthenticated': UnauthenticatedError

}

export type Error = CannotCastError |
UnauthenticatedError |
UnexpectedAttributesError
