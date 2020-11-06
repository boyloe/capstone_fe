import { StatusBar } from 'expo-status-bar';
import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './LoginForm';
import ViewCandidates from './ViewCandidates';
import ViewOfficials from './ViewOfficials';
import ViewElections from './ViewElections';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPersonBooth, faBullhorn, faFlagUsa, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  const baseURL = 'http://localhost:3000'


  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesomeIcon icon={ faUserCircle } style={{margin: scale(18)}} size={scale(28)} color='#F1FAEE' onPress={() => navigation.navigate('Profile')} />
      ),
    });
  }, [navigation]);
  
  return(
      <Tab.Navigator tabBarOptions={{
          style: styles.container,
          activeTintColor: '#A8DADC',
          inactiveTintColor: '#F1FAEE',
          activeBackgroundColor: '#1D3557',
          inactiveBackgroundColor: '#1D3557',
          labelStyle: {
            fontSize: scale(15),
            padding: scale(3)
          },
          style: {
            height: scale(85)
          }
      }}>
        <Tab.Screen name="Candidates"
          component={ViewCandidates}
          tabStyle={styles.tabBar}
          options={{
            tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={ faBullhorn } size={scale(22)} color={ focused ? '#A8DADC': '#F1FAEE'}/>)}} />
        <Tab.Screen name="Officials"
          component={ViewOfficials}
          options={{ tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={ faFlagUsa } size={scale(22)} color={ focused ? '#A8DADC': '#F1FAEE'}/>)}} />
        <Tab.Screen name="Elections"
          component={ViewElections}
          options={{ tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={ faPersonBooth } size={scale(22)} color={ focused ? '#A8DADC': '#F1FAEE'}/>)}} />
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

});