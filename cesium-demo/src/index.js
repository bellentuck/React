import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'cesium/Source/Widgets/widgets.css';
import buildModuleUrl from "cesium/Source/Core/buildModuleUrl";

//corresponds to the pre-built Cesium folder we copied earlier into $PROJECT/public:
buildModuleUrl.setBaseUrl('./cesium/');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
