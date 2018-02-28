import React, { Component } from 'react';
import './Assets/default.css';

//components
import LogIn from './components/pages/logIn';

class App extends Component {
  render() {
    return (
      <div id="App">
        <LogIn className="full login-page"/>
      </div>
    );
  }
}

export default App;
