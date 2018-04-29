import React, { Component } from "react";
import { Marker } from "react-google-maps"
import { InfoWindow } from 'react-google-maps';

class Mapmarker extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            infoWindowOpen: true
        };


    }

    onToggleOpen = (infoWindowOpen) => {
        if (!this.infoWindowOpen)
            this.setState({ infoWindowOpen: true });
    }

    onToggleClose = (infoWindowOpen) => {
        this.setState({ infoWindowOpen: false });
    }

    render() {

        return (
            <div>
                <Marker
                    key={this.props.detailkey}
                    icon={'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}
                    position={this.props.position}
                // onClick={this.onToggleOpen(this.infoWindowOpen)}
                >

                    {this.infoWindowOpen && <InfoWindow
                        onCloseClick={this.onToggleClose} >
                        <h5>Info Window</h5>>
                        </InfoWindow>
                    }
                </Marker>
            </div >
        )
    }
}

export default Mapmarker;