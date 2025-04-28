import { RuntimeError } from '../../../../base/Error'

export class UserNotFoundError extends RuntimeError<{
  id?: number
  username?: string
  email?: string
}> {
}
