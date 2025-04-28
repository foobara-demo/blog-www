import { type token_state } from '../../../../Foobara/Auth/Types/token_state'

import { RuntimeError } from '../../../../base/Error'

export class InactiveTokenError extends RuntimeError<{
  state: token_state
}> {
}
