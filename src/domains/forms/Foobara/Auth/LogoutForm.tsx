import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { Logout } from '../../../Foobara/Auth/Logout'

import type LogoutResult from '../../../Foobara/Auth/Logout/Result'
import { type Error as LogoutError } from '../../../Foobara/Auth/Logout/Errors'

export default function LogoutForm (): JSX.Element {
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function toVoid (fn: () => Promise<void>): () => void {
    return (): void => {
      void (async (): Promise<void> => { await fn() })()
    }
  }

  const run = toVoid(async (): Promise<void> => {
    const command = new Logout()

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<LogoutResult, LogoutError> = await command.run()

      if (outcome.isSuccess()) {
        const result: LogoutResult = outcome.result
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

        <button onClick={run}>Logout</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
