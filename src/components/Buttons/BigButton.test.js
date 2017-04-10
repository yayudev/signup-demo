import React from 'react'
import { shallow } from 'enzyme'
import { BigButton } from './BigButton'
import { SPACE_KEY, ENTER_KEY } from '../../config/keys'


test('It should render without crashing', () => {
  shallow(<BigButton text="Test" />)
})

test(`It should render the passed 'text' prop`, () => {
  const component = shallow(<BigButton text="Test" />)
  const textContainer = component.find('.text').first()

  expect(textContainer.text()).toEqual('Test')
})

test(`It shouldn't include icon if no 'icon' prop is passed`, () => {
  const component = shallow(<BigButton text="Test" />)
  const iconQuery = component.find('.material-icons')

  expect(iconQuery).toHaveLength(0)
})

test(`It should render an icon if an 'icon' prop is passed`, () => {
  const component = shallow(<BigButton text="Test" icon="arrow_down" />)
  const iconContainer = component.find('.material-icons').first()

  expect(iconContainer.text()).toEqual('arrow_down')
})

test(`It should set tabindex="-1" if 'navigable' prop equals to 'false'`, () => {
  const component = shallow(<BigButton text="Test" navigable={false} />)
  const renderedHtml = component.html()

  expect(renderedHtml.includes('tabindex="0"')).toEqual(false)
  expect(renderedHtml.includes('tabindex="-1"')).toEqual(true)
})

test(`It should set tabindex="0" if 'navigable' prop equals to 'true'`, () => {
  const component = shallow(<BigButton text="Test" navigable={true} />)
  const renderedHtml = component.html()

  expect(renderedHtml.includes('tabindex="0"')).toEqual(true)
  expect(renderedHtml.includes('tabindex="-1"')).toEqual(false)
})

test(`It should call 'onClick' prop fn on 'click' event`, () => {
  const onClickHandler = jest.fn()
  const component = shallow(<BigButton text="Test" onClick={onClickHandler} />)

  component.simulate('click')

  expect(onClickHandler).toHaveBeenCalled()
})

test(`It should call 'onClick' prop fn on 'ENTER' keypress`, () => {
  const onClickHandler = jest.fn()
  const component = shallow(<BigButton text="Test" onClick={onClickHandler} />)

  component.simulate('keypress', { charCode: ENTER_KEY })

  expect(onClickHandler).toHaveBeenCalled()
})

test(`It should call 'onClick' prop fn on 'SPACE' keypress`, () => {
  const onClickHandler = jest.fn()
  const component = shallow(<BigButton text="Test" onClick={onClickHandler} />)

  component.simulate('keypress', { charCode: SPACE_KEY })

  expect(onClickHandler).toHaveBeenCalled()
})
