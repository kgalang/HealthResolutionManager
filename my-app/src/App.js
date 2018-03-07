import React, { Component } from 'react';
import './Assets/default.css';
import {
	Router,
  Route
} from 'react-router-dom';
import history from "./history";

//components
import LogIn from './components/pages/logIn';
import SignUp from './components/pages/signUp';
import Dashboard from './components/pages/Dashboard';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Router history={history}>
          <div className="full">
                <Route exact path="/" component={ LogIn } />
                <Route path="/signup" component={ SignUp } />
                <Route path="/dashboard" component={ Dashboard } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
