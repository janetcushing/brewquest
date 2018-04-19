

import React from "react";
import { BrowserRouter as Router, Route
 } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ShowMap from "./pages/ShowMap";
import Search from "./pages/Search";
import SavedPlaces from "./pages/SavedPlaces";
import PlaceDetail from "./pages/PlaceDetail";
import { requireAuth } from './utils/AuthService';
import Callback from './components/Callback';



const App = () =>
  <MuiThemeProvider>
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/showmap" component={ShowMap} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/savedplaces/:id" component={PlaceDetail} />
        <Route exact path="/savedplaces" component={SavedPlaces} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
        <Footer/>
      </div>
    </Router>
  </MuiThemeProvider>;

export default App;
