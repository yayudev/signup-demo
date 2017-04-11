import React from 'react'
import { shallow } from 'enzyme'
import { reduxForm } from 'redux-form'

import { DateInput } from './DateInput'
import { store } from '../../store'


test('It should render the component without crashing', () => {
  shallow(<DateInput name="test" text="Test" />)
})

describe('text', () => {
  test(`It should render a label using the 'text' prop`, () => {
    const component = shallow(<DateInput name="test" text="Test" />)
    const label = component.find('label').first()

    expect(label.text()).toEqual('Test')
  })
})

describe('touched', () => {
  test(`It shouldn't add the .touched class if the 'touched' prop equals 'false'`, () => {
    const component = shallow(<DateInput name="test" text="Test" touched={false} />)
    const input = component.find('label').first()

    expect(input.hasClass('touched')).toBe(false)
  })

  test(`It should add the .touched class if the 'touched' prop equals 'true'`, () => {
    const component = shallow(<DateInput name="test" text="Test" touched={true} />)
    const input = component.find('label').first()

    expect(input.hasClass('touched')).toBe(true)
  })
})

describe('error', () => {
  test(`it should add the .error class if the 'error' prop has value and the 'touched' equals 'true'`, () => {
    const component = shallow(<DateInput name="test" text="Test" error="Test error" touched={true} />)
    const input = component.find('label').first()

    expect(input.hasClass('error')).toBe(true)
  })

  test(`it shouldn't add the .error class if the 'error' prop has value and the 'touched' equals 'false'`, () => {
    const component = shallow(<DateInput name="test" text="Test" error="Test error" touched={false} />)
    const input = component.find('label').first()

    expect(input.hasClass('error')).toBe(false)
  })

  test(`it shouldn't add the .error class if the 'error' prop has no value`, () => {
    const component = shallow(<DateInput name="test" text="Test" touched={true} />)
    const input = component.find('label').first()

    expect(input.hasClass('error')).toBe(false)
  })
})

describe('onBlur', () => {
  test(`It should call the 'onBlur' prop when input is blured`, () => {
    const blurHandler = jest.fn()
    const component = shallow(<DateInput name="test" text="Test" onBlur={blurHandler} />)

    component.find('.date-input').first().simulate('blur')

    expect(blurHandler).toHaveBeenCalled()
  })
})
