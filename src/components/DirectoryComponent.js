import React, { Component } from 'react';
//importing built in components in reactstrap
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


// class components are objects declared as a class by { Directory />}
class Directory extends Component {
  
// the render method
    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                // this is the JSX 
                <div key={campsite.id} className = "col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(campsite.id)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>                        
                        </CardImgOverlay>                     
                    </Card>                   
                </div>
            );
        });
// this is what's shown on the screen and is considered the main return
        return (
            <div className = "container">
                <div className = "row">
                    {directory}
                </div>

            </div>
        );
    }
}

export default Directory;