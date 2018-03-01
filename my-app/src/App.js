import React, { Component } from 'react';
import './Assets/default.css';
import {
	BrowserRouter as Router,
  Route
} from 'react-router-dom';

//components
import LogIn from './components/pages/logIn';
import SignUp from './components/pages/signUp';
import Dashboard from './components/pages/Dashboard';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Router>
          <div className="full">
                <Route exact path="/" component={ LogIn } />
                <Route exact path="/signup" component={ SignUp } />
                <Route exact path="/dashboard" component={ Dashboard } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
