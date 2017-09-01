import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../../actions/users'
import { NavLink } from 'react-router-dom'
import loginButton from '../../svg/loginButton.svg'
import signUpButton from '../../svg/signUpButton.svg'

class LoginHome extends Component {

  render() {
      let buttonStyle = {
        width: "200px"
      }
    return (
      <div>
      This is now the Login Home Page<br/>
      <NavLink to="/login"><img src={loginButton} style={buttonStyle}/></NavLink><br/>
      <NavLink to="/signup"><img src={signUpButton} style={buttonStyle}/></NavLink>
      </div>
    )
  }
}

//Redux conversation between Component and Store//
  function mapStateToProps (state) {
    return {

    }
  }
function mapDispatchToProps(dispatch) {
  return {
      userActions: bindActionCreators(userActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginHome);
