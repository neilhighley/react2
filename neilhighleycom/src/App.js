import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AppNavigation from './AppNavigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader></AppHeader>
        
        <AppNavigation></AppNavigation>
      </div>
    );
  }
}

export default App;
