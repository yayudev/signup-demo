import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { SignupActions } from '../actions'
import { BigButton, CheckAnimation } from '../components'


export class SignupStepThreeComponent extends Component {
  static propTypes = {
    step: PropTypes.number,
    onClick: PropTypes.func
  }

  static defaultProps = {
    step: 1
  }


  constructor (props) {
    super(props)

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }


  handleButtonClick () {
    if (this.props.onButtonClick)
      this.props.onButtonClick()
  }


  render () {
    const isShowing = this.props.step === 3
    const containerClasses = isShowing ? 'container show' : 'container'

    return (
      <div className={containerClasses}>
        <CheckAnimation animate={isShowing} />

        <BigButton
          text="Go to Dashboard"
          icon="arrow_forward"
          navigable={isShowing}
          onClick={this.handleButtonClick}
        />

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
            text-align: center;
            margin-bottom: 5em;
            transform: translateX(100%);
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


const mapActionsToProps = {
  onButtonClick: SignupActions.completeForm
}


export const SignupStepThree = connect(null, mapActionsToProps)(SignupStepThreeComponent)
