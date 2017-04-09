import React from 'react'

import { MAIN_COLOR } from '../../config/colors'
import { FooterBaseLink } from './FooterBaseLink'


export class FooterNextLink extends FooterBaseLink {
  render () {
    const tabindex = this.getTabIndex()

    return (
      <div
        className="container"
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        tabIndex={tabindex}
      >
        <span>Next</span>
        <i className="material-icons icon">arrow_forward</i>

        <style jsx>{`
          .container {
            color: ${MAIN_COLOR};
            display: flex;
            align-items: center;
            cursor: pointer;
          }

          .icon {
            margin-left: .3em;
          }
        `}</style>
      </div>
    )
  }
}
