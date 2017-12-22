import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './components/UserInput';
import { AllTasks } from './components/tasks'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <AllTasks />
      </div>
    );
  }
}

export default App;
