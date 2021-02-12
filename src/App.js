import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

const store = ConfigureStore();

class App extends Component {
      //render method returns the directory component with a props to it
    // props name is campsites from the state object with the value CAMPSITES, an array passed into the directory component
    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        </Provider>
        );
    };
}

export default App;
