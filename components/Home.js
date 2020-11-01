import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './LoginForm';
import ViewCandidates from './ViewCandidates';
import ViewOfficials from './ViewOfficials';
import ViewElections from './ViewElections';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPersonBooth, faBullhorn, faFlagUsa } from '@fortawesome/free-solid-svg-icons'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  const baseURL = 'http://localhost:3000'

  return(
      <Tab.Navigator tabBarOptions={{
          style: styles.container,
          activeTintColor: '#A8DADC',
          inactiveTintColor: '#F1FAEE',
          activeBackgroundColor: '#1D3557',
          inactiveBackgroundColor: '#1D3557',
          labelStyle: {
            fontSize: scale(18),
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
            tabBarIcon: ({tintColor}) => (
            <FontAwesomeIcon icon={ faBullhorn } size={scale(22)} color={tintColor}/>)}} />
        <Tab.Screen name="Officials"
          component={ViewOfficials}
          options={{ tabBarIcon: ({tintColor}) => (
            <FontAwesomeIcon icon={ faFlagUsa } size={scale(22)} color={tintColor}/>)}} />
        <Tab.Screen name="Elections"
          component={ViewElections}
          options={{ tabBarIcon: ({tintColor}) => (
            <FontAwesomeIcon icon={ faPersonBooth } size={scale(22)} color={tintColor}/>)}} />
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

});