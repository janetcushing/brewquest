import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, MarkerWithLabel } from "react-google-maps"
import { InfoWindow } from 'react-google-maps';
import { Card, CardActions, CardTitle, CardText, CardHeader } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { login } from '../utils/AuthService';
import { compose, withProps, withStateHandlers } from "recompose";


const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBumUHvERt5G6PSGrvs9MQHRbbHdS7BlQ",
        loadingElement: <div style={{ height: `100vh` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100vh` }} />,
    }),
    withStateHandlers(() => ({
        isOpen: false,
        // centerIsOpen: false,

    }),
        {
            onToggleOpen: ({ isOpen }) => () => ({
                isOpen: !isOpen,
                // }),
                // onCenterToggleOpen: ({ centerIsOpen }) => () => ({
                //     centerIsOpen: !centerIsOpen,
            })
        }
    ),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 43.013453, lng: -70.895234 }}
    >
        {props.results && props.results.map(result =>
            <MarkerWithLabel
                key={result.details_key}
                icon={'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}
                position={{ lat: result.latitude, lng: result.longitude }}
                labelAnchor={getCenter()}
                labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
            >
            'label'
            </MarkerWithLabel>
        )}
    </GoogleMap >
)



export default Map;