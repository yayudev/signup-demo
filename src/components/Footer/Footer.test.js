import React from 'react'
import { shallow } from 'enzyme'

import { Footer } from './Footer'
import { SPACE_KEY, ENTER_KEY } from '../../config/keys'


test('It should render withou crashing', () => {
  shallow(<Footer />)
})

describe('back link', () => {
  test('It should not include back link if at step one', () => {
    const component = shallow(<Footer step={1} />)
    const html = component.html()

    expect(html.includes('Back')).toBe(false)
  })

  test('It should include back link if at step two', () => {
    const component = shallow(<Footer step={2} />)
    const html = component.html()

    expect(html.includes('Back')).toBe(true)
  })

  test('It should not include back link if at step three', () => {
    const component = shallow(<Footer step={3} />)
    const html = component.html()

    expect(html.includes('Back')).toBe(false)
  })
})

describe('.hide class', () => {
  test(`It should include the .hide class if it's at the last step`, () => {
    const component = shallow(<Footer step={3} totalSteps={3} />)
    const containerDiv = component.find('div').first()

    expect(containerDiv.hasClass('hide')).toBe(true)
  })

  test(`It shouldn't include the .hide class if it's not at the last step`, () => {
    const component = shallow(<Footer step={2} totalSteps={3} />)
    const containerDiv = component.find('div').first()

    expect(containerDiv.hasClass('hide')).toBe(false)
  })
})

describe('.has-back class', () => {
  test(`it shouldn't include the .has-back class if the step is the first one`, () => {
    const component = shallow(<Footer step={1} totalSteps={3} />)
    const containerDiv = component.find('div').first()

    expect(containerDiv.hasClass('has-back')).toBe(false)
  })

  test(`it should include the .has-back class if the step isn't the first one`, () => {
    const component = shallow(<Footer step={2} totalSteps={3} />)
    const containerDiv = component.find('div').first()

    expect(containerDiv.hasClass('has-back')).toBe(true)
  })

  test(`it should include the .has-back class if the step is the last one`, () => {
    const component = shallow(<Footer step={3} totalSteps={3} />)
    const containerDiv = component.find('div').first()

    expect(containerDiv.hasClass('has-back')).toBe(true)
  })
})
