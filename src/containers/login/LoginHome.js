import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/users'
import { NavLink } from 'react-router-dom';

class LoginHome extends Component {

  render() {
    return (
      <div>
      This is now the Login Home Page<br/>
      <NavLink to="/login"><button>Login</button></NavLink><br/>
      <NavLink to="/signup"><button>Sign Up</button></NavLink>
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
