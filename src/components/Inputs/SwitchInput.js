import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MAIN_COLOR, BORDER_COLOR } from '../../config/colors'
import { SPACE_KEY } from '../../config/keys'


export class SwitchInput extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    selectedValue: PropTypes.number,
    values: PropTypes.arrayOf(PropTypes.string),
    navigable: PropTypes.bool
  }

  static defaultProps = {
    selectedValue: 0,
    values: [],
    navigable: true
  }


  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.renderSwitchButton = this.renderSwitchButton.bind(this)
  }


  handleChange (event) {
    if (this.props.onChange)
      this.props.onChange(event)
  }

  handleKeyPress (event) {
    if (this.props.onChange && event.charCode === SPACE_KEY) {
      const currentIndex = this.props.selectedValue
      const nextIndex = currentIndex + 1 !== this.props.values.length
        ? currentIndex + 1
        : 0
      const text = this.props.values[nextIndex]

      this.props.onChange({ text, index: nextIndex })
    }
  }

  renderSwitchButton (value, idx) {
    const styleClasses = idx === this.props.selectedValue
        ? 'button selected'
        : 'button'
    const selectedItem = { index: idx, text: value }

    return (
      <span key={idx}
        className={styleClasses}
        onClick={this.handleChange.bind(null, selectedItem)}
      >
        {value}

        <style jsx>{`
          .button {
            font-size: 1em;
            width: 100%;
            padding: .75em 0;
            border-right: 1px solid ${BORDER_COLOR};
            cursor: pointer;
            box-sizing: border-box;
            transition: background-color 200ms ease-in-out;
          }

          .button:first-child {
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
          }

          .button:last-child {
            border-bottom-right-radius: 5px;
            border-top-right-radius: 5px;
          }

          .selected {
            color: white;
            background-color: ${MAIN_COLOR};
          }
        `}</style>
      </span>
    )
  }


  render () {
    const { text, values, navigable } = this.props
    const tabindex = navigable ? '0' : '-1'

    return (
      <div className="container">
        <label className="label">{text}</label>

        <div
          className="button-group"
          tabIndex={tabindex}
          onKeyPress={this.handleKeyPress}
        >

          { values.map(this.renderSwitchButton) }

        </div>

        <style jsx>{`
          .label {
            display: block;
            margin: 1.5em 0 1em;
            text-transform: uppercase;
          }

          .container {
            width: calc(100% - 4em);
          }

          .button-group {
            width: 100%;
            display: flex;
            border: 1px solid ${BORDER_COLOR};
            border-radius: 5px;
            overflow: hidden;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    )
  }
}
