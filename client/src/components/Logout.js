import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { grey50 } from 'material-ui/styles/colors';
import { logout, isLoggedIn,  clearIdToken, clearAccessToken } from '../utils/AuthService';

const styles = {
  labelStyle: {
    color: grey50,
  }
};


class Logout extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.state = {
      open: false,
    };
  }

  handleLogout = () => {
    logout();
    handleRequestClose();
  }

  handleRequestClose() {
    if (isLoggedIn()) {
      this.setState({
        open: false,
        loggedIn: true
      });
    } else
    clearIdToken();
    clearAccessToken();
      this.setState({
        open: false,
        loggedIn: false
      });
  }

  handleTouchTap() {
    logout();
    if (isLoggedIn()) {
      this.setState({
        open: true,
        loggedIn: true
      });
    } else {
      this.setState({
        open: true,
        loggedIn: false
      });
    }
  }

  render() {
const
    return (
      <div>
        <FlatButton
          label="Logout"
          onTouchTap={this.handleTouchTap}
          labelStyle={styles.labelStyle}
          onClick={this.handleLogout}
        />
      </div>
    );
  }
}

export default Logout;