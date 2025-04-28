import { Entity } from '../../../../base/Entity'

export type RolePrimaryKeyType = number
export const rolePrimaryKeyAttributeName: 'id' = 'id'
export interface RoleAttributesType {
  id?: number
  symbol: string
}

export class Role<
  AttributesType extends RoleAttributesType = RoleAttributesType
> extends Entity<RolePrimaryKeyType, AttributesType> {
  static readonly modelName: string = 'Role'
  static readonly entityName: string = 'Role'
  static readonly primaryKeyAttributeName: 'id' = 'id'

  get id (): RolePrimaryKeyType {
    return this.primaryKey
  }

  get associationPropertyPaths (): string[][] { return [] }
  readonly hasAssociations: false = false

  get symbol (): AttributesType['symbol'] {
    return this.readAttribute('symbol')
  }
}
