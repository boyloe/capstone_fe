import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import LoginForm from './components/LoginForm';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Stack = createStackNavigator();

export default function App() {

  const pressed = () => console.log('pressed!')

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name="SwingVote"
        component={Home}
        options={{
          headerStyle: {height: scale(110), backgroundColor: "#1D3557"},
          headerTitle: () => 
          <View style={{flex: 1, flexDirection: 'row'}}>
              <FontAwesomeIcon onPress={pressed} style={{alignSelf: 'center', left: scale(-80)}} icon={ faUserCircle } size={scale(26)} color='#F1FAEE'/>
              <Image 
                style={{ width: scale(115), height: scale(105), alignSelf: 'center', marginLeft: scale(-15), marginBottom: scale(5)}}
                source = { require('./logo.png') }
                />
          </View>
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
