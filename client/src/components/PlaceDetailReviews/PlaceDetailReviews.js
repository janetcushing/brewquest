import React from "react";
import { Card, CardActions, CardText, CardHeader } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const PlaceDetailReviews = props =>


    <Card>

        <CardHeader
            actAsExpander={true}
            showExpandableButton={true}
            title="Reviews"
            className="raleway-text" />


        <CardText expandable={true}
            className="raleway-text">

            <SelectField
                hintText="Rating"
                value={props.ratingInput}
                onChange={props.handleRatingInputChange}
            >

                <MenuItem value={null} primaryText="" />
                <MenuItem value={5} primaryText="Very Good" />
                <MenuItem value={4} primaryText="Good" />
                <MenuItem value={3} primaryText="Not Bad" />
                <MenuItem value={2} primaryText="Bad" />
                <MenuItem value={1} primaryText="The Worst" />
            </SelectField>

            <TextField
                hintText="Add a New Review"
                multiLine={true}
                fullWidth={true}
                rows={1}
                rowsMax={4}
                value={props.reviewInput}
                onChange={props.handleReviewInputChange}
            />

            <CardActions>

                <RaisedButton
                    onClick={(event) => props.handleSaveReview(event)}
                    label="Add Review"
                    primary={true} />

            </CardActions>

            {props.savedReviews.map(review =>


                <Card key={review._id}>

                    <CardText className="raleway-text notes-column">

                        {props.renderStars(review.rating)}
                        <br />
                        {review.body}

                    </CardText>

                </Card>

            )}

        </CardText>
    </Card>

export default PlaceDetailReviews;
