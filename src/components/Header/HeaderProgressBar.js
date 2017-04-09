import React from 'react'
import PropTypes from 'prop-types'
import { MAIN_COLOR, BORDER_COLOR } from '../../config/colors'

export const HeaderProgressBar = ({ step, totalSteps }) => {
  const currentStep = (step >= 1 && step <= 3) ? step : 1
  const currentProgress = (currentStep / totalSteps)
  const widthStyle = { transform: `scaleX(${currentProgress})` }

  return (
    <div className="progress-bar">
      <div className="current-progress" style={widthStyle}></div>

      <style jsx>{`
        .progress-bar {
          border: 2px solid ${BORDER_COLOR};
          border-left: none;
          border-right: none;
          height: .7em;
          width: 100%;
          position: relative;
          box-sizing: border-box;
        }

        .current-progress {
          position: absolute;
          top: -2px;
          left: 0px;
          background-color: ${MAIN_COLOR};
          height: .7em;
          width: 100%;
          transition: transform 600ms ease-in-out;
          transform-origin: left;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}


HeaderProgressBar.propTypes = {
  step: PropTypes.number,
  totalSteps: PropTypes.number
}

HeaderProgressBar.defaultProps = {
  step: 1,
  totalSteps: 3
}
