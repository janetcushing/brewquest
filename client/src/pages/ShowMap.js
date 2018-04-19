import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
// import { grey50 } from 'material-ui/styles/colors';

// const styles = {
//   smallIcon: {
//     width: 36,
//     height: 36,
//     color: grey50
//   },
// };


const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,    
  }}>
    {text}
  </div>
);
 
class ShowMap extends Component {
  static defaultProps = {
    center: {lat:  43.013453, lng: -70.895234},
    zoom: 11
  };
 
  render() {
    return (
      <div style={{width: '100%', height: '800px'}}>
      {/* <ShowMap/> */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCBumUHvERt5G6PSGrvs9MQHRbbHdS7BlQ' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={43.013453}
          lng={-70.895234}
          text={'Stratham, NH'}
        />
      </GoogleMapReact> 
     </div>
    );
   
  }
}

// ReactDOM.render(
  // <div style={{width: '100%', height: '400px'}}>
  //   <ShowMap/>
  // </div>,
  // document.getElementById('main')
  

// class ShowMap extends Component {
//   constructor(props, context) {
//     super(props, context);

//     this.state = {
//       open: false,
//       searchLocation: "",
//       user: {},
//       results: []
//     };

  //   this.handleRequestClose = this.handleRequestClose.bind(this);
  //   this.handleTouchTap = this.handleTouchTap.bind(this);
  //   const service = new google.maps.places.PlacesService(map);
  //   service.nearbySearch(request, (results, status) => {
  //     if (status == google.maps.places.PlacesServiceStatus.OK) {
  //       for (var i = 0; i < results.length; i++) {
  //         var place = results[i];
  //         // If the request succeeds, draw the place location on
  //         // the map as a marker, and register an event to handle a
  //         // click on the marker.
  //         var marker = new google.maps.Marker({
  //           map: map,
  //           position: place.geometry.location
  //         });
  //       }
  //     }
  //   });
  // }

  
 



  // initialize() {
  //   var pyrmont = new google.maps.LatLng(-33.8665, 151.1956);
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     center: pyrmont,
  //     zoom: 15,
  //     scrollwheel: false
  //   });
  // }

  // componentWillMount() {
  //   if (this.props.location.state) {
  //     this.setState({
  //       loggedIn: this.props.location.state.loggedIn,
  //       user: this.props.location.state.user,
  //       user: this.props.location.state.results
  //     });
  //   }
  //   initialize();
  // }


  
  
  
  // handleRequestClose() {
  //   this.setState({
  //     open: false,
  //   });
  // }

  // handleTouchTap() {
  //   this.setState({
  //     open: true,
  //   });
  // }

//   render() {
    

//     return (

//       <div>
//           <div id="searchPlacesDiv">
//             <br />
//           </div>
//       </div>
//     );
//   }
// }
export default ShowMap;