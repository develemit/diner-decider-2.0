import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, /*reset*/ } from 'redux-form'
import { Link } from 'react-router-dom';
import * as userActions from '../../actions/users'

class SignUp extends Component {

  checkPass = () => {
    let {pass, checkPass} = this.refs
    // console.log("typing in happening", this.refs)
    pass.value === checkPass.value ?
    document.getElementById("signUpBtn").disabled = false :
    document.getElementById("signUpBtn").disabled = true;
  }

  render() {
    return (
      <div>
        This is the Sign Up Page!<br/>
        <form>
          <Field name="name-first" component="input" type="text" placeholder="First Name"/><br/>
          <Field name="name-last" component="input" type="text" placeholder="Last Name"/><br/>
          <Field name="email" component="input" type="email" placeholder="Email"/><br/>
          <Field name="zipcode" component="input" type="number" placeholder="Zip Code"/><br/>
          <Field name="username" component="input" type="text" placeholder="User Name"/><br/>
          <Field name="password" component="input" type="password" placeholder="Password" ref="pass"/><br/>
          <Field name="checkpass" component="input" type="password" placeholder="Confirm Password" ref="checkPass" onKeyUp={this.checkPass}/><br/>
          <button id="signUpBtn" disabled>Sign Up</button> <br/>
          <Link to='/'><button>Cancel</button></Link>
        </form>
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
SignUp = reduxForm({
  // a unique identifier for this form
  form: 'signup'
})(SignUp)
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
