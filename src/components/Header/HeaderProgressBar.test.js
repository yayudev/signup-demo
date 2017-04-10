import React from 'react'
import { shallow } from 'enzyme'
import { HeaderProgressBar } from './HeaderProgressBar'


test('It should render without crashing', () => {
  shallow(<HeaderProgressBar title="test" />)
})

describe('progress scale', () => {
  test('It should have 0.33~ scale if at 1/3 steps', () => {
    const component = shallow(<HeaderProgressBar title="test" step={1} totalSteps={3} />)
    const html = component.find('div').first().html()
    const transformValue = html.match(/transform\:scaleX\(([0-9]|.)+\)/)[0]
    const value = Number(transformValue.split('(')[1].split(')')[0])

    expect(value).toBeCloseTo(.33, 2)
  })

  test('It should have 0.67~ scale if at 2/3 steps', () => {
    const component = shallow(<HeaderProgressBar title="test" step={2} totalSteps={3} />)
    const html = component.find('div').first().html()
    const transformValue = html.match(/transform\:scaleX\(([0-9]|.)+\)/)[0]
    const value = Number(transformValue.split('(')[1].split(')')[0])

    expect(value).toBeCloseTo(.67, 2)
  })

  test('It should have 1.0 scale if at 3/3 steps', () => {
    const component = shallow(<HeaderProgressBar title="test" step={3} totalSteps={3} />)
    const html = component.find('div').first().html()
    const transformValue = html.match(/transform\:scaleX\(([0-9]|.)+\)/)[0]
    const value = Number(transformValue.split('(')[1].split(')')[0])

    expect(value).toBeCloseTo(1, 4)
  })
})
