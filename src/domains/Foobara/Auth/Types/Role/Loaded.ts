import {
  Role,
  type RoleAttributesType
} from './Ambiguous'

export class LoadedRole<T extends RoleAttributesType = RoleAttributesType> extends Role<T> {
  readonly isLoaded: true = true

  /* eslint-disable @typescript-eslint/class-literal-property-style */
  get isAtom (): true { return true }
  get isAggregate (): true { return true }
  /* eslint-enable @typescript-eslint/class-literal-property-style */
}
