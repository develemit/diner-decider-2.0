import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/users';
import * as passportActions from '../../actions/passport';

import PassportCards from '../../components/PassportCards';

class Passport extends Component {


  render() {
    let headerStyle = {
      marginTop: '0px !important'
    }
    let passportHolder = {
      margin: "0px auto",
      // border: "1px solid black",
      width: "45%",
      height: "85vh",
      overflowY: "scroll"
    }
    console.log('hello form passport', this.props.passport, this.props.passportActions.passportActions)
      // let {first_name, last_name, placeName, location, email, user_photo, comment} = this.props.passport


      let passportCards = this.props.passport.map((place, index) => <PassportCards key={index} index={index} passport={place} comments={this.props.comments}
      deleteFromPassport={this.props.passportActions.deleteFromPassport}/>)
    return (
      <div>
        <h1 id="myPassport">My Passport</h1> <br/>
        <div style={passportHolder}>
        {passportCards}
        </div>
      </div>
    )
  }
}

//Redux conversation between Component and Store//
function mapStateToProps (state) {
    return {
      passport: state.passport,
      comments: state.comments
    }
  }
function mapDispatchToProps(dispatch) {
  return {
      userActions: bindActionCreators(userActions, dispatch),
      passportActions: bindActionCreators(passportActions, dispatch)

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Passport);
