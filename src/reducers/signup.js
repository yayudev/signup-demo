import { SignupActions } from '../actions'

const defaultState = {
  step: 1,
  title: 'Signup'
}

export function signupReducer(state = defaultState, action) {
  switch(action.type) {
    case SignupActions.NEXT_STEP:
      return {
        step: state.step < 3 ? state.step + 1 : state.step,
        title: state.step === 3 ? 'Thank you!' : 'Signup'
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
