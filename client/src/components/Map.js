import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { InfoWindow } from 'react-google-maps';
import { Card, CardActions, CardTitle, CardText, CardHeader } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { login } from '../utils/AuthService';


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
                position={{ lat: result.latitude, lng: result.longitude }} >
                )}
                 {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen(props.isOpen)}>
                    <Card key={result.details_key}>
                        <CardHeader
                            actAsExpander={true}
                            showExpandableButton={true}
                            title={result.brewery_name}
                            subtitle={'Rating: ' + result.rating}
                            className="raleway-text"
                        />
                        <CardText expandable={true}
                            className="raleway-text">

                            <h4>Total Reviews</h4>
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
                            <CardActions>
                                {
                                    (!props.loggedIn) ?
                                        <RaisedButton
                                            onClick={() => login()}
                                            label="Login to Save"
                                            className="save-button" />
                                        :
                                        (result.saved) ?
                                            <RaisedButton
                                                onClick={(event) => props.handlePlacesDelete(event, result.details_key)}
                                                value={result.details_key}
                                                label="Delete from Saved"
                                                className="save-button" />
                                            :
                                            <RaisedButton
                                                onClick={(event) => props.handlePlacesSave(event, result.details_key)}
                                                value={result.details_key}
                                                label="Save to my list"
                                                className="save-button"
                                                primary={true} />
                                }
                            </CardActions>
                        </CardText>
                    </Card>
                </InfoWindow>}
            </Marker>
        )}
    </GoogleMap >
))



export default Map;