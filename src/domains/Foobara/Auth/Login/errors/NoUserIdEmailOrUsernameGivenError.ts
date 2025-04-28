import { RuntimeError } from '../../../../base/Error'

export class NoUserIdEmailOrUsernameGivenError extends RuntimeError<Record<string, never>> {
}
