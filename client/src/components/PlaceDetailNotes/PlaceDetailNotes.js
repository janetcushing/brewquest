import React from "react";
import { Card, CardActions, CardText, CardHeader } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Clear from 'material-ui/svg-icons/content/clear';
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

const PlaceDetailNotes = props =>


    <Card>

        <CardHeader
            actAsExpander={true}
            showExpandableButton={true}
            title="My Notes"
            className="raleway-text" />

        <CardText expandable={true}
            className="raleway-text">

            <TextField
                hintText="Enter a Note Here"
                multiLine={true}
                fullWidth={true}
                rows={1}
                rowsMax={4}
                value={props.noteInput}
                onChange={props.handleNoteInputChange}
            />

            <CardActions>

                <RaisedButton
                    onClick={(event) => props.handleSaveNote(event)}
                    label="Add a Note"
                    primary={true} />

            </CardActions>


            {props.savedNotes.map(note =>


                <Card key={note._id}>

                    <Container>
                        <Row>
                            <Col size="sm-10">
                                <CardText className="raleway-text notes-column">

                                    {note.body}

                                </CardText>
                            </Col>

                            <Col size="sm-2">
                                <CardActions className="delete-note-column">

                                    <Clear onClick={() => props.handleDeleteNote(note._id)} />

                                </CardActions>
                            </Col>
                        </Row>
                    </Container>

                </Card>

            )}

        </CardText>
    </Card>

export default PlaceDetailNotes;
