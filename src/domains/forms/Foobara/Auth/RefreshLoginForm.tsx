import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { RefreshLogin } from '../../../Foobara/Auth/RefreshLogin'

import type RefreshLoginResult from '../../../Foobara/Auth/RefreshLogin/Result'
import { type Error as RefreshLoginError } from '../../../Foobara/Auth/RefreshLogin/Errors'

export default function RefreshLoginForm (): JSX.Element {
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function toVoid (fn: () => Promise<void>): () => void {
    return (): void => {
      void (async (): Promise<void> => { await fn() })()
    }
  }

  const run = toVoid(async (): Promise<void> => {
    const command = new RefreshLogin()

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<RefreshLoginResult, RefreshLoginError> = await command.run()

      if (outcome.isSuccess()) {
        const result: RefreshLoginResult = outcome.result
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

        <button onClick={run}>Refresh login</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
