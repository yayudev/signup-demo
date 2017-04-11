import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import { SignupStepThree, SignupStepThreeComponent } from './SignupStepThree'
import { store } from '../store'


test('It should render the component without crashing', () => {
  shallow(
    <Provider store={store}>
      <SignupStepThree />
    </Provider>
  )
})

describe('show class', () => {
  test(`It should include the show class if 'step' prop equals '3'`, () => {
    const component = shallow(<SignupStepThreeComponent step={3} />)
    const container = component.find('div').first()

    expect(container.hasClass('show')).toBe(true)
  })

  test(`It shouldn't include the show class if 'step' prop equals '1'`, () => {
    const component = shallow(<SignupStepThreeComponent step={1} />)
    const container = component.find('div').first()

    expect(container.hasClass('show')).toBe(false)
  })

  test(`It shouldn't include the show class if 'step' prop equals '2'`, () => {
    const component = shallow(<SignupStepThreeComponent step={2} />)
    const container = component.find('div').first()

    expect(container.hasClass('show')).toBe(false)
  })
})

describe('handleButtonClick', () => {
  test(`It should call the 'handleButtonClick' prop when the button is clicked`, () => {
    const clickHandler = jest.fn()
    const component = shallow(<SignupStepThreeComponent onButtonClick={clickHandler} />)
    const button = component.childAt(1)

    button.simulate('click')

    expect(clickHandler).toHaveBeenCalled()
  })
})
