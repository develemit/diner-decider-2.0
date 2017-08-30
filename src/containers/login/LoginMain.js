import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, /*reset*/ } from 'redux-form';
import { Link } from 'react-router-dom';
import * as userActions from '../../actions/users';

class LoginMain extends Component {

  render() {
    return (
      <div>
        Main Login Page<br/>

        <form>
        <label name="username">Username: </label>
        <Field name="username" component="input" type="text" />
          <br/>
        <label name="password">Password: </label>
        <Field name="password" component="input" type="password" />
        </form>

        {/* Placeholder for successful login*/}
          <Link to='/dinerdecider'><button>Login</button></Link>

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
LoginMain = reduxForm({
  // a unique identifier for this form
  form: 'login'
})(LoginMain)
export default connect(mapStateToProps, mapDispatchToProps)(LoginMain);
