import React from 'react'
import { SignupStepOne } from './SignupStepOne'
import { SignupStepTwo } from './SignupStepTwo'


export function SignupContent ({ step = 2 }) {
  return (
    <div className="container">
      <SignupStepOne step={step} />
      <SignupStepTwo step={step} />

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
