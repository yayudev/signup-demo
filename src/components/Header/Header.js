import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { HeaderTitle } from './HeaderTitle'
import { HeaderProgressBar } from './HeaderProgressBar'


export class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    step: PropTypes.number,
    totalSteps: PropTypes.number
  }

  static defaultProps = {
    step: 1,
    totalSteps: 3
  }

  render () {
    const { title, step, totalSteps } = this.props

    return (
      <div>
        <HeaderTitle title={title} />
        <HeaderProgressBar step={step} totalSteps={totalSteps} />
      </div>
    )
  }
}
