import { type Never } from '../../../../base/Entity'
import {
  Role,
  // RolePrimaryKeyType
  type RoleAttributesType
} from './Ambiguous'

export type UnloadedRoleAttributesType = Never<RoleAttributesType>

export class UnloadedRole extends Role<UnloadedRoleAttributesType> {
  /*
  constructor(id: RolePrimaryKeyType) {
    super(id, {})
  }
  */

  readonly isLoaded: false = false
}
