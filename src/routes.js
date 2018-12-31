import React from 'react';
import { StackNavigator } from 'react-navigation';
import SignUp from './components/auth/signUp';

const Stack = StackNavigator({
  Home: {
    screen: Tabs
  },
  Signup: {
    screen: SignUp
  }
});