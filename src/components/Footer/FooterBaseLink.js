import { Component } from 'react'
import PropTypes from 'prop-types'

import { SPACE_KEY, ENTER_KEY } from '../../config/keys'


export class FooterBaseLink extends Component {
  static propTypes = {
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
    const shouldTriggerOnClick =
      event.charCode === SPACE_KEY || event.charCode === ENTER_KEY

    if (this.props.onClick && shouldTriggerOnClick)
      this.props.onClick(event)
  }

  getTabIndex () {
    return this.props.navigable ? '0' : '-1'
  }

  render () {
    return null
  }
}
