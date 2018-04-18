
import React from 'react';
import { Link } from "react-router-dom";
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { grey50, grey800 } from 'material-ui/styles/colors';
import { login, logout, isLoggedIn, getUserAud } from '../../utils/AuthService';
import Person from 'material-ui/svg-icons/social/person';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';


const styles = {
    style: {
        background: grey800
    },
    labelStyle: {
        color: grey50,
    },
    mediumIcon: {
        width: 48,
        height: 48,
        color: grey50
      }
};


class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            loggedIn: false,
            user: {}
        };
    }


    componentWillMount() {
                if (isLoggedIn()) {
                    let userAud = getUserAud();
                    let userData = { aud: userAud};
                    this.setState({ user: userData });
                    this.setState({ loggedIn: true });
    
                } else { 
                    this.setState({ loggedIn: false });
                 }

                 var userAgent = window.navigator.userAgent;
                 console.log("userAgent " + userAgent);
            }

            componentDidMount() {
                var userAgent = window.navigator.userAgent;
                console.log("userAgent " + userAgent);
            }
        
    handleLogin = () => {
        try {
            login();
        } catch (err) {
            console.log(`error logging in: ${err}`);
            alert("There was an error logging in");
        
        }
    }


    handleLogout = () => {
        try {
            logout();
        } catch (err) {
            console.log(`error logging out: ${err}`);
            alert("There was an error logging out");
        }
    }

        handleToggle = () => this.setState({ open: !this.state.open });


        handleClose = () => {
            if (isLoggedIn()) {
                this.setState({ open: false, loggedIn: true });
            } else {
                this.setState({ open: false, loggedIn: false });
            }
        }

        render() {
            return (
                <div id="whattheheck">
                    <div id="logoDiv">
                        <a href="/"><img id="logo" src={require(`../../images/logo.png`)} style={styles.logoStyle} alt="logo" /></a>
                    </div>

                    <div id="navBar">

                        <div id="navBtns">
                            {
                                (isLoggedIn()) ?
                                <Person style={styles.iconStyle} style={styles.mediumIcon} iconStyle={styles.iconStyle} onClick={this.handleLogout} label="Logout" />
                                : (<PersonOutline style={styles.iconStyle} style={styles.mediumIcon} iconStyle={styles.iconStyle} onClick={this.handleLogin} label="Login" />)
                            }
                            <NavigationMenu id="nav-menu" style={styles.iconStyle} style={styles.mediumIcon} iconStyle={styles.iconStyle} onClick={this.handleToggle} />
                        </div>

                        <Drawer id="drawer-container"
                            openSecondary={true}
                            docked={false}
                            width={200}
                            open={this.state.open}
                            onRequestChange={(open) => this.setState({ open })}
                        >
                            <Link to={{
                                pathname: "/",
                                state: { user: this.state.user, loggedIn: this.state.loggedIn }
                            }}
                            ><MenuItem onClick={this.handleClose}>Home</MenuItem>
                            </Link>
                            <Link to={{
                                pathname: "/search",
                                state: { user: this.state.user, loggedIn: this.state.loggedIn }
                            }}>
                                <MenuItem onClick={this.handleClose}>Search Places</MenuItem>
                            </Link>
            
                            {
                                (isLoggedIn()) ?
                                    <Link to={{
                                        pathname: "/savedplaces",
                                        state: { user: this.state.user, loggedIn: this.state.loggedIn }
                                    }} >
                                        <MenuItem onClick={this.handleClose}>My Saved Places</MenuItem>

                                    </Link>
                                    :
                                    <Link to="/login"> </Link>

                            }

                            {
                                (isLoggedIn()) ? 
                                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                                    : (<MenuItem onClick={this.handleLogin}>Login</MenuItem>)
                            }
                        </Drawer>
                    </div>
                </div>
            );
        }
    }

    export default Nav;