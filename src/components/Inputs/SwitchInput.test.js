import React from 'react'
import { shallow } from 'enzyme'
import { SwitchInput } from './SwitchInput'
import { SPACE_KEY } from '../../config/keys'


test('It should render the component without crashing', () => {
  shallow(<SwitchInput text="Test" />)
})

describe('navigable', () => {
  test(`It should include tabindex="-1" if 'navigable' prop equals 'false'`, () => {
    const component = shallow(<SwitchInput text="Test" navigable={false} />)
    const html = component.html()

    expect(html.includes('tabindex="-1"')).toBe(true)
  })

  test(`It should include tabindex="0" if 'navigable' prop equals 'true'`, () => {
    const component = shallow(<SwitchInput text="Test" navigable={true} />)
    const html = component.html()

    expect(html.includes('tabindex="0"')).toBe(true)
  })
})

describe('text', () => {
  test(`It should render a label using the 'text' prop`, () => {
    const component = shallow(<SwitchInput text="Test" />)
    const label = component.find('label').first()

    expect(label.text()).toEqual('Test')
  })
})

describe('values', () => {
  test(`It should create a button for each value in 'values' prop`, () => {
    const mockValues = ['one', 'two', 'three', 'four']
    const component = shallow(<SwitchInput text="Test" values={mockValues} />)
    const buttonsContainer = component.find('.button-group').first()

    expect(buttonsContainer.children()).toHaveLength(4)
  })

  test(`It should render every value as a button label`, () => {
    const mockValues = ['one', 'two', 'three', 'four']
    const component = shallow(<SwitchInput text="Test" values={mockValues} />)
    const buttons = component.find('.button-group').first().children()
    const buttonsText = buttons.find('.label').map(button => button.text())

    buttonsText.forEach(text => {
      expect(mockValues).toContain(text)
    })
  })
})

describe('selectedValue', () => {
  test(`It should add the .selected only to the button that matches the 'selectedValue'`, () => {
    const mockValues = ['one', 'two', 'three', 'four']
    const component = shallow(<SwitchInput text="Test" values={mockValues} selectedValue={1} />)
    const buttons = component.find('.button')

    buttons.forEach((button, index) => {
      const shouldIncludeClass = index === 1

      expect(button.hasClass('selected')).toBe(shouldIncludeClass)
    })
  })
})

describe('onChange', () => {
  test(`It should call the 'onChange' prop if a button is clicked`, () => {
    const clickHandler = jest.fn()
    const mockValues = ['one', 'two', 'three', 'four']
    const component = shallow(
      <SwitchInput
        text="Test"
        values={mockValues}
        selectedValue={1}
        onChange={clickHandler}
      />
    )

    component.find('.button').first().simulate('click')

    expect(clickHandler).toHaveBeenCalled()
  })

  test(`It should call the 'onChange' with the clicked value's info`, () => {
    const clickHandler = jest.fn()
    const mockValues = ['one', 'two', 'three', 'four']
    const component = shallow(
      <SwitchInput
        text="Test"
        values={mockValues}
        selectedValue={1}
        onChange={clickHandler}
      />
    )

    component.find('.button').first().simulate('click')

    expect(clickHandler).toHaveBeenCalledWith({ text: 'one', index: 0 })
  })


  test(`It should call the 'onChange' prop with the next value if SPACE is pressed`, () => {
    const changeHandler = jest.fn()
    const mockValues = ['one', 'two', 'three', 'four']
    const component = shallow(
      <SwitchInput
        text="Test"
        values={mockValues}
        selectedValue={1}
        onChange={changeHandler}
      />
    )

    component.find('.button-group').first().simulate('keypress', { charCode: SPACE_KEY })

    expect(changeHandler).toHaveBeenCalledWith({ text: 'three', index: 2 })
  })

  test(`It should call the 'onChange' prop with first value if SPACE is pressed and it's at last value`, () => {
    const changeHandler = jest.fn()
    const mockValues = ['one', 'two', 'three', 'four']
    const component = shallow(
      <SwitchInput
        text="Test"
        values={mockValues}
        selectedValue={3}
        onChange={changeHandler}
      />
    )

    component.find('.button-group').first().simulate('keypress', { charCode: SPACE_KEY })

    expect(changeHandler).toHaveBeenCalledWith({ text: 'one', index: 0 })
  })
})
