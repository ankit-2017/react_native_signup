import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import rootReducer from './src/reducers';
import thunk from 'redux-thunk';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './src/components/auth/login';
import SignUp from './src/components/auth/signUp';
import Welcome from './src/components/welcome';
import {Container, Header, Left, Body, Right, Title} from 'native-base';

const store = createStore(rootReducer, applyMiddleware(thunk));

// const Tabs = TabNavigator({
//   Login: {
//     screen: Login
//   },
//   Signup: {
//     screen: SignUp
//   }
// });

const Stack = StackNavigator({
  Home: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  }
});

export default class App extends Component {
  
  render() {
    return (
       <Provider store={store}>
         <Container >
           <Stack />
          </Container>
        </Provider>
    );
  }
}

