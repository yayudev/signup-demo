import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import {
  MAIN_COLOR,
  BORDER_COLOR,
  SUCCESS_TEXT_COLOR,
  DANGER_TEXT_COLOR
} from '../../config/colors'


export class DateInput extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    error: PropTypes.string,
    touched: PropTypes.bool,
    navigable: PropTypes.bool,
    onBlur: PropTypes.func
  }

  static defaultProps = {
    error: '',
    touched: false,
    navigable: true,
    onBlur: _ => {}
  }

  constructor (props) {
    super(props)

    this.handleBlur = this.handleBlur.bind(this)
  }


  handleBlur () {
    if (this.props.onBlur)
      this.props.onBlur()
  }


  render () {
    const { name, text, error, touched, navigable } = this.props
    const errorClasses = touched && error
        ? 'date-input-label error'
        : 'date-input-label'
    const labelClasses = touched ? `${errorClasses} touched` : errorClasses
    const tabindex = navigable ? '0' : '-1'

    return (
      <div className="date-input-container">
        <label className={labelClasses}>{(touched && error) || text}</label>

        <div className="date-input-group">
          <Field
            component="input"
            name={`${name}.day`}
            type="number"
            tabIndex={tabindex}
            className="date-input"
            min="1"
            max="31"
            placeholder="DD"
            onBlur={this.handleBlur}
          />
          <Field
            component="input"
            name={`${name}.month`}
            type="number"
            tabIndex={tabindex}
            className="date-input"
            min="1"
            max="12"
            placeholder="MM"
            onBlur={this.handleBlur}
          />
          <Field
            component="input"
            name={`${name}.year`}
            type="number"
            tabIndex={tabindex}
            className="date-input"
            min="1900"
            max="2017"
            placeholder="YYYY"
            onBlur={this.handleBlur}
          />
        </div>


        <style jsx global>{`
          .date-input-container {
            width: calc(100% - 4em);
          }

          .date-input-label {
            display: block;
            margin: 1.5em 0 1em;
            text-transform: uppercase;
          }

          .date-input-label.touched {
            color: ${SUCCESS_TEXT_COLOR};
          }
          .date-input-label.touched + .date-input-group {
            border-color: ${SUCCESS_TEXT_COLOR};
          }

          .date-input-label.error {
            color: ${DANGER_TEXT_COLOR};
          }

          .date-input-label.error + .date-input-group {
            border-color: ${DANGER_TEXT_COLOR};
          }

          .date-input-group {
            width: 100%;
            display: flex;
            border: 1px solid ${BORDER_COLOR};
            border-radius: 5px;
            overflow: hidden;
            box-sizing: border-box;
          }

          .date-input {
            -moz-appearance: textfield;
            font-size: 1em;
            width: 33.33%;
            text-align: center;
            padding: .75em 0;
            border: 2px solid transparent;
            border-right: 1px solid ${BORDER_COLOR};
            outline-offset: -1px;
            box-sizing: border-box;
          }

          .date-input:first-child {
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
          }

          .date-input:last-child {
            border-right: none;
            border-bottom-right-radius: 5px;
            border-top-right-radius: 5px;
          }


          .date-input::-webkit-outer-spin-button,
          .date-input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          .date-input:focus {
            border: 2px solid ${MAIN_COLOR};
          }
        `}</style>
      </div>
    )
  }
}
