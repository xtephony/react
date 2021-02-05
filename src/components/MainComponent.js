import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';
import Header from './HeaderComponent';
import Footer from './FooterComponent';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //CAMPSITES contains campsites.js which is an array of objects into this.state
            //campsites is the property {object = name : value} or property:value
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }

    //render method returns the directory component with a props to it
    // props name is campsites from the state object with the value CAMPSITES, an array passed into the directory component
    render() {
        return (
            <div>
                <Header />
                <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)} />
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
                <Footer />
            </div>
        );
    };
}

export default Main;
