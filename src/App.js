import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';


class App extends Component {
      //render method returns the directory component with a props to it
    // props name is campsites from the state object with the value CAMPSITES, an array passed into the directory component
    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    };
}

export default App;
