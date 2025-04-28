import { RuntimeError } from '../../../../base/Error'

export class InvalidRefreshTokenError extends RuntimeError<{
  refresh_token_id?: string
}> {
}
