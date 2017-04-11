import React from 'react'
import { shallow } from 'enzyme'
import { DropdownInput } from './DropdownInput'


test('It should render the component without crashing', () => {
  shallow(<DropdownInput text="Test" />)
})

describe('navigable', () => {
  test(`It should include tabindex="-1" if 'navigable' prop equals 'false'`, () => {
    const component = shallow(<DropdownInput text="Test" navigable={false} />)
    const html = component.html()

    expect(html.includes('tabindex="-1"')).toBe(true)
  })

  test(`It should include tabindex="0" if 'navigable' prop equals 'true'`, () => {
    const component = shallow(<DropdownInput text="Test" navigable={true} />)
    const html = component.html()

    expect(html.includes('tabindex="0"')).toBe(true)
  })
})

describe('text', () => {
  test(`It should render a label using the 'text' prop`, () => {
    const component = shallow(<DropdownInput text="Test" />)
    const label = component.find('label').first()

    expect(label.text()).toEqual('Test')
  })
})

describe('onChange', () => {
  test(`It should call the 'onChange' prop when select changes`, () => {
    const changeHandler = jest.fn()
    const component = shallow(<DropdownInput text="Test" onChange={changeHandler} />)

    component.find('select').simulate('change')

    expect(changeHandler).toHaveBeenCalled()
  })

  test(`It should call the 'onChange' prop with the event when select changes`, () => {
    const changeHandler = jest.fn()
    const component = shallow(<DropdownInput text="Test" onChange={changeHandler} />)

    component.find('select').simulate('change', { target: 'hey' })

    expect(changeHandler).toHaveBeenCalledWith({ target: 'hey' })
  })
})

describe('values', () => {
  test('It should render an option for every value item + a disabled one', () => {
    const mockValues = ['one', 'two', 'three']
    const component = shallow(<DropdownInput text="Test" values={mockValues} />)
    const options = component.find('option')

    expect(options).toHaveLength(4)
  })

  test('It should render an option with the each value as text', () => {
    const mockValues = ['one', 'two', 'three']
    const component = shallow(<DropdownInput text="Test" values={mockValues} />)
    const options = component.find('option').slice(1) // 0 it's the empty/disabled one

    options.forEach(option => {
      expect(mockValues).toContain(option.text())
    })
  })
})

describe('selectedValue', () => {
  test(`It should set as selected the option that matches the 'selectedValue'`, () => {
    const mockValues = ['one', 'two', 'three']
    const component = shallow(<DropdownInput text="Test" values={mockValues} selectedValue="two" />)
    // For some reason, shallow rendering only the option doesn't add 'selected' attribute to the option,
    // but it still works if you get the html from the select or upper domNode
    const select = component.find('select').first()
    const html = select.html()

    expect(html.includes('selected="" value="two"')).toBe(true)
  })
})
