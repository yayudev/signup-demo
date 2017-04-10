import { signupReducer } from './signup'
import { SignupActions } from '../actions'


test('it should move from step one to two on NEXT_STEP', () => {
  const mockState = { step: 1, title: 'Signup' }
  const action = SignupActions.nextStep()

  const nextState = signupReducer(mockState, action)

  expect(nextState.step).toEqual(2)
  expect(nextState.title).toEqual('Signup')
})

test('it should move from step two to three on NEXT_STEP', () => {
  const mockState = { step: 2, title: 'Signup' }
  const action = SignupActions.nextStep()

  const nextState = signupReducer(mockState, action)

  expect(nextState.step).toEqual(3)
  expect(nextState.title).toEqual('Thank you!')
})

test('it should move from step three to two on PREVIOUS_STEP', () => {
  const mockState = { step: 3, title: 'Thank you!' }
  const action = SignupActions.prevStep()

  const nextState = signupReducer(mockState, action)

  expect(nextState.step).toEqual(2)
  expect(nextState.title).toEqual('Signup')
})

test('it should move from step two to one on PREVIOUS_STEP', () => {
  const mockState = { step: 2, title: 'Signup' }
  const action = SignupActions.prevStep()

  const nextState = signupReducer(mockState, action)

  expect(nextState.step).toEqual(1)
  expect(nextState.title).toEqual('Signup')
})
