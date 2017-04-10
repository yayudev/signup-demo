import React from 'react'
import { shallow } from 'enzyme'

import { FooterBackLink } from './FooterBackLink'
import { SPACE_KEY, ENTER_KEY } from '../../config/keys'


test('It should render withou crashing', () => {
  shallow(<FooterBackLink />)
})

describe('navigable', () => {
  test(`should set tabindex to '-1' if navigable prop equals 'false'`, () => {
    const component = shallow(<FooterBackLink navigable={false} />)
    const renderedHtml = component.html()

    expect(renderedHtml.includes('tabindex="-1"')).toBe(true)
  })

  test(`should set tabindex to '0' if navigable prop equals 'true'`, () => {
    const component = shallow(<FooterBackLink navigable={true} />)
    const renderedHtml = component.html()

    expect(renderedHtml.includes('tabindex="0"')).toBe(true)
  })
})


describe('onClick', () => {
  test('should be called when the component is clicked', () => {
    const onClickHandler = jest.fn()
    const component = shallow(<FooterBackLink onClick={onClickHandler} />)

    component.simulate('click')

    expect(onClickHandler).toHaveBeenCalled()
  })

  test('should be called when the SPACE key is pressed', () => {
    const onClickHandler = jest.fn()
    const component = shallow(<FooterBackLink onClick={onClickHandler} />)

    component.simulate('keypress', { charCode: SPACE_KEY })

    expect(onClickHandler).toHaveBeenCalled()
  })

  test('should be called when the ENTER key is pressed', () => {
    const onClickHandler = jest.fn()
    const component = shallow(<FooterBackLink onClick={onClickHandler} />)

    component.simulate('keypress', { charCode: ENTER_KEY })

    expect(onClickHandler).toHaveBeenCalled()
  })
})

