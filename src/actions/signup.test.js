import * as SignupActions from './signup'
import { submit } from 'redux-form'

describe('Action creators', () => {
  test('nextStep should return NEXT_STEP as action type', () => {
    const action = SignupActions.nextStep()
    expect(action.type).toEqual(SignupActions.NEXT_STEP)
  })

  test('prevStep should return PREVIOUS_STEP as action type', () => {
    const action = SignupActions.prevStep()
    expect(action.type).toEqual(SignupActions.PREVIOUS_STEP)
  })

  test('reset should return RESET as action type', () => {
    const action = SignupActions.reset()
    expect(action.type).toEqual(SignupActions.RESET)
  })
})

describe('goToNextStep()', () => {
  test('goToNextStep should dispatch NEXT_STEP if on step one and no errors', async () => {
    const getMockState = _ => ({
      signup: { step: 1 },
      form: {
        stepOne: {
          syncErrors: undefined
        }
      }
    })
    const thunk = SignupActions.goToNextStep()
    const dispatchedAction = await new Promise(resolve => thunk(resolve, getMockState))

    expect(dispatchedAction.type).toEqual(SignupActions.NEXT_STEP)
  })

  test('goToNextStep should dispatch NEXT_STEP if on step two and no errors', async () => {
    const getMockState = _ => ({
      signup: { step: 2 },
      form: {
        stepTwo: {
          syncErrors: undefined
        }
      }
    })
    const thunk = SignupActions.goToNextStep()
    const dispatchedAction = await new Promise(resolve => thunk(resolve, getMockState))

    expect(dispatchedAction.type).toEqual(SignupActions.NEXT_STEP)
  })

  test('goToNextStep should dispatch submit(\'stepOne\') if on step two and there\'s at least one error', async () => {
    const getMockState = _ => ({
      signup: { step: 1 },
      form: {
        stepOne: {
          syncErrors: {
            email: 'Error'
          }
        }
      }
    })
    const thunk = SignupActions.goToNextStep()
    const dispatchedAction = await new Promise(resolve => thunk(resolve, getMockState))

    expect(dispatchedAction.type).toEqual(submit('stepOne').type)
  })

  test('goToNextStep should dispatch submit(\'stepTwo\') if on step two and there\'s at least one error', async () => {
    const getMockState = _ => ({
      signup: { step: 2 },
      form: {
        stepTwo: {
          syncErrors: {
            email: 'Error'
          }
        }
      }
    })
    const thunk = SignupActions.goToNextStep()
    const dispatchedAction = await new Promise(resolve => thunk(resolve, getMockState))

    expect(dispatchedAction.type).toEqual(submit('stepTwo').type)
  })

  test('completeForm should dispatch RESET', async () => {
    const getMockState = _ => ({
      signup: { step: 2 },
      form: {
        stepOne: {
          values: {}
        },
        stepTwo: {
          values: {
            gender: {
              text: 'hello'
            },
            birthDate: {
              day: '10',
              month: '06',
              year: '1995'
            }
          }
        }
      }
    })
    const thunk = SignupActions.completeForm()
    const dispatchedAction = await new Promise(resolve => thunk(resolve, getMockState))

    expect(dispatchedAction.type).toEqual(SignupActions.RESET)
  })
})
