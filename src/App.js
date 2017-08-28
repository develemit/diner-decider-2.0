import React, { Component } from 'react';
import {
BrowserRouter as Router,
Route } from 'react-router-dom';
import './App.css';
import LoadingHome from './components/LoadingHome';
import LoginHome from './containers/login/LoginHome';
import LoginMain from './containers/login/LoginMain';
import SignUp from './containers/signup/SignUp';

class App extends Component {

  componentDidMount() {

  }


  render() {

    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={LoadingHome}/>
        <Route exact path="/" component={LoginHome}/>
        <Route exact path="/login" component={LoginMain}/>
        <Route exact path="/signup" component={SignUp}/>
      </div>
    </Router>
    );
  }
}

export default App;
