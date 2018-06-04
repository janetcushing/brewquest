import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchField from "../components/SearchField";
import ResultsCard from "../components/ResultsCard/ResultsCard";
import API from "../utils/API";
import { isLoggedIn, setResults, getResults, clearResults } from '../utils/AuthService';
import { setSearchLocationDetails, getSearchLocationDetails, clearSearchLocationDetails } from '../utils/AuthService';
import CircularProgress from 'material-ui/CircularProgress';


class Search extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      searchLocation: "",
      searchLocationDetails: {},
      isSearching: false,
      loggedIn: "",
      result: [],
      user: {}
    };
  }

  componentWillMount() {
    if (this.props.location.state) {
      this.setState({
        searchLocation: this.props.location.state.searchLocation,
        isSearching: this.props.location.state.isSearching,
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
        this.geocodeSearchCriteria(this.props.location.state.searchLocation);
      }
    }
  }



  searchApiPlaces = query => {
    clearResults();
    API.getApiPlaces(query)
      .then(res => {
        
        if (res.data === "location error from geocoder.geocode") {
          alert("Please enter a valid location");
        } else {
          // for (let i = 0; i < res.data.placeDetails.length; i++) {
          // }
          console.log(res);
          this.setState({
            result: res.data.placeDetails,
            isSearching: false
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
    let loc = position.coords.latitude + ',' + position.coords.longitude;
    this.geocodeSearchCriteria(loc);
    this.setState({ redirect: true, isSearching: true });
  }

  geocodeSearchCriteria = loc => {
    clearSearchLocationDetails();
    API.reverseGeocode(loc)
      .then(res => {
        if (res.data === "location error from geocoder.geocode") {
          alert("Please enter a valid location");
        } else {
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
          let loc = { lat: res.data.locn.latitude,
            lng: res.data.locn.longitude,
            sub: this.state.user.sub
          };
          console.log(JSON.stringify(loc));
          let search = `${loc.lat},${loc.lng}`;
          console.log(search);
          setSearchLocationDetails(search);
          this.searchApiPlaces(loc);
        }
      });
  }
  getUserLocation = event => {
    this.setState({ searchLocation: "" });
    this.setState({ searchLocationDetails: {} });
    this.setState({ results: [] });
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
      this.setState({ results: [], isSearching: true })
      this.geocodeSearchCriteria(this.state.searchLocation);
    }
  };


  handlePlacesSave = (event, details_key) => {
    event.preventDefault();
    let holdResult = this.state.result;
    holdResult[details_key].saved = true;
    holdResult[details_key].sub = this.state.user.sub;
    this.setState({
      result: holdResult
    });
    let loc = { lat: this.state.searchLocationDetails.lat,
      lng: this.state.searchLocationDetails.lng,
      sub: this.state.user.sub
    };
    API.savePlace(this.state.result[details_key])
      .then(res =>
        this.searchApiPlaces(loc));
  };

  handlePlacesDelete = (event, details_key) => {
    event.preventDefault();
    let breweryId = this.state.result[details_key].brewery_id;
    let sub = this.state.user.sub;
    const loc = { lat: this.state.searchLocationDetails.lat,
      lng: this.state.searchLocationDetails.lng,
      sub: this.state.user.sub
    };
    API.deleteSavedPlaceByBreweryId(breweryId, sub)
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
               {(this.state.isSearching)? <CircularProgress size={50} thickness={7} />:<div></div>}

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
                sub={this.state.user.sub}
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