import React from 'react'
import { shallow } from 'enzyme'
import { HeaderTitle } from './HeaderTitle'

test('It should render without crashing', () => {
  shallow(<HeaderTitle title="test" />)
})

describe('text prop', () => {
  test(`It should render the 'text' prop`, () => {
    const component = shallow(<HeaderTitle title="test" />)
    const textContainer = component.find('h2').first()

    expect(textContainer.text()).toEqual('test')
  })
})
