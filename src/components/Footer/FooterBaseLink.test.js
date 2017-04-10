import React from 'react'
import { shallow } from 'enzyme'

import { FooterBaseLink } from './FooterBaseLink'
import { SPACE_KEY, ENTER_KEY } from '../../config/keys'


test('It should render without crashing', () => {
  shallow(<FooterBaseLink />)
})

describe('navigable', () => {
  test(`getTabIndex should return '-1' if navigable prop equals 'false'`, () => {
    class TestComponent extends FooterBaseLink {
      render () {
        return (
          <div className="target">{this.getTabIndex()}</div>
        )
      }
    }
    const component = shallow(<TestComponent navigable={false} />)

    expect(component.text()).toEqual('-1')
  })

  test(`getTabIndex should return '0' if navigable prop equals 'true'`, () => {
    class TestComponent extends FooterBaseLink {
      render () {
        return (
          <div className="target">{this.getTabIndex()}</div>
        )
      }
    }
    const component = shallow(<TestComponent navigable={true} />)

    expect(component.text()).toEqual('0')
  })
})

describe('onClick', () => {
  test('should be called when the component is clicked', () => {
    class TestComponent extends FooterBaseLink {
      render () {
        return (
          <div className="target" onClick={this.handleClick}>
            {this.getTabIndex()}
          </div>
        )
      }
    }
    const onClickHandler = jest.fn()
    const component = shallow(<TestComponent onClick={onClickHandler} />)

    component.simulate('click')

    expect(onClickHandler).toHaveBeenCalled()
  })

  test('should be called when the SPACE key is pressed', () => {
    class TestComponent extends FooterBaseLink {
      render () {
        return (
          <div className="target" onKeyPress={this.handleKeyPress}>
            {this.getTabIndex()}
          </div>
        )
      }
    }
    const onClickHandler = jest.fn()
    const component = shallow(<TestComponent onClick={onClickHandler} />)

    component.simulate('keypress', { charCode: SPACE_KEY })

    expect(onClickHandler).toHaveBeenCalled()
  })

  test('should be called when the ENTER key is pressed', () => {
    class TestComponent extends FooterBaseLink {
      render () {
        return (
          <div className="target" onKeyPress={this.handleKeyPress}>
            {this.getTabIndex()}
          </div>
        )
      }
    }
    const onClickHandler = jest.fn()
    const component = shallow(<TestComponent onClick={onClickHandler} />)

    component.simulate('keypress', { charCode: ENTER_KEY })

    expect(onClickHandler).toHaveBeenCalled()
  })
})
