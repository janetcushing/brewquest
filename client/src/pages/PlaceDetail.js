import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import Clear from 'material-ui/svg-icons/content/clear';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank'
import CheckBox from 'material-ui/svg-icons/toggle/check-box'
import Stars from 'material-ui/svg-icons/action/stars';
import Place from 'material-ui/svg-icons/maps/place'
import PlaceDetailHours from "../components/PlaceDetailHours";
import PlaceDetailGeneralInformation from "../components/PlaceDetailGeneralInformation";
import PlaceDetailNotes from "../components/PlaceDetailNotes";
import PlaceDetailReviews from "../components/PlaceDetailReviews";
import { getUserAud } from '../utils/AuthService';

class Detail extends Component {
    state = {
        results: [],
        detail: [],
        been_there: null,
        user: {},
        savedNotes: [],
        savedReviews: [],
        noteInput: "",
        ratingInput: null,
        reviewInput: ""
    };

    componentWillMount() {
        let userAud = getUserAud();
        let userData = { aud: userAud };
        this.setState({ user: userData });
        this.setState({ loggedIn: true });
        if (this.props.location.state) {
            this.setState({ detail: this.props.location.state.placedetail })
            this.setState({ been_there: this.props.location.state.placedetail.been_there })
        }


    }

    componentDidMount() {
        let initialLoadData = {
            brewery_id: this.state.detail._id,
            aud: this.state.user.aud,
        };

        this.loadSavedNotes(initialLoadData);
        this.loadSavedReviews(initialLoadData);
    }

    deletePlace = id => {
        API.deleteSavedPlace(id)
            .then(res => window.location.href = '/savedplaces')
            .catch(console.log('oops, there it is!'))
    };

    checkBeenThere = id => {
        API.beenToPlace(id)
            .then(res => this.setState({ been_there: true }))
            .catch(err => console.log(err));
    };

    unCheckBeenThere = id => {
        API.haveNotBeenToPlace(id)
            .then(res => this.setState({ been_there: false }))
            .catch(err => console.log(err));
    };

    handleNoteInputChange = event => {
        this.setState({
            noteInput: event.target.value
        });
    };

    handleSaveNote = event => {
        event.preventDefault();

        if (!this.state.noteInput) {
            alert("Please add a note");
        } else {
            let savedNoteData = {
                brewery_id: this.state.detail._id,
                body: this.state.noteInput,
                aud: this.state.user.aud
            }
            API.saveNote(savedNoteData)
                .then(res =>
                    this.loadSavedNotes(savedNoteData))
                .then(
                    this.setState({ noteInput: "" })
                );
        }
    };

    handleDeleteNote = id => {
        let initialLoadData = {
            brewery_id: this.state.detail._id,
            aud: this.state.user.aud,
        };

        API.deleteSavedNote(id)
            .then(res =>
                this.loadSavedNotes(initialLoadData))
            .catch(err => console.log(err));
    };

    loadSavedNotes = noteDataObject => {
        API.getSavedNotes(noteDataObject)
            .then(res =>
                this.setState({ savedNotes: res.data })
            )
            .catch(err => console.log(err));
    };

    handleRatingInputChange = (event, index, ratingInput) => this.setState({ ratingInput });

    handleReviewInputChange = event => {
        this.setState({
            reviewInput: event.target.value
        });
    };

    handleSaveReview = event => {
        event.preventDefault();

        if (this.state.ratingInput === null) {
            alert("You must provide a Rating.");
        } else {
            let savedReviewData = {
                brewery_id: this.state.detail._id,
                aud: this.state.user.aud,
                rating: this.state.ratingInput,
                body: this.state.reviewInput
            }
            API.saveReview(savedReviewData)
                .then(res =>
                    this.loadSavedReviews(savedReviewData))
                .then(
                    this.setState({
                        reviewInput: "", ratingInput: null
                    })
                );
        }
    };

    loadSavedReviews = reviewDataObject => {
        API.getSavedReviews(reviewDataObject)
            .then(res =>
                this.setState({ savedReviews: res.data })
            )
            .catch(err => console.log(err));
    };

    renderStars(ratingValue) {
        switch (ratingValue) {
            case 5:
                return <div><Stars /><Stars /><Stars /><Stars /><Stars /></div>;
            case 4:
                return <div><Stars /><Stars /><Stars /><Stars /></div>;
            case 3:
                return <div><Stars /><Stars /><Stars /></div>;
            case 2:
                return <div><Stars /><Stars /></div>;
            case 1:
                return <div><Stars /></div>;
            default:
                return "";
        }
    };


    render() {


        return (
            <div id="saved-detail-page-background">
                <div class="main-container">
                    <Container>
                        <Card key={this.state.detail._id}>
                            <Row>
                                <Col size="sm-8">
                                    <div id="card-title-div">
                                        <CardTitle title={this.state.detail.brewery_name} />
                                    </div>
                                </Col>
                                <Col size="sm-4">
                                    <div id="card-action-div" className="main-container">
                                        <CardActions>
                                            {
                                                (this.state.been_there) ?
                                                    <CheckBox onClick={() => this.unCheckBeenThere(this.state.detail._id)} /> : <CheckBoxOutlineBlank onClick={() => this.checkBeenThere(this.state.detail._id)} />
                                            }
                                            )}

                                            <a href={this.state.detail.url} target="blank" >
                                                <Place />
                                            </a>
                                            <Clear onClick={() => this.deletePlace(this.state.detail._id)} />
                                        </CardActions>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="sm-12">
                                    <PlaceDetailGeneralInformation
                                        full_address={this.state.detail.full_address}
                                        num_reviews={this.state.detail.num_reviews}
                                        phone={this.state.detail.phone}
                                        website={<a href={this.state.detail.website} target="_new_tab">{this.state.detail.website}</a>}
                                    />

                                    <PlaceDetailHours
                                        SundayHours={this.state.detail.weekday_text[6]}
                                        MondayHours={this.state.detail.weekday_text[0]}
                                        TuesdayHours={this.state.detail.weekday_text[1]}
                                        WednesdayHours={this.state.detail.weekday_text[2]}
                                        ThursdayHours={this.state.detail.weekday_text[3]}
                                        FridayHours={this.state.detail.weekday_text[4]}
                                        SaturdayHours={this.state.detail.weekday_text[5]}
                                    />


                                    <PlaceDetailNotes
                                        handleNoteInputChange={this.handleNoteInputChange}
                                        handleSaveNote={this.handleSaveNote}
                                        handleDeleteNote={this.handleDeleteNote}
                                        noteInput={this.state.noteInput}
                                        savedNotes={this.state.savedNotes}
                                    />

                                    <PlaceDetailReviews
                                        ratingInput={this.state.ratingInput}
                                        reviewInput={this.state.reviewInput}
                                        renderStars={this.renderStars}
                                        handleRatingInputChange={this.handleRatingInputChange}
                                        handleReviewInputChange={this.handleReviewInputChange}
                                        handleSaveReview={this.handleSaveReview}
                                        savedReviews={this.state.savedReviews}
                                    />

                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Detail;