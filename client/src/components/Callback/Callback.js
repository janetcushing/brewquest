import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import loading from './loading.svg';
import { setIdToken, decodeToken, setUser } from '../../utils/AuthService';
import API from "../../utils/API";

class Callback extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      redirect: false,
      user: {}
    };
  }

  componentWillMount() {
    let token = setIdToken();
    let user = decodeToken(token);
    this.setState({ user: user });
    this.setState({ loggedIn: true });
    let userAud = user.aud;
    API.findUser(userAud)
      .then(res => {
        if (res.aud) {
          //user is already in database
        } else {
          let userData = user;
          API.saveUser(userData)
            .then(resp => {
            })
            .catch(err => console.log(err));
        }

      })
    setUser(user);
    this.setState({ redirect: true });
  }

  render() {
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    }

    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/',
        state: {
          user: this.state.user,
          loggedIn: this.state.loggedIn
        }
      }} />;
    }


    return (

      <div style={style}>
        <img src={loading} alt="loading" />
      </div>

    )
  }
}

export default Callback;