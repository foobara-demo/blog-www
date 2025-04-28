import { RuntimeError } from '../../../../base/Error'

export class ExpiredTokenError extends RuntimeError<Record<string, never>> {
}
