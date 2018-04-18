import React from "react";
import { Card, CardActions, CardTitle, CardText, CardHeader } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { login } from '../../utils/AuthService';

const ResultsCard = props =>
    <Card>
        <CardTitle title="Results"
            className="raleway-text" />
        <CardText>
            {props.results.map(result =>
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
                        <br />
                    </CardText>
                </Card>
            )}
        </ CardText>
    </Card>;

export default ResultsCard;





