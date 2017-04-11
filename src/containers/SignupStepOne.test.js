import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import { store } from '../store'
import {
  SignupStepOne,
  SignupStepOneComponent,
  SignupStepOneValidate as validate
} from './SignupStepOne'


test('It should render the component without crashing', () => {
  shallow(
    <Provider store={store}>
      <SignupStepOne />
    </Provider>
  )
})

describe('show class', () => {
  test(`It should include the show class if 'step' prop equals '1'`, () => {
    const component = shallow(<SignupStepOneComponent step={1} />)
    const container = component.find('form').first()

    expect(container.hasClass('show')).toBe(true)
  })

  test(`It shouldn't include the show class if 'step' prop equals '2'`, () => {
    const component = shallow(<SignupStepOneComponent step={2} />)
    const container = component.find('form').first()

    expect(container.hasClass('show')).toBe(false)
  })

  test(`It shouldn't include the show class if 'step' prop equals '3'`, () => {
    const component = shallow(<SignupStepOneComponent step={3} />)
    const container = component.find('form').first()

    expect(container.hasClass('show')).toBe(false)
  })
})

describe('validate function', () => {
  test('It should return an email error if email is empty', () => {
    const values = { email: '' }
    const errors = validate(values)

    expect(errors.email).toEqual('Email required')
  })

  test('It should return an email error if not a valid email value', () => {
    const values = { email: 'test' }
    const errors = validate(values)

    expect(errors.email).toEqual('Invalid email address')
  })

  test('It should return a password error if password is empty', () => {
    const values = { password: '' }
    const errors = validate(values)

    expect(errors.password).toEqual('Password required')
  })


  test('It should return an password error if the password length is less than 6', () => {
    const values = { password: '12345' }
    const errors = validate(values)

    expect(errors.password).toEqual('Password must be minimum 6 characters long')
  })

  test('It should return a passwordConfirmation error if passwordConfirmation is empty', () => {
    const values = { passwordConfirmation: '' }
    const errors = validate(values)

    expect(errors.passwordConfirmation).toEqual('Password confirmation required')
  })

  test('It should return an passwordConfirmation error if it doesn\'t match password', () => {
    const values = { password: '1234567', passwordConfirmation: '123456' }
    const errors = validate(values)

    expect(errors.passwordConfirmation).toEqual('Password confirmation doesn\'t match the password')
  })

  test('It should return no errors if the values are correct', () => {
    const values = {
      email: 'test@test.test',
      password: '123456',
      passwordConfirmation: '123456'
    }
    const errors = validate(values)
    const errorKeys = Object.keys(errors)

    expect(errorKeys.length).toEqual(0)
  })
})
