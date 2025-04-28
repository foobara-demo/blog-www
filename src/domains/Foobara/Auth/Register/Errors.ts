import { type CannotCastError } from '../../../base/processors/Foobara/Value/Processor/CannotCastError'

import { type UnexpectedAttributesError } from '../../../base/processors/attributes/SupportedProcessors/UnexpectedAttributesError'

import { type MissingRequiredAttributeError } from '../../../base/processors/attributes/SupportedValidators/MissingRequiredAttributeError'

import { type CannotExceed64CharactersError } from '../../../base/processors/email/Validators/CannotExceed64CharactersError'

import { type CannotHaveMultipleAtSignsError } from '../../../base/processors/email/Validators/CannotHaveMultipleAtSignsError'

import { type DomainCannotStartWithOrEndWithAHyphenError } from '../../../base/processors/email/Validators/DomainCannotStartWithOrEndWithAHyphenError'

import { type FirstPartCannotBeEmptyError } from '../../../base/processors/email/Validators/FirstPartCannotBeEmptyError'

import { type FirstPartCannotStartWithOrEndWithADotOrHaveTwoDotsInARowError } from '../../../base/processors/email/Validators/FirstPartCannotStartWithOrEndWithADotOrHaveTwoDotsInARowError'

import { type FirstPartHasBadCharactersError } from '../../../base/processors/email/Validators/FirstPartHasBadCharactersError'

import { type MustHaveAnAtSignError } from '../../../base/processors/email/Validators/MustHaveAnAtSignError'

import { type SecondPartCannotBeEmptyError } from '../../../base/processors/email/Validators/SecondPartCannotBeEmptyError'

import { type SecondPartHasBadCharactersError } from '../../../base/processors/email/Validators/SecondPartHasBadCharactersError'

export interface PossibleErrors {

  'data.cannot_cast': CannotCastError

  'data.email.cannot_cast': CannotCastError

  'data.email.cannot_exceed64_characters': CannotExceed64CharactersError

  'data.email.cannot_have_multiple_at_signs': CannotHaveMultipleAtSignsError

  'data.email.domain_cannot_start_with_or_end_with_a_hyphen': DomainCannotStartWithOrEndWithAHyphenError

  'data.email.first_part_cannot_be_empty': FirstPartCannotBeEmptyError

  'data.email.first_part_cannot_start_with_or_end_with_a_dot_or_have_two_dots_in_a_row': FirstPartCannotStartWithOrEndWithADotOrHaveTwoDotsInARowError

  'data.email.first_part_has_bad_characters': FirstPartHasBadCharactersError

  'data.email.must_have_an_at_sign': MustHaveAnAtSignError

  'data.email.second_part_cannot_be_empty': SecondPartCannotBeEmptyError

  'data.email.second_part_has_bad_characters': SecondPartHasBadCharactersError

  'data.missing_required_attribute': MissingRequiredAttributeError

  'data.plaintext_password.cannot_cast': CannotCastError

  'data.unexpected_attributes': UnexpectedAttributesError

  'data.username.cannot_cast': CannotCastError

  'data.username.missing_required_attribute': MissingRequiredAttributeError

}

export type Error = CannotCastError |
CannotExceed64CharactersError |
CannotHaveMultipleAtSignsError |
DomainCannotStartWithOrEndWithAHyphenError |
FirstPartCannotBeEmptyError |
FirstPartCannotStartWithOrEndWithADotOrHaveTwoDotsInARowError |
FirstPartHasBadCharactersError |
MissingRequiredAttributeError |
MustHaveAnAtSignError |
SecondPartCannotBeEmptyError |
SecondPartHasBadCharactersError |
UnexpectedAttributesError
