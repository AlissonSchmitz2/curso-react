import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Routes from './Routes';

class App extends Component {
    constructor(props) {
        super(props);

        console.disableYellowBox = true;
    }

    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: 'AIzaSyDXOefOsovCYTg8Rq1JXWnZPwDSYEGAvlo',
            authDomain: 'whatsapp-clone-d5bb8.firebaseapp.com',
            databaseURL: 'https://whatsapp-clone-d5bb8.firebaseio.com',
            projectId: 'whatsapp-clone-d5bb8',
            storageBucket: 'whatsapp-clone-d5bb8.appspot.com',
            messagingSenderId: '454175394696',
            appId: '1:454175394696:web:5f0c85a783f94cb909c83d'
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
