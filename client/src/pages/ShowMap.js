import React, { Component } from "react";
import Map from '../components/Map';
import { getResults, getSearchLocationDetails } from '../utils/AuthService';

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
      searchLocationDetails: {},
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
      this.setState({
      searchLocationDetails: this.props.location.state.searchLocationDetails,
      results: this.props.location.state.results
      });
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
    const search = (getSearchLocationDetails()).split(',');
    const clat = parseFloat(search[0]);
    const clng = parseFloat(search[1]);
    return (
      <div>
        <Map
          results={results}
          isMarkerShown
          isOpen={false}
          centerIsOpen={false}
          centerPosition={{lat: clat, lng: clng} }
          // onToggleOpen={this.onToggleOpen}
          // windowPosition={this.state.windowPosition}
          // toggleInfoWindow={this.toggleInfoWindow}
        />
      </div>
    );
  }
}

export default ShowMap;