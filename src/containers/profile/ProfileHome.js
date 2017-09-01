import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as userActions from '../../actions/users';
// import ProfilePic from '../../person-placeholder-250x250.jpg';

class ProfileHome extends Component {

  render() {
      let { user } = this.props
      console.log(this.props)
    return (
      <div>

        <h2 id="myProfile"> My Profile</h2>
        <img src={user.length > 0 ? user[0].photo : "loading"} alt="profile-pic"/>
        <h3>{user.length > 0 ? user[0].first_name : "loading"} {user.length > 0 ? user[0].last_name : "loading"}</h3> <br/>
        <NavLink to="/profile/passport"><button>My Passport</button></NavLink><br/>
        <NavLink to="/dinerdecider"><button>Diner Decider</button></NavLink>

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
