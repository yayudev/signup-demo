import React from 'react'
import { connect } from 'react-redux'
import { SignupStepOne } from './SignupStepOne'
import { SignupStepTwo } from './SignupStepTwo'
import { SignupStepThree } from './SignupStepThree'


function SignupContentComponent ({ step = 1 }) {
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


const mapStateToProps = state => ({
  step: state.signup.step
})


export const SignupContent = connect(mapStateToProps)(SignupContentComponent)
