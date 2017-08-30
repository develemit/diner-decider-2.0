import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/users';
import * as passportActions from '../../actions/passport';
import Placeholder from '../../placeholder-150x150.png'

class Passport extends Component {


  render() {
    console.log('hello form passport', this.props.passport)
      // let {first_name, last_name, placeName, location, email, user_photo, comment} = this.props.passport
      let { passport } = this.props
      let { place_name, location, comment_id} = passport
      console.log('testing it out', );
      
      let passportCards = this.props.passport.map((place, index) => {
      return (
        <div className="passportCard" key={index}>
          <img className="diner-emblem" src={Placeholder} alt="diner logo"/>
          <h3>{ passport.length > 0 ? place.place_name : "loading"}</h3>
          <p>**Star Rating**</p>
          <p className="comments" >Comments: <span></span></p>
        </div>
      )
      })
    return (
      <div>
        <h1>My Passport</h1> <br/>
          {passportCards}
      </div>
    )
  }
}

//Redux conversation between Component and Store//
function mapStateToProps (state) {
    return {
      passport: state.passport
    }
  }
function mapDispatchToProps(dispatch) {
  return {
      userActions: bindActionCreators(userActions, dispatch),
      passportActions: bindActionCreators(passportActions, dispatch)

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Passport);
