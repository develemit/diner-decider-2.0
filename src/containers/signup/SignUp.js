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

  newUserSubmit = () => {
    console.log('signed up!')
    this.props.history.push('/dinerdecider')
  }

  render() {
    let {handleSubmit} = this.props

    return (
      <div id="createAccount" className="buttonStyle">
        <h1 style={{marginTop: "0px"}}>Create Account</h1><br/>
        <form onSubmit={handleSubmit(() => this.newUserSubmit())}>
          <Field className="form-control input-default" name="name-first" component="input" type="text" placeholder="First Name"/><br/>
          <Field className="form-control input-default" name="name-last" component="input" type="text" placeholder="Last Name"/><br/>
          <Field className="form-control input-default" name="email" component="input" type="email" placeholder="Email"/><br/>
          <Field className="form-control input-default" name="zipcode" component="input" type="number" placeholder="Zip Code"/><br/>
          <Field className="form-control input-default" name="username" component="input" type="text" placeholder="User Name"/><br/>
          <Field className="form-control input-default" name="password" component="input" type="password" placeholder="Password" ref="pass"/><br/>
          <Field className="form-control input-default" name="checkpass" component="input" type="password" placeholder="Confirm Password" ref="checkPass" onKeyUp={this.checkPass}/><br/>
          <button id="signUpBtn" disabled className="btn-lg btn btn-primary" style={{width: 150, height: 50}}>
            Sign Up
          </button><br/>
          <Link to='/'>
          <button className="btn-lg btn btn-primary"
            style={{width: 150, height: 50}}>
            Cancel
          </button>
          </Link>
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
