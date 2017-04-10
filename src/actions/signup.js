import { submit } from 'redux-form'

export const NEXT_STEP = 'signup/NEXT_STEP'
export const PREVIOUS_STEP = 'signup/PREVIOUS_STEP'
export const RESET = 'signup/RESET'

export const nextStep = () => ({ type: NEXT_STEP })
export const prevStep = () => ({ type: PREVIOUS_STEP })
export const reset = () => ({ type: RESET })


export function goToNextStep () {
  return (dispatch, getState) => {
    const state = getState()
    const step = state.signup.step
    const stepOneHasErrors = step === 1 &&
      state.form.stepOne.syncErrors &&
      Object.keys(state.form.stepOne.syncErrors).length !== 0
    const stepTWOHasErrors = step === 2 &&
      state.form.stepTwo.syncErrors &&
      Object.keys(state.form.stepTwo.syncErrors).length !== 0

    if (stepOneHasErrors) {
      return dispatch(submit('stepOne'))
    }

    if (stepTWOHasErrors) {
      return dispatch(submit('stepTwo'))
    }

    dispatch(nextStep())
  }
}

export function completeForm () {
  return (dispatch, getState) => {
    const state = getState()
    const { stepOne, stepTwo } = state.form
    const { birthDate } = stepTwo.values

    console.log({
      ...stepOne.values,
      ...stepTwo.values,
      gender: stepTwo.values.gender.text,
      birthDate: `${birthDate.day}/${birthDate.month}/${birthDate.year}`
    })

    dispatch(reset())
  }
}
