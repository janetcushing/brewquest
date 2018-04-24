import React, { Component } from "react";
// import GoogleMapReact from 'google-map-react';
import Map from '../components/Map';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import { grey50 } from 'material-ui/styles/colors';
import { getResults } from '../utils/AuthService';

// const styles = {
//   smallIcon: {
//     width: 36,
//     height: 36,
//     color: grey50
//   },
// };


// const AnyReactComponent = ({ text }) => (
//   <div style={{
//     position: 'relative', color: 'white', background: 'red',
//     height: 40, width: 60, top: -20, left: -30,
//   }}>
//     {text}
//   </div>
// );

class ShowMap extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchLocation: "",
      results: []
    };

  }



  static defaultProps = {
    center: { lat: 43.013453, lng: -70.895234 },
    zoom: 11,

  };

  componentWillMount() {
    if (this.props.location.state) {
      // this.setState({
      // searchLocation: this.props.location.state.searchLocation,
      // results: this.props.location.state.results
      // });
    }



  }


  render() {
    const results = getResults();
    console.log("results");
    console.log(results);
    const results2 = [
      { brewery_name: 'Throwback Brewery', latitude: 42.9810948, longitude: -70.8345561 },
      { brewery_name: 'Loaded Question Brewing Company - coming soon', latitude: 43.0679485, longitude: -70.7750565 },
      { brewery_name: 'Stoneface Brewing Co.', latitude: 43.1149002, longitude: -70.8185158 }
    ];
    return (
      <div>
        <Map
          results={results}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100vh` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100vh` }} />}
        />
      </div>
    );
  }
}

export default ShowMap;