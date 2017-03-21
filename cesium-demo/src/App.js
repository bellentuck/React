import React, { Component } from 'react';
import './App.css';
import Viewer from 'cesium/Source/Widgets/Viewer/Viewer';

class App extends Component {
  componentDidMount() {
    this.viewer = new Viewer(this.cesiumContainer);
  }

  render() {
    return (
      <div>
      <div className="App-header">
      <h2 className="App-intro">Cesium Demo</h2>
      </div>
      <div id='cesiumContainer' ref={ element => this.cesiumContainer = element }/>
      <ol>
        <li>
        http://blog.isquaredsoftware.com/2017/03/declarative-earth-part-1-cesium-webpack/
        </li>
        <li>
        http://blog.isquaredsoftware.com/2017/03/declarative-earth-part-2-cesium-react/
        </li>
      </ol>
      </div>
    );
  }
}

export default App;
