import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from './screen/Welcome';
import Login from './screen/Login';
import Signup from './screen/Signup';
import React, {Component} from 'react';
import axios from 'axios';
import API from './screen/api';

const AppNavigator = createStackNavigator({
  Welcome: {screen: Welcome, navigationOptions :{
    header:null
  }},

  Login: {screen: Login},
  Signup: {screen: Signup},
  
  Login: {screen: Login, navigationOptions: () => ({
    header: null,  
  })},

  Signup: {screen: Signup, navigationOptions: () => ({
    header: null,
  })},
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />;
      );
  }
}