import { RuntimeError } from '../../../../base/Error'

export class InvalidRefreshTokenError extends RuntimeError<Record<string, never>> {
}
