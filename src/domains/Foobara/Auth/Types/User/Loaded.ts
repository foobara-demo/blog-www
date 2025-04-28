import {
  User,
  type UserAttributesType
} from './Ambiguous'

export class LoadedUser<T extends UserAttributesType = UserAttributesType> extends User<T> {
  readonly isLoaded: true = true

  /* eslint-disable @typescript-eslint/class-literal-property-style */
  get isAtom (): true { return true }
  get isAggregate (): true { return true }
  /* eslint-enable @typescript-eslint/class-literal-property-style */
}
