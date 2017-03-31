import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Express from 'express';
const expressApp = Express();
import strava from 'strava-v3'
import http from 'http';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={LogIn}>Log In</button>
      </div>
    );
  }
}

function LogIn() {
  
  const client_id = '14088'
 
  http.request('https://www.strava.com/oauth/authorize?client_id=' + client_id + '&response_type=code&redirect_uri=http://localhost:3000/access.html&scope=write&state=mystate&approval_prompt=force') 

}

export default App;
