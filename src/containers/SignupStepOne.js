import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { GenericInput } from '../components'


export class SignupStepOne extends Component {
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

  createGenericInput (name, label, isPassword = false) {
    return () => (
      <GenericInput
        text={label}
        name={name}
        value=""
        isPassword={isPassword}
        navigable={this.props.step === 1}
      />
    )
  }


  render () {
    const EmailInput = this.createGenericInput('email', 'email', false)
    const Password = this.createGenericInput('pass', 'password', false)
    const PasswordConfirm = this.createGenericInput('passConf', 'confirm password', false)

    const containerClasses = this.props.step === 1 ? 'container show' : 'container'

    return (
      <div className={containerClasses}>
        <EmailInput />
        <Password />
        <PasswordConfirm />

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
      </div>
    )
  }
}
