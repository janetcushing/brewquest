import React, {Component} from "react";
import {Marker, InfoWindow} from "react-google-maps"
import { Card, CardText, CardHeader } from 'material-ui/Card';


class Mapmarker extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            windowPosition: null
        };
    }
  

    closeInfoWindow = (loc) => {
        // clicking 'x' in the info window will pass null, so if we detect that, reset the position in state
        if (loc == null) {
          this.setState({ windowPosition: null })
          return
        }
        // otherwise get coords of clicked marker and set to state
        let markerLoc=this.props.position
        this.setState({ windowPosition: markerLoc })
      }

      toggleInfoWindow = () => {
        let markerLoc=this.props.position;
        if(this.state.windowPosition == null){
            this.setState({ windowPosition: markerLoc });
        }else{ 
            this.setState({ windowPosition: null });}
      }

    render() {

        return (<div>
            <Marker 
                key={this.props.detailkey}
                icon={'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}
                position={this.props.position}
                onClick={this.toggleInfoWindow}
            >
                {
                     (this.state.windowPosition) ?
                        <span>
                            <InfoWindow
                            position={this.state.windowPosition} 
                            onCloseClick={this.closeInfoWindow}>
                                <Card key={this.props.detailkey}>
                                    <CardHeader
                                        actAsExpander={false}
                                        showExpandableButton={false}
                                        title={this.props.brewery_name}
                                        subtitle={'Rating: ' + this.props.rating}
                                        className="raleway-text"
                                         /> 
                                     <CardText expandable={false}
                                        className="raleway-text"> 
                                        {this.props.full_address}
                                        <br></br>
                                        <a href={this.props.website} target="_new_tab">{this.props.website}</a>
                                    </CardText>
                             </Card> 
                            </InfoWindow>
                        </span>
                         :
                         <span></span>
                }
                    }
                    
            </Marker>
        </div >
        )
    }
}

export default Mapmarker;