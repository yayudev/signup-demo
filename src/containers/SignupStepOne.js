import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm  } from 'redux-form'

import { GenericInput } from '../components'


class SignupStepOneComponent extends Component {
  static propTypes = {
    step: PropTypes.number
  }

  static defaultProps = {
    step: 1
  }

  constructor (props) {
    super(props)

    this.createGenericInput = this.createGenericInput.bind(this)
  }

  createGenericInput (label, isPassword = false) {
    return ({ input, meta: { touched, error } }) => (
      <GenericInput
        text={label}
        error={error}
        touched={touched}
        value={input.value}
        isPassword={isPassword}
        onChange={input.onChange}
        onBlur={input.onBlur}
        navigable={this.props.step === 1}
      />
    )
  }

  render () {
    const { step, handleSubmit } = this.props
    const emailComponent = this.createGenericInput('Email')
    const passwordComponent = this.createGenericInput('Password', true)
    const confirmPasswordComponent = this.createGenericInput('Confirm Password', true)

    const containerClasses = step === 1 ? 'container show' : 'container'

    return (
      <form className={containerClasses} onSubmit={handleSubmit}>
        <Field name="email" component={emailComponent} />
        <Field name="password" component={passwordComponent} />
        <Field name="passwordConfirmation" component={confirmPasswordComponent} />

        <style jsx>{`
          .container {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transform: translateX(-100%);
            transition: transform 600ms ease-in-out;
            will-change: transform;
          }

          .show {
            transform: translateX(0);
          }
        `}</style>
      </form>
    )
  }
}


function validate (values) {
  const errors = {}

  if (!values.email) {
    errors.email = 'Email required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Password required'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be minimum 6 characters long'
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Password confirmation required'
  } else if (!errors.password && values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Password confirmation doesn\'t match the password'
  }

  return errors
}


export const SignupStepOne = reduxForm({
  form: 'stepOne',
  validate,
  onSubmit: x => x
})(SignupStepOneComponent)
