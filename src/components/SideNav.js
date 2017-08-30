import React from 'react';
import { NavLink } from 'react-router-dom';


const ActiveNav = (props) => {
  if (props.loggedIn) {
    console.log('active login')
    return <SignedInSideNav />;
  } else {
    console.log('inactive not logged in')
    return <NotSignedInSideNav />;
  }
}
const SignedInSideNav = (props) => {
    return (
    <div>
      <NavLink to="/dinerdecider">
        Diner Decider
      </NavLink>
      <NavLink to="/profile">
        Profile
      </NavLink>
      <NavLink to="/profile/passport">
        Passport
      </NavLink>
      <NavLink to="/profile/zipcode">
        Change Zip
      </NavLink>
      <NavLink to="/logout">
        Logout
      </NavLink>
   </div>
   )
  }
const NotSignedInSideNav = (props) => {
    return (
    <div>
      <NavLink to="/">
        Login
      </NavLink>
      <NavLink to="/signup">
        Sign up
      </NavLink>
   </div>
   )
 }

const SideNav = (props) => {
  let loggedIn = true
  return (
    <div>
      <ActiveNav loggedIn={loggedIn} />
    </div>
  )
}

export default SideNav
