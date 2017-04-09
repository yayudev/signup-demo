import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import isValidDate from 'is-valid-date'

import { DateInput, SwitchInput, DropdownInput } from '../components'


const genderValues = ['Male', 'Female', 'Unspecified']
const dropdownValues = ['Internet', 'From a friend', 'Other']


export class SignupStepTwoComponent extends Component {
  constructor(props) {
    super(props)

    this.renderDateInput = this.renderDateInput.bind(this)
    this.renderSwitchInput = this.renderSwitchInput.bind(this)
    this.renderDropdownInput = this.renderDropdownInput.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.step !== prevProps.step) {
      this.forceUpdate()
    }
  }


  renderDateInput () {
    return ({ input, meta: { touched, error } }) => (
      <DateInput
        name="birthDate"
        text="Birth date"
        onBlur={input.onBlur}
        touched={touched}
        error={error}
        navigable={this.props.step === 2}
      />
    )
  }

  renderSwitchInput () {
    return ({ input, meta: { touched, error } }) => (
      <SwitchInput
        text="Gender"
        error={touched && error}
        values={genderValues}
        selectedValue={input && input.value && input.value.index}
        onChange={input.onChange}
        navigable={this.props.step === 2}
      />
    )
  }

  renderDropdownInput () {
    return ({ input, meta: { touched, error } }) => (
      <DropdownInput
        text="Where did you hear about us?"
        error={touched && error}
        values={dropdownValues}
        selectedValue={input.value}
        onChange={input.onChange}
        navigable={this.props.step === 2}
      />
    )
  }


  render () {
    const { step, handleSubmit } = this.props
    const afterClass = step === 1 ? 'is-after' : ''
    const behindClass = step === 3 ? 'is-behind' : ''
    const containerClasses = `container ${behindClass} ${afterClass}`

    return (
      <form className={containerClasses} onSubmit={handleSubmit}>
        <Field name="birthDate" component={this.renderDateInput()} />
        <Field name="gender" component={this.renderSwitchInput()} />
        <Field name="howHearAboutUs" component={this.renderDropdownInput()} />

        <style jsx>{`
          .container {
            position: absolute;
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 0;
            left: 0;
            text-align: center;
            transition: transform 600ms ease-in-out;
            will-change: transform;
            transform: translateX(0);
          }

          .is-behind {
            transform: translateX(-100%);
          }

          .is-after {
            transform: translateX(100%);
          }
        `}</style>
      </form>
    )
  }
}


function getAge (year, month, day) {
  const birthday = new Date(year, month - 1, day)
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function validate (values) {
  const errors = {}
  const { day, month, year } = values.birthDate
  const date = `${day}/${month}/${year}`

  if (!day || !month || !year) {
    errors.birthDate = 'Birth date is required'
  } else if (year.length !== 4 || !isValidDate(date)) {
    errors.birthDate = 'Birth date must have be a valid date'
  } else if (getAge(year, month, day) < 18) {
    errors.birthDate = 'You must be at least 18 years old'
  }

  return errors
}

export const SignupStepTwo = reduxForm({
  form: 'stepTwo',
  initialValues: {
    birthDate: { day: '', month: '', year: '' },
    gender: { index: 2, text: 'Unspecified' },
    howHearAboutUs: ''
  },
  validate,
  onSubmit: x => x
})(SignupStepTwoComponent)
