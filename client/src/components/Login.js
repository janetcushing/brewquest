import React from 'react';
// import Tabs from "../components/Tabs";
import FlatButton from 'material-ui/FlatButton';
// import Dialog from 'material-ui/Dialog';
import {grey50} from 'material-ui/styles/colors';
import { login, isLoggedIn, getIdToken, decodeToken } from '../utils/AuthService';


const styles = {
    labelStyle: {
      color: grey50,
    }
  };

  
  class Login extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleRequestClose = this.handleRequestClose.bind(this);
      this.handleTouchTap = this.handleTouchTap.bind(this);
      this.state = {
        open: false,
      };
    }
  
    handleLogin = () => {
      console.log(`im in handleLogin`);
      login();
  }

    handleRequestClose() {
      this.setState({
        open: false,
      });    
    }
  
    handleTouchTap() {
      login();
      this.setState({
        open: true,
      });
    }
  
    render() {
     
  
      return (
        <div>
            <FlatButton
              label="Login" 
              onTouchTap={this.handleTouchTap}
              labelStyle={styles.labelStyle}
              onClick={this.handleLogin}
            />
          </div>
      );
    }
  }
  
  export default Login;