import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MAIN_COLOR } from '../../config/colors'
import { SPACE_KEY, ENTER_KEY } from '../../config/keys'


export class BigButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    navigable: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    navigable: true
  }


  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }


  handleClick (event) {
    if (this.props.onClick)
      this.props.onClick(event)
  }

  handleKeyPress (event) {
    const spacePressed = event.charCode === SPACE_KEY
    const enterPressed = event.charCode === ENTER_KEY

    if (this.props.onClick && (spacePressed || enterPressed))
      this.props.onClick(event)
  }


  render () {
    const { text, icon, navigable } = this.props
    const iconComponent = icon && <i className="material-icons">{icon}</i>
    const tabindex = navigable ? '0' : '-1'

    return (
      <div
        className="button"
        tabIndex={tabindex}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
      >
        <span className="text">{text}</span>
        {iconComponent}

        <style jsx>{`
          .button {
            color: ${MAIN_COLOR};
            border: 1px solid ${MAIN_COLOR};
            border-radius: 6px;
            padding: 1em .5em;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background: none;
            outline: none;
            cursor: pointer;
            width: auto;
            margin: 0 auto;
            font-size: 1.2em;
            font-weight: lighter;
            transition: background-color 200ms ease-in-out,
                        color 200ms ease-in-out,
                        transform 200ms ease-in-out;
            will-change: transform;
          }

          .button:focus,
          .button:hover {
            color: white;
            background-color: ${MAIN_COLOR};
          }
        `}</style>
      </div>
    )
  }
}
