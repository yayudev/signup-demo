import React from 'react'
import { shallow } from 'enzyme'
import { Header } from './Header'


test('It should render without crashing', () => {
  shallow(<Header title="test" />)
})

