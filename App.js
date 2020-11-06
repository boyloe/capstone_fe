import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native';
import LoginForm from './components/LoginForm';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Profile from './components/Profile';

const Stack = createStackNavigator();


export default function App({ navigation }) {

  return (
    <>

    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {height: scale(110), backgroundColor: "#1D3557"},
        headerTitle: () => 
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Image 
              style={{ width: scale(115), height: scale(105), alignSelf: 'center', marginBottom: scale(5)}}
              source = { require('./logo.png') }
              />
        </View>
        }}
      >
      <Stack.Screen 
        name='Home'
        component={Home}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
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
