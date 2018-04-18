import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { isLoggedIn } from '../utils/AuthService';

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    if (isLoggedIn()){
      this.setState({
        open: false,
        loggedIn: true
      });
    } else 
    this.setState({
      open: false,
      loggedIn: false
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const { isLoggedIn } = this.props.isLoggedIn;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
              </Button>
            {
              !isLoggedIn() && (
                <Button
                  id="qsLoginBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.login.bind(this)}
                >
                  Log In
                    </Button>
              )
            }
            {
              isLoggedIn() && (
                <Button
                  id="qsLogoutBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                    </Button>
              )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}


export default Login;

