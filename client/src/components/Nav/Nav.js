
import React from 'react';
import { Link } from "react-router-dom";
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { grey50, grey800 } from 'material-ui/styles/colors';
import { login, logout, isLoggedIn, getUserAud } from '../../utils/AuthService';
import Person from 'material-ui/svg-icons/social/person';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';
import Place from 'material-ui/svg-icons/maps/place'


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
            searchLocation: "",
            open: false,
            loggedIn: false,
            user: {},
            results: []
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


                //  if (this.props.location.state) {
                //     this.setState({
                //         searchLocation: "03801",
                //         results: [
                //             { brewery_name: 'Throwback Brewery', latitude: 42.9810948, longitude: -70.8345561 },
                //             { brewery_name: 'Loaded Question Brewing Company - coming soon', latitude: 43.0679485, longitude: -70.7750565 },
                //             { brewery_name: 'Stoneface Brewing Co.', latitude: 43.1149002, longitude: -70.8185158 }
                //           ]
                //       });
                //     }
                console.log("results" + this.state.results);
            }
        
    handleLogin = () => {
        try {
            login();
        } catch (err) {
            console.log(`error logging in: ${err}`);
            alert("There was an error logging in");
        
        }
    }

    // showMap = () => {
    //         alert("Show the map here");
    //     }
    

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
                <div>
                    <div id="logoDiv">
                        <a href="/"><img id="logo" src={require(`../../images/logo.png`)} style={styles.logoStyle} alt="logo" /></a>
                    </div>

                    <div id="navBar">

                        <div id="navBtns">
                       
                        <Link to={{
                            pathname: "/showmap",
                            state: { user: this.state.user, loggedIn: this.state.loggedIn, results:this.state.results }
                        }}> <Place style={styles.iconStyle} style={styles.mediumIcon} iconStyle={styles.iconStyle}> </Place></Link>
                       
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
                            <Link to={{
                                pathname: "/showmap",
                                state: { user: this.state.user, loggedIn: this.state.loggedIn, results:this.state.results }
                            }}
                            ><MenuItem onClick={this.handleClose}>Show Map</MenuItem>
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