import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BigButton, CheckAnimation } from '../components'


export class SignupStepThree extends Component {
  static propTypes = {
    step: PropTypes.number,
    onClick: PropTypes.func
  }

  static defaultProps = {
    step: 1,
    onClick: _ => {}
  }


  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick () {
    if (this.props.onClick)
      this.props.onClick()
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
          onClick={this.handleClick}
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

