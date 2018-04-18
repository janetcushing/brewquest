import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { SavedListItem, SavedList } from "../components/SavedPlacesList";
import Clear from 'material-ui/svg-icons/content/clear';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank'
import CheckBox from 'material-ui/svg-icons/toggle/check-box'
import { getUserAud } from '../utils/AuthService';

class SavedPlaces extends Component {
  state = {
    results: [],
    loggedIn: false,
    user: {}
  };

  componentWillMount() {
    let userAud = getUserAud();
    let userData = { aud: userAud };
    this.setState({ user: userData });
    this.setState({ loggedIn: true });
  }

  componentDidMount() {
    this.loadSavedPlaces();
  }

  loadSavedPlaces = () => {
    API.getSavedPlaces()
      .then(res =>
        this.setState({ results: res.data })
      )
      .catch(err => console.log(err));
  };

  deletePlace = id => {
    API.deleteSavedPlace(id)
      .then(res => this.loadSavedPlaces())
      .catch(err => console.log(err));
  };

  checkBeenThere = id => {
    API.beenToPlace(id)
      .then(res => this.loadSavedPlaces())
      .catch(err => console.log(err));
  };

  unCheckBeenThere = id => {
    API.haveNotBeenToPlace(id)
      .then(res => this.loadSavedPlaces())
      .catch(err => console.log(err));
  };

  placeDetailPage = id => {
    API.getSavedPlace(id)
      .then(res => this.getSavedPlace())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div id="saved-page-background">
        <Container>
          <Row>
            <Col size="sm-12">
            </Col>
          </Row>
        </Container>
        <div class="main-container">
          <Container>
            {this.state.results.length ? (
              <SavedList>
                {this.state.results.map(result => {
                  return (
                    <Card>
                      <SavedListItem key={result._id}>
                        <Row>
                          <Link to={{
                            pathname: '/savedplaces/' + result._id,
                            state: {
                              placedetail: result,
                              user: this.state.user
                            }
                          }}>
                            <Col size="sm-10">
                              <div id="card-title-div">
                                <CardTitle title={result.brewery_name} subtitle={"Rating: " + result.rating} />
                              </div>
                            </Col>
                          </Link>
                          <Col size="sm-2">
                            <div id="card-action-div" class="main-container">
                              <CardActions id="card-actions">
                                <Clear onClick={() => this.deletePlace(result._id)} />
                                {
                                  (result.been_there) ?
                                    <CheckBox onClick={() => this.unCheckBeenThere(result._id)} /> : <CheckBoxOutlineBlank onClick={() => this.checkBeenThere(result._id)} />
                                }
                                )}
                        </CardActions>
                            </div>
                          </Col>
                        </Row>
                      </SavedListItem>
                    </Card>
                  );
                })}
              </SavedList>
            ) : (
                <h2 class="raleway-text">No Saved Breweries Yet</h2>
              )}
          </Container>
        </div>
      </div>
    );
  }
}

export default SavedPlaces;



