import React from 'react'
import { SignupStepOne } from './SignupStepOne'
import { SignupStepTwo } from './SignupStepTwo'
import { SignupStepThree } from './SignupStepThree'


export function SignupContent ({ step = 3 }) {
  return (
    <div className="container">
      <SignupStepOne step={step} />
      <SignupStepTwo step={step} />
      <SignupStepThree step={step} />

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
