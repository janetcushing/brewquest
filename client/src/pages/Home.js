import React, { Component } from "react";
import { Redirect } from 'react-router';
import SearchField from "../components/SearchField";
import "../App.css";
import LocalDrink from 'material-ui/svg-icons/maps/local-drink';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import { grey50 } from 'material-ui/styles/colors';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
    color: grey50
  },
};

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      redirect: false,
      searchLocation: "",
      searchLocationDetails: {},
      isSearching: false,
      loggedIn: false,
      user: {}
    };

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  componentWillMount() {
    if (this.props.location.state) {
      this.setState({
        loggedIn: this.props.location.state.loggedIn,
        user: this.props.location.state.user
      });
    }
  }

  showPosition = position => {
    console.log("Latitude: " + position.coords.latitude +
      " Longitude: " + position.coords.longitude);
    let loc = position.coords.latitude + ',' + position.coords.longitude;
    console.log(position);
    this.setState({
      searchLocation: loc,
      searchLocationDetails: {},
      redirect: true,
      isSearching: true
    });
  }

  getUserLocation = event => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }



  handleSearchLocationChange = event => {
    this.setState({ searchLocation: event.target.value });
  };






  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.searchLocation) {
      alert("Please add search criteria");
    } else {
      this.setState({ redirect: true, isSearching: true });
    }
  };


  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/search',
        state: {
          searchLocation: this.state.searchLocation,
          searchLocationDetails: this.state.searchLocationDetails,
          isSearching: this.state.isSearching,
          user: this.state.user,
          loggedIn: this.state.loggedIn
        }

      }} />;
    }

    return (

      <div>
        <div id="home-page-background">
          <div id="searchPlacesDiv">
            <div id="title-div">
              <h2 id="beer-text">Where can I find a really good beer?</h2>
            </div>
            <br />
            <div id="search-field-div">
              <SearchField
                handleSearchLocationChange={this.handleSearchLocationChange}
                handleFormSubmit={this.handleFormSubmit}
                getUserLocation={this.getUserLocation}
                searchLocation={this.state.searchLocation} />
            </div>
            <div>
                {(this.state.isSearching) ? <CircularProgress size={60} thickness={7} /> : <div></div>}
              </div>
          </div>
        </div>
        <div id="secondary-info">
          <div id="find-beer-home">
            <LocalDrink className="home-page-icon" style={styles.smallIcon} />
            <h2>Find Beer</h2>
            <h4>Search for places you can go to get a really good beer!</h4>
          </div>
          <div id="save-places-home">
            <CheckCircle className="home-page-icon" style={styles.smallIcon} />
            <h2>Save Places</h2>
            <h4>Save places you want to check out to your saved list!</h4>
          </div>
          <div id="rate-places-home">
            <ThumbUp className="home-page-icon" style={styles.smallIcon} />
            <h2>Rate Places</h2>
            <h4>Rate the places you visit and see others' reviews.</h4>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;