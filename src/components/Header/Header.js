import React from 'react'
import PropTypes from 'prop-types'

import { HeaderTitle } from './HeaderTitle'
import { HeaderProgressBar } from './HeaderProgressBar'


export function Header ({ title, step, totalSteps }) {
  return (
    <div>
      <HeaderTitle title={title} />
      <HeaderProgressBar step={step} totalSteps={totalSteps} />
    </div>
  )
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
  step: PropTypes.number,
  totalSteps: PropTypes.number
}

Header.defaultProps = {
  step: 1,
  totalSteps: 3
}
