import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MAIN_COLOR, BORDER_COLOR } from '../../config/colors'


export class DropdownInput extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    selectedValue: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
    navigable: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    selectedValue: '',
    values: [],
    navigable: true,
  }


  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }


  handleChange (event) {
    if (this.props.onChange)
      this.props.onChange(event)
  }


  renderDropdownOption (value, index) {
    return (
      <option key={index} value={value} className="option">
        {value}
      </option>
    )
  }

  render () {
    const { text, selectedValue, values, navigable } = this.props
    const tabindex = navigable ? '0' : '-1'

    return (
      <div className="container">
        <label className="label">{text}</label>
        <select
          className="input"
          defaultValue={selectedValue}
          onChange={this.handleChange}
          tabIndex={tabindex}
        >
          <option value="" className="option" disabled></option>

          {values.map(this.renderDropdownOption)}
        </select>

        <style jsx>{`
          .container {
            width: calc(100% - 4em);
          }

          .label {
            display: block;
            margin: 1.5em 0 1em;
            text-transform: uppercase;
          }

          .input {
            display: block;
            width: 100%;
            max-width: 100%;
            padding: 1em;
            border: 1px solid ${BORDER_COLOR};
            font-size: .8em;
            outline: none;
            transition: border-color 300ms ease-in-out;
            text-transform: uppercase;
            border: 1px solid ${BORDER_COLOR};
          }

          .input:focus {
            border-color: ${MAIN_COLOR};
          }

          .option {
            text-transform: capitalize;
          }
        `}</style>
      </div>
    )
  }
}
