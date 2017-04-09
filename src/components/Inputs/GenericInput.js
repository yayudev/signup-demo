import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  MAIN_COLOR,
  TEXT_COLOR,
  DANGER_TEXT_COLOR,
  UNFOCUS_TEXT_COLOR
} from '../../config/colors'


export class GenericInput extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isPassword: PropTypes.bool,
    error: PropTypes.string,
    navigable: PropTypes.bool
  }

  static defaultProps = {
    isPassword: false,
    error: '',
    navigable: true,
    onChange: _ => {},
    onBlur: _ => {}
  }


  constructor (props) {
    super(props)

    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleBlur (event) {
    if (this.props.onBlur)
      this.props.onBlur(event)
  }

  handleChange (event) {
    if (this.props.onChange)
      this.props.onChange(event.target.value)
  }


  render () {
    const { name, text, value, isPassword, error, navigable } = this.props
    const inputType = isPassword ? 'password' : 'text'
    const label = error || text

    const labelClasses =  error ? 'label error' : 'label'
    const tabindex = navigable ? '0' : '-1'

    return (
      <div className="container">
        <label className={labelClasses}>{label}</label>

        <input
          type={inputType}
          className="input"
          name={name}
          value={value}
          tabIndex={tabindex}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />

        <style jsx>{`
          .container {
            margin: 2em 0;
            width: calc(100% - 4em);
            color: ${TEXT_COLOR};
          }

          .input {
            display: block;
            width: 100%;
            border: none;
            border-bottom: 1px solid ${UNFOCUS_TEXT_COLOR};
            font-size: 1.6em;
            outline: none;
            transition: border-color 300ms ease-in-out;
          }

          .input:focus {
            border-color: ${MAIN_COLOR};
          }

          .label {
            font-size: 1em;
            text-transform: uppercase;
          }

          .label.error {
            color: ${DANGER_TEXT_COLOR};
          }

          .label.error + .input {
            border-bottom: 1px solid ${DANGER_TEXT_COLOR};
          }
        `}</style>
      </div>
    )
  }
}
