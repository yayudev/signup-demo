import React from 'react'

import { UNFOCUS_TEXT_COLOR } from '../../config/colors'
import { FooterBaseLink } from './FooterBaseLink'


export class FooterBackLink extends FooterBaseLink {
  render () {
    const tabindex = this.getTabIndex()

    return (
      <a
        className="container"
        tabIndex={tabindex}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
      >
        <span>Back</span>

        <style jsx>{`
          .container {
            color: ${UNFOCUS_TEXT_COLOR};
            font-weight: lighter;
            cursor: pointer;
          }
        `}</style>
      </a>
    )
  }
}
