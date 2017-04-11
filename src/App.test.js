import React from 'react'
import { shallow } from 'enzyme'

import { App } from './App'


test('It should render the component without crashing', () => {
  shallow(<App />)
})
