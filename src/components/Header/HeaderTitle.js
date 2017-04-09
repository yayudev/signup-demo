import React from 'react'
import PropTypes from 'prop-types'

import { MAIN_COLOR } from '../../config/colors'


export function HeaderTitle ({ title }) {
  return (
    <div className="container">
      <h2 className="title">{title}</h2>

      <style jsx>{`
        .container {
          text-align: center;
        }
        .title {
          color: ${MAIN_COLOR};
          font-weight: lighter;
        }
      `}</style>
    </div>
  )
}


HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired
}
