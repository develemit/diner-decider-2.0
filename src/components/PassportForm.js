import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm, /*reset*/ } from 'redux-form'
import * as passportActions from '../actions/passport'

class PassportForm extends Component {

  submitAddToPassport(e){
    e.preventDefault();
    console.log("clicked it yo!", this);
  }

  render() {
    console.log('Passport form',this.props);
    // let {handleSubmit} = this.props
    return (
      <div>
        <form>
        <button onClick={this.submitAddToPassport}>Add to Passport</button>
        </form>
      </div>
    )
  }
}

// Redux conversation between Component and Store//
  function mapStateToProps (state) {
    return {
     result: state.dinerdecider
    }
  }
function mapDispatchToProps(dispatch) {
  return {
      passportActions: bindActionCreators(passportActions, dispatch)
  }
}
PassportForm = reduxForm({
  // a unique identifier for this form
  form: 'passport'
})(PassportForm)
export default connect(null, mapDispatchToProps)(PassportForm);
