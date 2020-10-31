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
            fontSize: 18,
            padding: 3
          },
          style: {
            height: 70
          },
          iconStyle: {
            padding: 2,
            paddingBottom: 0,
            // color: '#F1FAEE'
          }
      }}>
        <Tab.Screen name="Candidates"
          component={ViewCandidates}
          tabStyle={styles.tabBar}
          options={{
            tabBarIcon: ({tintColor}) => (
            <FontAwesomeIcon icon={ faBullhorn } size={28} color={tintColor}/>)}} />
        <Tab.Screen name="Officials"
          component={ViewOfficials}
          options={{ tabBarIcon: ({tintColor}) => (
            <FontAwesomeIcon icon={ faFlagUsa } size={28} color={tintColor}/>)}} />
        <Tab.Screen name="Elections"
          component={ViewElections}
          options={{ tabBarIcon: ({tintColor}) => (
            <FontAwesomeIcon icon={ faPersonBooth } size={28} color={tintColor}/>)}} />
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

});