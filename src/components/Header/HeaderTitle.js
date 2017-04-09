import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { MAIN_COLOR } from '../../config/colors'


export class HeaderTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render () {
    const { title } = this.props

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
}


