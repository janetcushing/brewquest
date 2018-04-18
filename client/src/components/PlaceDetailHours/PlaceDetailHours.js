import React from "react";
import { Card, CardText, CardHeader } from 'material-ui/Card';

const PlaceDetailHours = props =>
    <Card>
        <CardHeader title="Hours"
            actAsExpander={true}
            showExpandableButton={true}
            className="raleway-text" />
        <CardText expandable={true}
            className="raleway-text">
            <ul>
                <p>
                    {props.SundayHours}
                </p>
                <p>
                    {props.MondayHours}
                </p>
                <p>
                    {props.TuesdayHours}
                </p>
                <p>
                    {props.WednesdayHours}
                </p>
                <p>
                    {props.ThursdayHours}
                </p>
                <p>
                    {props.FridayHours}
                </p>
                <p>
                    {props.SaturdayHours}
                </p>
            </ul>
        </CardText>
    </Card>

export default PlaceDetailHours;
