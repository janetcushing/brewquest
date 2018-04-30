import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchField from "../components/SearchField";
import ResultsCard from "../components/ResultsCard/ResultsCard";
import API from "../utils/API";
import { isLoggedIn, setResults, getResults, clearResults } from '../utils/AuthService';


class Search extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      searchLocation: "",
      searchLocationDetails: {},
      loggedIn: "",
      result: [],
      user: {}
    };
  }

  componentWillMount() {
    if (this.props.location.state) {
      this.setState({
        searchLocation: this.props.location.state.searchLocation,
        user: this.props.location.state.user,
        loggedIn: this.props.location.state.loggedIn
      });
    }
  }

  componentDidMount() {
    this.setState({
      loggedIn: isLoggedIn()
    });
    if (this.props.location.state) {
      if (this.props.location.state.searchLocation) {
        //  let loc = `${this.state.searchLocationDetails.lat},${this.state.searchLocationDetails.lng}`;
        console.log('about to geocodeSearchCriteria');
        this.geocodeSearchCriteria(this.props.location.state.searchLocation);
      }
    }
  }



  searchApiPlaces = query => {
    console.log(`IN searchApiPlaces`);
    console.log(`query = ${query}`);
    clearResults();
    console.log('about to getApiPlaces');
    API.getApiPlaces(query)
      .then(res => {
        if (res.data === "location error from geocoder.geocode") {
          alert("Please enter a valid location");
        } else {
          // for (let i = 0; i < res.data.placeDetails.length; i++) {
          // }
          console.log(res);
          this.setState({
            result: res.data.placeDetails
          });
          console.log(res.data.placeDetails);
          setResults(res.data.placeDetails);
          console.log(getResults());
        }
      })
      .catch(err => console.log(err));
  };


  handleSearchLocationChange = event => {
    this.setState({
      searchLocation: event.target.value
    });
  };

  showPosition = position => {
    console.log("Latitude: " + position.coords.latitude +
      " Longitude: " + position.coords.longitude);
    let loc = position.coords.latitude + ',' + position.coords.longitude;
    console.log(position);
    this.geocodeSearchCriteria(loc);
    this.setState({ redirect: true });
  }

  geocodeSearchCriteria = loc => {
    API.reverseGeocode(loc)
      .then(res => {
        console.log(res);
        if (res.data === "location error from geocoder.geocode") {
          alert("Please enter a valid location");
        } else {
          console.log(res.data.locn.zipcode);
          console.log(res.data.locn.latitude);
          console.log(res.data.locn.longitude);
          this.setState({
            searchLocationDetails: {
              formattedAddress: res.data.locn.formattedAddress,
              searchLocation: res.data.locn.extra.neighborhood,
              zipcode: res.data.locn.zipcode,
              lat: res.data.locn.latitude,
              lng: res.data.locn.longitude
            },
            searchLocation: res.data.locn.extra.neighborhood
          });
          let loc = `${res.data.locn.latitude},${res.data.locn.longitude}`;
          console.log(this.state.searchLocationDetails);
          console.log(`searchLocation:  ${this.state.searchLocation}`);
          this.searchApiPlaces(loc);
        }
      });
  }
  getUserLocation = event => {
    this.setState({ searchLocation: ""});
    this.setState({ searchLocationDetails: {}});
    this.setState({ results: []});
    clearResults();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.searchLocation) {
      alert("Please add search criteria");
    } else {
      // let loc = `${this.state.searchLocationDetails.lat},${this.state.searchLocationDetails.lng}`;
      // this.setState({ searchLocationDetails: "", results: [] })
      this.setState({ results: [] })
      this.geocodeSearchCriteria(this.state.searchLocation);
    }
  };


  handlePlacesSave = (event, details_key) => {
    event.preventDefault();
    let holdResult = this.state.result;
    holdResult[details_key].saved = true;
    this.setState({
      result: holdResult
    });
    const loc = this.state.searchLocationDetails.lat + ',' + this.state.searchLocationDetails.lng;
    API.savePlace(this.state.result[details_key])
      .then(res =>
        this.searchApiPlaces(loc));
  };

  handlePlacesDelete = (event, details_key) => {
    event.preventDefault();
    let breweryId = this.state.result[details_key].brewery_id;
    const loc = this.state.searchLocationDetails.lat + ',' + this.state.searchLocationDetails.lng;
    API.deleteSavedPlaceByBreweryId(breweryId)
      .then(res => {
        this.searchApiPlaces(loc);
      });
  }

  render() {

    return (<
      div id="search-page-background" >
      <div className="main-container" > {
      } <Container >
          <Row >
            <Col size="sm-12" > {}
              <SearchField
                handleSearchLocationChange={this.handleSearchLocationChange}
                handleFormSubmit={this.handleFormSubmit}
                searchLocation={this.state.searchLocation}
                getUserLocation={this.getUserLocation}
              />
            </Col>
          </Row>
        </Container>

        <Container id="results-card-container" >
          <Row >
            <Col size="sm-12" >
              <ResultsCard
                results={this.state.result}
                handlePlacesSave={this.handlePlacesSave}
                handlePlacesDelete={this.handlePlacesDelete}
                loggedIn={this.state.loggedIn}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    );
  }
}

export default Search;