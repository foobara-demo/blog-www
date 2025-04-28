import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { Login } from '../../../Foobara/Auth/Login'

import type LoginInputs from '../../../Foobara/Auth/Login/Inputs'

import type LoginResult from '../../../Foobara/Auth/Login/Result'
import { type Error as LoginError } from '../../../Foobara/Auth/Login/Errors'

export default function LoginForm (): JSX.Element {
  const [usernameOrEmail, setUsernameOrEmail] = useState<string | null | undefined>(undefined)

  const [plaintextPassword, setPlaintextPassword] = useState<string | undefined>(undefined)

  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function toVoid (fn: () => Promise<void>): () => void {
    return (): void => {
      void (async (): Promise<void> => { await fn() })()
    }
  }

  const run = toVoid(async (): Promise<void> => {
    if (usernameOrEmail == null) {
      // TODO: perform some kind of validation error
      return
    }

    if (plaintextPassword == null) {
      // TODO: perform some kind of validation error
      return
    }

    const inputs: LoginInputs = {
      username_or_email: usernameOrEmail,
      plaintext_password: plaintextPassword
    }

    const command = new Login(inputs)

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<LoginResult, LoginError> = await command.run()

      if (outcome.isSuccess()) {
        const result: LoginResult = outcome.result
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

        <input

          value={usernameOrEmail ?? ''}
          onChange={(e) => { setUsernameOrEmail(e.target.value) }}
          placeholder="username or email"
                  />

        <input
          type="password"
          value={plaintextPassword ?? ''}
          onChange={(e) => { setPlaintextPassword(e.target.value) }}
          placeholder="plaintext password"
                  />

        <button onClick={run}>Login</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
