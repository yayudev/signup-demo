import React, { Component } from 'react'
import { DateInput, SwitchInput, DropdownInput } from '../components'

const genderValues = ['Male', 'Female', 'Unspecified']
const dropdownValues = ['Internet', 'From a friend', 'Other']


export class SignupStepTwo extends Component {
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
    return (
      <DateInput
        name="birthDate"
        text="Birth date"
        navigable={this.props.step === 2}
      />
    )
  }

  renderSwitchInput () {
    return (
      <SwitchInput
        text="Gender"
        values={genderValues}
        navigable={this.props.step === 2}
      />
    )
  }

  renderDropdownInput () {
    return (
      <DropdownInput
        text="Where did you hear about us?"
        values={dropdownValues}
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
        { this.renderDateInput() }
        { this.renderSwitchInput() }
        { this.renderDropdownInput() }

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
