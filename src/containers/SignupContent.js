import React from 'react'
import { SignupStepOne } from './SignupStepOne'


export function SignupContent ({ step = 1 }) {
  return (
    <div className="container">
      <SignupStepOne step={step} />

      <style jsx>{`
        .container {
          position: relative;
          padding: 0 2em;
          height: 100%;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
