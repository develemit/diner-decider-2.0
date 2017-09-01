import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm, /*reset*/ } from 'redux-form'
import * as passportActions from '../actions/passport'
import { withRouter } from 'react-router-dom';
import addToPassportButton from '../svg/addToPassportButton.svg'

class PassportForm extends Component {

  submitAddToPassport(values){

    this.props.passportActions.addToPassport(values)
    console.log("clicked it yo!", values);
    this.props.history.push("/profile/passport")
  }
  updateFields(user_id, name, location){
  let val1 =  this.props.change("user_id", user_id)
  let val2 =  this.props.change("name", name)
  let val3 =  this.props.change("location", location.address)
    return this.submitAddToPassport({
      user_id: val1,
      name: val2,
      location: val3
    })
  }

  render() {
    console.log('Passport form',this.props);
    let {handleSubmit} = this.props
    let {name, location } = this.props.result
    let user_id = 1
    return (
      <div>
        <form onSubmit={handleSubmit((values)=>this.updateFields(user_id,name,location))}>
          <Field name="user_id" component="input" type="hidden" />
          <Field name="name" component="input" type="hidden" />
          <Field name="location" component="input" type="hidden" />
          <button style={{backgroundColor: "inherit", border: "none"}}> <img className="buttonStyle" style={{width: "100px", postion: "relative", bottom: "0px"}} src={addToPassportButton} alt="add to passport"/></button>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PassportForm));
