import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="container-fluid main-header" ng-controller="HeaderCtrl">
  			  <span class="align-left title" title="Return to the home page link">neilhighley.com</span><br/>
  			  <span class="align-left subtitle">internet - games - mobile</span>
			  </header>

        <p className="App-intro">
         
        </p>
      </div>
    );
  }
}

export default App;
