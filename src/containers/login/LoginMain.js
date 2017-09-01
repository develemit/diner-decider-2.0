import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, /*reset*/ } from 'redux-form';
import { Link } from 'react-router-dom';
import * as userActions from '../../actions/users';

class LoginMain extends Component {

  checkPass(){
    console.log('check log in button', this.props);
  //   let {pass, checkPass} = this.refs
  //   pass.value === checkPass.value ?
  //   document.getElementById("loginPass").disabled = false :
  //   document.getElementById("loginPass").disabled = true;
  this.props.history.push('/dinerdecider')
  }

  render() {
    return (
      <div>
        <h1 id="loginHeader" style={{marginTop: "0px", color: "black"}}>Login</h1><br/>

        <form style={{width: "400px", margin: "0px auto"}}>
        <label name="username" style={{color: "black"}}>Username: </label>
        <Field name="username" component="input" type="text" ref="username"/>
          <br/>
        <label name="password" style={{color: "black"}}>Password: </label>
        <Field name="password" component="input" type="password" ref="password"/>
        </form>

        {/* Placeholder for successful login*/}
          <button id="loginPass" onClick={() => this.checkPass()}>Login</button>

      </div>
    )
  }
}

//Redux conversation between Component and Store//
function mapStateToProps (state) {
    return {
      user: state.users
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
