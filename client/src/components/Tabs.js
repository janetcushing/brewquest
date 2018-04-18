import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Login" value="a">
          <div>
            <p>
              If you already have a username and password, login here.
            </p>
            <p>Username</p>
            <TextField/>
            <p>Password</p>
            <TextField/>
          </div>
        </Tab>
        <Tab label="Sign Up" value="b">
          <div>
            <p>
             If you are new to Brew Quest, sign up here.
            </p>
            <p>Username (Email)</p>
            <TextField/>
            <p>First Name</p>
            <TextField/>
            <p>Last Name</p>
            <TextField/>
            <p>Date of Birth</p>
            <DatePicker mode="landscape"/>
            <p>Password</p>
            <TextField/>
          </div>
        </Tab>
      </Tabs>
    );
  }
}