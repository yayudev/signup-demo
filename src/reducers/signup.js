import { SignupActions } from '../actions'

const defaultState = {
  step: 1,
  title: 'Signup'
}

export function signupReducer(state = defaultState, action) {
  switch(action.type) {
    case SignupActions.NEXT_STEP:
      const nextStep = state.step + 1

      return {
        step: state.step < 3 ? nextStep : state.step,
        title: nextStep === 3 ? 'Thank you!' : 'Signup'
      }

    case SignupActions.PREVIOUS_STEP:
      return {
        step: state.step > 1 ? state.step - 1 : state.step,
        title: 'Signup'
      }

    default:
      return state
  }
}
