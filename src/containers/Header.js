import { connect } from 'react-redux'
import { Header as HeaderComponent } from '../components'

const mapStateToProps = state => ({
  step: state.signup.step,
  title: state.signup.title
})

export const Header = connect(mapStateToProps)(HeaderComponent)
