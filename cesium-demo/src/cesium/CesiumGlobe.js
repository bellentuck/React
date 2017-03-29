import React, { Component } from "react";

import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import BingMapsImageryProvider from "cesium/Source/Scene/BingMapsImageryProvider";
import CesiumTerrainProvider from "cesium/Source/Core/CesiumTerrainProvider";

const BING_MAPS_URL = "//dev.virtualearth.net";
const BING_MAPS_KEY = "AooLI2j67_6Se0LJcC0U0YQ23SUFlwP-4TAJdylpEuDP2UtbZCq1cZz2EC1_5tZF";
const STK_TERRAIN_URL = "//assets.agi.com/stk-terrain/world";

import CesiumBillboardExample from "./CesiumBillboardExample";


export default class CesiumGlobe extends Component {
    state = {
        viewerLoaded : false,
    }

    componentDidMount() {
        const imageryProvider = new BingMapsImageryProvider({
            url : BING_MAPS_URL,
            key : BING_MAPS_KEY,
        });

        const terrainProvider = new CesiumTerrainProvider({
            url : STK_TERRAIN_URL
        });

        this.viewer = new Viewer(this.cesiumContainer, {
            animation : false,
            baseLayerPicker : false,
            fullscreenButton : false,
            geocoder : false,
            homeButton : false,
            infoBox : false,
            sceneModePicker : false,
            selectionIndicator : true,
            timeline : false,
            navigationHelpButton : false,
            scene3DOnly : true,
            imageryProvider,
            terrainProvider,
        });

        // Force immediate re-render now that Cesium viewer is created
        this.setState({viewerLoaded: true});

    }

    /* As we start defining our Cesium-based React components,
    we can insert them into the contents <span>,
    and React will render them properly. */
    renderContents() {
      const {viewerLoaded} = this.state;
      let contents = null;

      if(viewerLoaded) {
        const {scene} = this.viewer;
        contents = (
          <span>
            <CesiumBillboardExample scene={scene} />
          </span>
        );
      }

      return contents;
    }

    componentWillUnmount() {
        if(this.viewer) {
            this.viewer.destroy();
        }
    }
    render() {
        const contents = this.renderContents();

        const containerStyle = {
            width: '100%',
            height: '100%',
            display : "flex",
            alignItems : "stretch",
        };

        const widgetStyle = {
            flexGrow : 2
        }

        return (
            <div className="cesiumGlobeWrapper" style={containerStyle}>
                <div
                    className="cesiumWidget"
                    ref={ element => this.cesiumContainer = element }
                    style={widgetStyle}
                >
                  {contents}
                </div>
            </div>
        );
    }
}
