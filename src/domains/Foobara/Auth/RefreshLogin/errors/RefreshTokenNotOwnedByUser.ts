import { RuntimeError } from '../../../../base/Error'

export class RefreshTokenNotOwnedByUser extends RuntimeError<{
  refresh_token_id?: string
}> {
}
