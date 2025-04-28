import { Entity } from '../../../../base/Entity'

import { type Role } from '../../../../Foobara/Auth/Types/Role/Ambiguous'

export type UserPrimaryKeyType = number
export const userPrimaryKeyAttributeName: 'id' = 'id'
export interface UserAttributesType {
  id?: number
  username: string
  email?: string | null
  roles?: Role[]
}

export class User<
  AttributesType extends UserAttributesType = UserAttributesType
> extends Entity<UserPrimaryKeyType, AttributesType> {
  static readonly modelName: string = 'User'
  static readonly entityName: string = 'User'
  static readonly primaryKeyAttributeName: 'id' = 'id'

  get id (): UserPrimaryKeyType {
    return this.primaryKey
  }

  get associationPropertyPaths (): string[][] { return [['roles', '#']] }
  readonly hasAssociations: false = false

  get username (): AttributesType['username'] {
    return this.readAttribute('username')
  }

  get email (): AttributesType['email'] {
    return this.readAttribute('email')
  }

  get roles (): AttributesType['roles'] {
    return this.readAttribute('roles')
  }
}
