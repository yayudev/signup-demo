import React from 'react'
import { shallow } from 'enzyme'
import { GenericInput } from './GenericInput'
import { SPACE_KEY } from '../../config/keys'


test('It should render the component without crashing', () => {
  shallow(<GenericInput text="Test" />)
})

describe('navigable', () => {
  test(`It should include tabindex="-1" if 'navigable' prop equals 'false'`, () => {
    const component = shallow(<GenericInput text="Test" navigable={false} />)
    const html = component.html()

    expect(html.includes('tabindex="-1"')).toBe(true)
  })

  test(`It should include tabindex="0" if 'navigable' prop equals 'true'`, () => {
    const component = shallow(<GenericInput text="Test" navigable={true} />)
    const html = component.html()

    expect(html.includes('tabindex="0"')).toBe(true)
  })
})

describe('text', () => {
  test(`It should render a label using the 'text' prop`, () => {
    const component = shallow(<GenericInput text="Test" />)
    const label = component.find('label').first()

    expect(label.text()).toEqual('Test')
  })
})

describe('isPassword', () => {
  test(`It should render the input with type="text" if 'isPassword' prop equals 'false'`, () => {
    const component = shallow(<GenericInput text="Test" isPassword={false} />)
    const html = component.html()

    expect(html.includes('type="text"')).toBe(true)
  })

  test(`It should render the input with type="password" if 'isPassword' prop equals 'true'`, () => {
    const component = shallow(<GenericInput text="Test" isPassword={true} />)
    const html = component.html()

    expect(html.includes('type="password"')).toBe(true)
  })
})

describe('touched', () => {
  test(`It shouldn't add the .touched class if the 'touched' prop equals 'false'`, () => {
    const component = shallow(<GenericInput text="Test" touched={false} />)
    const input = component.find('label').first()

    expect(input.hasClass('touched')).toBe(false)
  })

  test(`It should add the .touched class if the 'touched' prop equals 'true'`, () => {
    const component = shallow(<GenericInput text="Test" touched={true} />)
    const input = component.find('label').first()

    expect(input.hasClass('touched')).toBe(true)
  })
})

describe('error', () => {
  test(`it should add the .error class if the 'error' prop has value and the 'touched' equals 'true'`, () => {
    const component = shallow(<GenericInput text="Test" error="Test error" touched={true} />)
    const input = component.find('label').first()

    expect(input.hasClass('error')).toBe(true)
  })

  test(`it shouldn't add the .error class if the 'error' prop has value and the 'touched' equals 'false'`, () => {
    const component = shallow(<GenericInput text="Test" error="Test error" touched={false} />)
    const input = component.find('label').first()

    expect(input.hasClass('error')).toBe(false)
  })

  test(`it shouldn't add the .error class if the 'error' prop has no value`, () => {
    const component = shallow(<GenericInput text="Test" touched={true} />)
    const input = component.find('label').first()

    expect(input.hasClass('error')).toBe(false)
  })
})

describe('value', () => {
  test(`It should set the input value to the passed 'value' prop`, () => {
    const component = shallow(<GenericInput text="Test" value="test" />)
    const inputHtml = component.find('input').html()

    expect(inputHtml.includes('value="test"')).toBe(true)
  })
})

describe('onBlur', () => {
  test(`It should call the 'onBlur' prop when input is blured`, () => {
    const blurHandler = jest.fn()
    const component = shallow(<GenericInput text="Test" onBlur={blurHandler} />)

    component.find('input').simulate('blur')

    expect(blurHandler).toHaveBeenCalled()
  })
})

describe('onChange', () => {
  test(`It should call the 'onChange' prop when input changes`, () => {
    const changeHandler = jest.fn()
    const component = shallow(<GenericInput text="Test" onChange={changeHandler} />)

    component.find('input').simulate('change', { target: { value: 'hey' } })

    expect(changeHandler).toHaveBeenCalled()
  })

  test(`It should call the 'onChange' prop with the input value when input changes`, () => {
    const changeHandler = jest.fn()
    const component = shallow(<GenericInput text="Test" onChange={changeHandler} />)

    component.find('input').simulate('change', { target: { value: 'hey' } })

    expect(changeHandler).toHaveBeenCalledWith('hey')
  })
})
