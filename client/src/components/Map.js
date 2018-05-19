import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


import { compose, withProps, withStateHandlers } from "recompose";
import Mapmarker from "./Mapmarker";

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBumUHvERt5G6PSGrvs9MQHRbbHdS7BlQ",
        loadingElement: <div style={{ height: `100vh` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100vh` }} />,
    }),
    withStateHandlers(() => ({
        centerIsOpen: false,
    }),
        {
            onCenterToggleOpen: ({ centerIsOpen }) => () => ({
                centerIsOpen: !centerIsOpen,
            })
        }
    ),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={11}
        defaultCenter={props.centerPosition}
    >
        {props.isMarkerShown && <Marker
            icon={'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'}
            position={props.centerPosition}
            onClick={props.onCenterToggleOpen} >

            {props.centerIsOpen && <InfoWindow onCloseClick={props.onCenterToggleOpen}>
                <h5>Search Begins Here</h5>
            </InfoWindow>}
        </Marker>
        }
        {props.results && props.results.map(result =>
            <Mapmarker
                key={result.details_key}
                detailkey={result.details_key}
                position={{ lat: result.latitude, lng: result.longitude }}
                brewery_name={result.brewery_name}
                rating={result.rating}
                full_address={result.full_address}
                website={result.website}
            />
        )}
    </GoogleMap >
)



export default Map;