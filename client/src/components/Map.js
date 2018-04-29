import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
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
        centerIsOpen: false,
        
    }),
        {
            onToggleOpen: ({ isOpen }) => () => ({
                isOpen: !isOpen,
                }),
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
        defaultCenter={{ lat: 43.013453, lng: -70.895234 }}
    >
        {props.isMarkerShown && <Marker
            icon={'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'}
            position={{ lat: 43.013453, lng: -70.895234 }}
            onClick={props.onCenterToggleOpen} >

            {props.centerIsOpen && <InfoWindow onCloseClick={props.onCenterToggleOpen}>
                <h5>Search Begins Here</h5>
            </InfoWindow>}
        </Marker>
        }
        {props.results && props.results.map(result =>
            <Marker
                key={result.details_key}
                icon={'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}
                position={{ lat: result.latitude, lng: result.longitude }}
                // onClick={props.onToggleOpen}
            >
       

        { props.isOpen &&
            <InfoWindow
                onCloseClick={props.onToggleOpen} >
                 <h5>Info Window</h5>
           
                        {/* <CardHeader
                            actAsExpander={true}
                            showExpandableButton={true}
                            title={result.brewery_name}
                            subtitle={'Rating: ' + result.rating}
                            className="raleway-text" */}
                        {/* />  */}
        {/* <CardText expandable={true}
                            className="raleway-text">  */}

        {/* <h4>Total Reviews</h4>
                            {result.num_reviews} reviews
                        <br />
                            <h4>Open Now?</h4>
                            {(result.open_now) ? 'Open Now' : 'Not Open Now'}
                            <br />
                            <h4>Address</h4>
                            {result.full_address}
                            <br />
                            <h4>Phone</h4>
                            {result.phone}
                            <br />
                            <h4>Website</h4>
                            <a href={result.website} target="_new_tab">{result.website}</a>
                            <br />
                            {result.saved}
                            <CardActions> */}
        {/* { */}
                                {/* //     (!props.loggedIn) ? */}
                                {/* //         <RaisedButton */}
                                {/* //             onClick={() => login()}
                                //             label="Login to Save"
                                //             className="save-button" />
                                //         :
                                //         (result.saved) ?
                                //             <RaisedButton */}
                                {/* //                 onClick={(event) => props.handlePlacesDelete(event, result.details_key)}
                                //                 value={result.details_key}
                                //                 label="Delete from Saved"
                                //                 className="save-button" />
                                //             :
                                //             <RaisedButton */}
                                {/* //                 onClick={(event) => props.handlePlacesSave(event, result.details_key)}
                                //                 value={result.details_key}
                                //                 label="Save to my list"
                                //                 className="save-button"
                                //                 primary={true} />
                                // } */}
                            {/* // </CardActions> */}
                        {/* // </CardText> */}
                    {/* // </Card> */}
            </InfoWindow> }
        </Marker>
 )}
    </GoogleMap >
)



export default Map;