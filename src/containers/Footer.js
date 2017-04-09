import { connect } from 'react-redux'
import { SignupActions } from '../actions'
import { Footer as FooterComponent } from '../components'


const mapStateToProps = state => ({
  step: state.signup.step
})

const mapActionsToProps = {
  onBackClick: SignupActions.prevStep,
  onNextClick: SignupActions.goToNextStep
}


export const Footer = connect(mapStateToProps, mapActionsToProps)(FooterComponent)
