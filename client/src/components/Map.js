import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// const results = results2.map((result,i) => {
//     let position = new google.maps.LatLng(result[i].brewery_name, result[i].latitude, result[i].longitude);
//     bounds.extend(position);
//     marker = new google.maps.Marker({
//         position: position,
//         map: map,
//         title: result[i][0]
//     });
// }

const Map = withScriptjs(withGoogleMap((props) =>

    <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 43.013453, lng: -70.895234 }}
    >
        {props.isMarkerShown && <Marker
            icon={'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'}
            position={{ lat: 43.013453, lng: -70.895234 }} />}
        {props.results && props.results.map(result =>
            <Marker
                key={result.details_key}
                icon={'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}
                position={{ lat: result.latitude, lng: result.longitude }} />)}
    </GoogleMap>
))



export default Map;