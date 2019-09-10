import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView,Button,StatusBar,TextInput,TouchableOpacity} from 'react-native';

import Login from './Login'
import Signup from './Signup'
import { robotoWeights } from 'react-native-typography';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

class Welcome extends Component {
  static navigationOptions = {
    header : null
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      
        <View style={styles.container}>
        
          <Text style={[robotoWeights.thin, {color:'#fff', flex:1, fontSize:50, textAlign:"center",top:100}]}> Selamat Datang </Text>
          <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Login')}>
          <Text style={[robotoWeights.thin, styles.buttonText]}>Login </Text>
        </TouchableOpacity>
 
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Signup')}>
          <Text style={[ robotoWeights.thin, styles.buttonText]}>Signup </Text>
        </TouchableOpacity>
        </View>
       </View>
     
    );
  }
} 

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome, navigationOptions:{
      header:null
    }
  },
  Login: {
    screen: Login, navigationOptions:{
      header:null
    }
  },
  Signup: {
    screen: Signup, navigationOptions:{
      header:null
    }
  },
});

export default createAppContainer(AppNavigator);



const styles = StyleSheet.create({
container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#455a64',
},

inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
},

button: {
    width:300,
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
},

buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
}

});