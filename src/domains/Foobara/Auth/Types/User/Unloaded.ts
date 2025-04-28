import { type Never } from '../../../../base/Entity'
import {
  User,
  // UserPrimaryKeyType
  type UserAttributesType
} from './Ambiguous'

export type UnloadedUserAttributesType = Never<UserAttributesType>

export class UnloadedUser extends User<UnloadedUserAttributesType> {
  /*
  constructor(id: UserPrimaryKeyType) {
    super(id, {})
  }
  */

  readonly isLoaded: false = false
}
