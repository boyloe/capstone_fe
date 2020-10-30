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

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  const baseURL = 'http://localhost:3000'

  return(
      <Tab.Navigator>
        <Tab.Screen name="Candidates" component={ViewCandidates} />
        <Tab.Screen name="Officials" component={ViewOfficials} />
        <Tab.Screen name="Elections" component={ViewElections} />
      </Tab.Navigator>
  )
}
