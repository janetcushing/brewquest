import decode from 'jwt-decode';
import auth0 from 'auth0-js';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';
const CLIENT_ID = 'hBUrEY7ugr1dCF8SatxQiOnIVVW4c5ia';
const CLIENT_DOMAIN = 'beer-quest.auth0.com';
// const REDIRECT = process.env.CALLBACK_URI || 'http://localhost:3000/callback';
const REDIRECT = window.location.hostname === 'brewquest.herokuapp.com' ? 'https://' + window.location.hostname + '/callback' : 'http://localhost:3000/callback'
const SCOPE = 'openid profile';
const AUDIENCE = 'https://beer-quest.auth0.com/userinfo';


const auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

export function login() {
  console.log('window.location.hostname');
  console.log(window.location.hostname);
  auth.authorize({
    responseType: 'token id_token',
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE
  });

}

export function logout() {
  console.log("im in logout()");
  clearIdToken();
  clearAccessToken();
  clearUser();
  window.location.href = window.location.origin;
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({
      pathname: '/'
    });
  }
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

export function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  return accessToken;
}

// Get and store id_token in local storage
export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
  return idToken;
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

export function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) {
    return null;
  }
  const date = new Date(0);
  date.setUTCSeconds(token.exp);
  return date;
}


  function isTokenExpired(token) {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
  }

  export function decodeToken(token) {
    const decoded = decode(token);
    console.log((decoded));
    return decoded;
  }

// Get and store user in local storage
export function setUser(user) {
  localStorage.setItem('usub', user.sub);
  return;
}

// Clear user name from local storage
export function clearUser() {
  localStorage.removeItem('usub');
}

// Get  user sub from local storage
export function getUserSub() {
  return localStorage.getItem('usub');
}

// Get and store results in local storage
export function setResults(results) {
  localStorage.setItem('results', JSON.stringify(results));
  return;
}

// Clear results from local storage
export function clearResults() {
  localStorage.removeItem('results');
}

// Get  results from local storage
export function getResults() {
  return JSON.parse(localStorage.getItem("results") || "[{}]");
  // localStorage.getItem('results');
}

// Get and store search data in local storage
export function setSearchLocationDetails(search) {
  localStorage.setItem('search', search);
  return;
}

// Clear search data from local storage
export function clearSearchLocationDetails() {
  localStorage.removeItem('search');
}

// Get  search data from local storage
export function getSearchLocationDetails() {
  return localStorage.getItem("search");
}