import React, { useState, type JSX } from 'react'

import { type Outcome } from '../base/Outcome'

import { ComputeExponent } from '.././ComputeExponent'

import type ComputeExponentInputs from '.././ComputeExponent/Inputs'

import type ComputeExponentResult from '.././ComputeExponent/Result'
import { type Error as ComputeExponentError } from '.././ComputeExponent/Errors'

export default function ComputeExponentForm (): JSX.Element {
  const [base, setBase] = useState<number | undefined>(undefined)

  const [exponent, setExponent] = useState<number | undefined>(undefined)

  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function toVoid (fn: () => Promise<void>): () => void {
    return (): void => {
      void (async (): Promise<void> => { await fn() })()
    }
  }

  const run = toVoid(async (): Promise<void> => {
    if (base == null) {
      // TODO: perform some kind of validation error
      return
    }

    if (exponent == null) {
      // TODO: perform some kind of validation error
      return
    }

    const inputs: ComputeExponentInputs = {
      base,
      exponent
    }

    const command = new ComputeExponent(inputs)

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<ComputeExponentResult, ComputeExponentError> = await command.run()

      if (outcome.isSuccess()) {
        const result: ComputeExponentResult = outcome.result
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

          value={base ?? ''}
          onChange={(e) => { setBase(parseInt(e.target.value)) }}
          placeholder="base"
                  />

        <input

          value={exponent ?? ''}
          onChange={(e) => { setExponent(parseInt(e.target.value)) }}
          placeholder="exponent"
                  />

        <button onClick={run}>Compute exponent</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
