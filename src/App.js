import React, { Component } from 'react'
import {
BrowserRouter as Router,
Route} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import axios from 'axios'
import './App.css'
import LoadingHome from './components/LoadingHome'
import LoginHome from './containers/login/LoginHome'
import LoginMain from './containers/login/LoginMain'
import SignUp from './containers/signup/SignUp'
import DinerDecider from './containers/diner-decider/DinerDecider'
import ProfileHome from './containers/profile/ProfileHome'
import Passport from './containers/profile/Passport'
import menuIcon from './menuIcon.png'
import SideNav from './components/SideNav'
import * as userActions from './actions/users'
import * as passportActions from './actions/passport';
import * as commentsActions from './actions/comments';
import dinerdeciderpagebackground from './svg/diner-decider-page-background.svg'

class App extends Component {

  componentDidMount() {
    console.log('App got user');
    this.props.userActions.getUser();
    console.log('App got passport');
    this.props.passportActions.getPassport();
    this.props.commentsActions.getComments();
    // this.props.ddActions.initGeolocate();

    }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

  logOut(){
    this.loggedIn = false
  }

render() {
    let iconStyle = {
      position: "absolute",
      left: "5px",
      backgroundImage: menuIcon
    }
    let backgroundStyle = {
      height: "100vh",
       margin: '0px',
       padding: '0px',
       backgroundImage : `url("${dinerdeciderpagebackground}")`,
       backgroundRepeat: 'no-repeat',
       backgroundSize: '100%',
    }

    return (
      <Router>
        <div>
          <div id="mySidenav" className="sidenav" onClick={this.closeNav}>
            <a className="closebtn" onClick={this.closeNav}>&times;</a>
            <SideNav onClick={this.closeNav} loggedIn={true} logOut={this.logOut}/>
          </div>
          <div onClick={this.openNav} style={iconStyle}>
          <div className="menu"></div>
          <div className="menu"></div>
          <div className="menu"></div>
          </div>
          <div id="main" className="App" onClick={this.closeNav} style={backgroundStyle}>

        {/* <Route exact path="/" component={LoadingHome}/> */}
          <Route exact path="/" component={LoginHome} chidlren={LoadingHome}/>
          <Route exact path="/login" component={LoginMain}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/dinerdecider" component={DinerDecider}/>
          <Route exact path="/profile" component={ProfileHome}/>
          <Route path="/profile/passport" component={Passport}/>

          {/* <Route exact path="/profile" component={Profile}/> */}
          {/* <Route exact path="/profile/passport" component={Passport}/> */}

          </div>
        </div>
      </Router>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
      userActions: bindActionCreators(userActions, dispatch),
      passportActions: bindActionCreators(passportActions, dispatch),
      commentsActions: bindActionCreators(commentsActions, dispatch)
  }
}


export default connect(null, mapDispatchToProps)(App);
