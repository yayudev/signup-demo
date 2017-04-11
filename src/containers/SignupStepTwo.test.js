import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import { store } from '../store'
import {
  SignupStepTwo,
  SignupStepTwoComponent,
  SignupStepTwoValidate as validate
} from './SignupStepTwo'


test('It should render the component without crashing', () => {
  shallow(
    <Provider store={store}>
      <SignupStepTwo />
    </Provider>
  )
})

describe('helper classes', () => {
  test(`It should include the .is-after class if 'step' prop equals '1'`, () => {
    const component = shallow(<SignupStepTwoComponent step={1} />)
    const container = component.find('form').first()

    expect(container.hasClass('is-behind')).toBe(false)
    expect(container.hasClass('is-after')).toBe(true)
  })

  test(`It shouldn't include the .is-behind nor the .is-after class if 'step' equals '2'`, () => {
    const component = shallow(<SignupStepTwoComponent step={2} />)
    const container = component.find('form').first()

    expect(container.hasClass('is-behind')).toBe(false)
    expect(container.hasClass('is-after')).toBe(false)
  })

  test(`It should include the .is-behind class if 'step' prop equals '3'`, () => {
    const component = shallow(<SignupStepTwoComponent step={3} />)
    const container = component.find('form').first()

    expect(container.hasClass('is-behind')).toBe(true)
    expect(container.hasClass('is-after')).toBe(false)
  })
})

describe('validate function', () => {
  test('It should return an error if no day is passed', () => {
    const values = { birthDate: { day: '', month: '3', year: '1990' } }
    const errors = validate(values)

    expect(errors.birthDate).toEqual('Birth date is required')
  })

  test('It should return an error if no month is passed', () => {
    const values = { birthDate: { day: '1', month: '', year: '1990' } }
    const errors = validate(values)

    expect(errors.birthDate).toEqual('Birth date is required')
  })

  test('It should return an error if no year is passed', () => {
    const values = { birthDate: { day: '3', month: '3', year: '' } }
    const errors = validate(values)

    expect(errors.birthDate).toEqual('Birth date is required')
  })

  test(`It should return an error if year's length is less than 4`, () => {
    const values = { birthDate: { day: '3', month: '3', year: '190' } }
    const errors = validate(values)

    expect(errors.birthDate).toEqual('Birth date must have be a valid date')
  })

  test(`It should return an error if year's length is more than 4`, () => {
    const values = { birthDate: { day: '3', month: '3', year: '19000' } }
    const errors = validate(values)

    expect(errors.birthDate).toEqual('Birth date must have be a valid date')
  })

  test(`It should return an error if it's an invalid date`, () => {
    const values = { birthDate: { day: '30', month: '2', year: '1991' } }
    const errors = validate(values)

    expect(errors.birthDate).toEqual('Birth date must have be a valid date')
  })

  test(`It should return an error if the user's age is less than 18`, () => {
    // This test is only valid until april 4, 2018
    const values = { birthDate: { day: '4', month: '4', year: '2000' } }
    const errors = validate(values)

    expect(errors.birthDate).toEqual('You must be at least 18 years old')
  })
})
