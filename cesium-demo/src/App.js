import React, { Component } from 'react';
import './App.css';
import CesiumGlobe from './cesium/CesiumGlobe';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h2 className="App-intro">Cesium Demo</h2>
        </div>
        <CesiumGlobe />
      </div>
    );
  }
}

export default App;
