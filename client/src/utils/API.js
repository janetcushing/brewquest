import axios from "axios";

export default {
  // Gets all places
  getSavedPlaces: function (sub) {
    console.log(`im in API.getSavedPlaces - here is sub`);
    console.log(sub);
    return axios.get("/api/savedplaces2/" + sub);
  },
  // Gets the brewery from the breweries collection with the given id
  getSavedPlace: function (id) {
    return axios.get("/api/savedplaces/" + id);
  },
  // Deletes the place with the given id
  deleteSavedPlaceByBreweryId: function (breweryId) {
    return axios.delete("/api/savedplace/" + breweryId);
  },
  // Saves a place to the breweries database
  savePlace: function (savedPlacesData) {
    return axios.post("/api/savedplaces", savedPlacesData);
  },
  // delete a place from the breweries database
  deleteSavedPlace: function (id) {
    return axios.delete("/api/savedplaces/" + id);
  },
  //update the been to place boolean
  beenToPlace: function (id) {
    return axios.put("/api/savedplaces/" + id, {
      been_there: true
    })
  },
  //update the been to place boolean
  haveNotBeenToPlace: function (id) {
    return axios.put("/api/savedplaces/" + id, {
      been_there: false
    })
  },
  // get location from the google places api
  reverseGeocode: function (loc) {
    console.log('in reverseGeocode');
    return axios.get("/api/apilocation/" + loc)
  },
  // get data from the google places api
  getApiPlaces: function (query) {
    console.log('im in getApiPlaces')
    return axios.get("/api/apiplaces/", {
      params: {
        lat: query.lat,
        lng: query.lng,
        sub: query.sub
      }
    })
  },
  // Saves a user to the UserStore database
  saveUser: function (userData) {
    return axios.post("/api/user/", userData);
  },
  // Looks for a user in the UserStores database
  findUser: function (sub) {
    console.log(`im in API.findUser - here is sub`);
    console.log(sub);
    return axios.get("/api/user/" + sub);
  },
  // Updates a user in the UserStore database
  updateUser: function (sub, loggedIn) {
    return axios.put("/api/user/" + sub, loggedIn);
  },
  // Saves a note to the Notes database
  saveNote: function (savedNoteData) {
    console.log(savedNoteData);
    return axios.post("/api/savednotes", savedNoteData);
  },
  // Deletes a note to the Notes database
  deleteSavedNote: function (noteId) {
    return axios.delete("/api/savednotes/", {
      params: {
        id: noteId
      }
    });
  },
  // retrieves notes from the Notes database
  getSavedNotes: function (noteData) {
    console.log('im in getSavedNotes - noteData');
    console.log(noteData);
    return axios.get("/api/savednotes", {
      params: {
        id: noteData.brewery_id,
        sub: noteData.sub
      }
    });
  },
  // Saves a review to the Reviews database
  saveReview: function (savedReviewData) {
    console.log(savedReviewData);
    return axios.post("/api/savedreviews", savedReviewData);
  },
  // retrieves reviews from the Reviews database
  getSavedReviews: function (reviewData) {
    return axios.get("/api/savedreviews", {
      params: {
        id: reviewData.brewery_id
      }
    });
  }
};