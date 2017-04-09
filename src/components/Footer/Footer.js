import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { BORDER_COLOR } from '../../config/colors'

import { FooterBackLink } from './FooterBackLink'
import { FooterNextLink } from './FooterNextLink'


export class Footer extends Component {
  static propTypes = {
    step: PropTypes.number,
    totalSteps: PropTypes.number,
    onBackClick: PropTypes.func,
    onNextClick: PropTypes.func
  }

  static defaultProps = {
    step: 1,
    totalSteps: 3,
  }

  constructor (props) {
    super(props)

    this.handleBackClick = this.handleBackClick.bind(this)
    this.handleNextClick = this.handleNextClick.bind(this)
  }


  handleBackClick (event) {
    if (this.props.onBackClick)
      this.props.onBackClick(event)
  }

  handleNextClick (event) {
    if (this.props.onNextClick)
      this.props.onNextClick(event)
  }


  render () {
    const { step, totalSteps } = this.props
    const hideFooter = step === totalSteps
    const shouldIncludeBackLink = (step > 1 && step < totalSteps)

    const hideClass = hideFooter ? 'hide' : ''
    const backClass = step > 1 ? 'has-back' : ''
    const containerClasses = `container ${backClass} ${hideClass}`

    return (
      <div className={containerClasses}>
        { shouldIncludeBackLink &&
          <FooterBackLink onClick={this.handleBackClick} navigable={!hideFooter} />
        }
        <FooterNextLink onClick={this.handleNextClick} navigable={!hideFooter} />

        <style jsx>{`
          .container {
            padding: 1.1em;
            max-width: 100%;
            border-top: 1px solid ${BORDER_COLOR};
            font-size: 1.2em;
            display: flex;
            justify-content: flex-end;
            transform: translateX(0);
            transition: transform 600ms ease-in-out;
            will-change: transform;
          }

          .has-back {
            justify-content: space-between;
          }

          .hide {
            transform: translateX(-100%);
            justify-content: flex-end;
          }
        `}</style>
      </div>
    )
  }
}
