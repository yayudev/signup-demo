import { submit } from 'redux-form'

export const NEXT_STEP = 'signup/NEXT_STEP'
export const PREVIOUS_STEP = 'signup/PREVIOUS_STEP'

export const nextStep = () => ({ type: NEXT_STEP })
export const prevStep = () => ({ type: PREVIOUS_STEP })


export function goToNextStep () {
  return (dispatch, getState) => {
    const state = getState()
    const step = state.signup.step
    const stepOneHasErrors = state.form.stepOne.syncErrors && Object.keys(state.form.stepOne.syncErrors).length !== 0

    if (step === 1 && stepOneHasErrors) {
      return dispatch(submit('stepOne'))
    }

    dispatch(nextStep())
  }
}
