import { RuntimeError } from '../../../../base/Error'

export class InvalidPasswordError extends RuntimeError<Record<string, never>> {
}
