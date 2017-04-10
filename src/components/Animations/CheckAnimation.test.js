import React from 'react'
import { shallow } from 'enzyme'
import { CheckAnimation } from './CheckAnimation'


test('it should render the component without crashing', () => {
  shallow(<CheckAnimation />)
})

test(`it should add the 'path' class if 'animate' prop equals 'true'`, () => {
  const component = shallow(<CheckAnimation animate={true} />)
  const path = component.find('.path').last()

  expect(path.hasClass('path')).toEqual(true)
})

test(`it shouldn't add the 'path' class if 'animate' prop equals 'false'`, () => {
  const component = shallow(<CheckAnimation animate={false} />)
  const path = component.find('.path').last()

  expect(path.hasClass('path')).toEqual(false)
})

test(`it shouldn't add the 'path' class if 'animate' prop isn't passed`, () => {
  const component = shallow(<CheckAnimation />)
  const path = component.find('.path').last()

  expect(path.hasClass('path')).toEqual(false)
})
