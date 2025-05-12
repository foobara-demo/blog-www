import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../base/Outcome'

import { GetCurrentUser } from '../../BlogWww/GetCurrentUser'

import type GetCurrentUserResult from '../../BlogWww/GetCurrentUser/Result'
import { type Error as GetCurrentUserError } from '../../BlogWww/GetCurrentUser/Errors'

export default function GetCurrentUserForm (): JSX.Element {
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function toVoid (fn: () => Promise<void>): () => void {
    return (): void => {
      void (async (): Promise<void> => { await fn() })()
    }
  }

  const run = toVoid(async (): Promise<void> => {
    const command = new GetCurrentUser()

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<GetCurrentUserResult, GetCurrentUserError> = await command.run()

      if (outcome.isSuccess()) {
        const result: GetCurrentUserResult = outcome.result
        setResult(typeof result === 'string' ? result : JSON.stringify(result))
      } else {
        setError(outcome.errorMessage)
        setResult(null)
      }
    } catch (error) {
      setError(`Error executing command: ${JSON.stringify(error)}`)
      setResult(null)
    }
  })

  return (
    <div className="CommandForm">
      <div>

        <button onClick={run}>Get current user</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
