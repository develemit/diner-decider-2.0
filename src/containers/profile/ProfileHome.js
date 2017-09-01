import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as userActions from '../../actions/users';
// import ProfilePic from '../../person-placeholder-250x250.jpg';
import myPassport from '../../svg/myPassport.svg'
import dinerDeciderButton from '../../svg/dinerDeciderButton.svg'

class ProfileHome extends Component {

  render() {
      let { user } = this.props
      console.log(this.props)
      let labelStyle = {

      }
    return (
      <div>

        <h2 id="myProfile"> My Profile</h2>
        <img src={user.length > 0 ? user[0].photo : "loading"} alt="profile-pic"/>
        <h3>{user.length > 0 ? user[0].first_name : "loading"} {user.length > 0 ? user[0].last_name : "loading"}</h3> <br/>
        <span>Email:</span>
        <h4>{user.length > 0 ? user[0].email : "loading"}</h4>
        <span>Zip:</span>
        <h4>{user.length > 0 ? user[0].zip : "loading"}</h4>
        <NavLink to="/profile/passport"><img src={myPassport} className="buttonStyle"/></NavLink><br/>
        <NavLink to="/dinerdecider"><img src={dinerDeciderButton} className="buttonStyle"/></NavLink>

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
export default connect(mapStateToProps, mapDispatchToProps)(ProfileHome);
