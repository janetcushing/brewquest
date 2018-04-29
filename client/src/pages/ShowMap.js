import React, { Component } from "react";
import Map from '../components/Map';
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
      results: [],
      windowPosition: null
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

  // toggleInfoWindow = (loc) => {
  //   // clicking 'x' in the info window will pass null, so if we detect that, reset the position in state
  //   if (loc == null) {
  //     this.setState({ windowPosition: null })
  //     return
  //   }
  //   // otherwise get coords of clicked marker and set to state
  //   let markerLoc = { lat: loc.lat, lng: loc.Lng }
  //   this.setState({ windowPosition: markerLoc })
  // }
 
  render() {
    const results = getResults();
    console.log("results");
    console.log(results);
    return (
      <div>
        <Map
          results={results}
          isMarkerShown
          isOpen={false}
          centerIsOpen={false}
          centerPosition={{lat: 43.013453, lng: -70.895234 }}
          // onToggleOpen={this.onToggleOpen}
          // windowPosition={this.state.windowPosition}
          // toggleInfoWindow={this.toggleInfoWindow}
          // googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBumUHvERt5G6PSGrvs9MQHRbbHdS7BlQ"
          // loadingElement={<div style={{ height: `100vh` }} />}
          // containerElement={<div style={{ height: `100vh` }} />}
          // mapElement={<div style={{ height: `100vh` }} />}
        />
      </div>
    );
  }
}

export default ShowMap;