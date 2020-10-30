import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoginForm from './LoginForm';
import ViewCandidates from './ViewCandidates';

export default function Home() {
  const baseURL = 'http://localhost:3000'

  return(
    <View>
      <Text>Hi!</Text>
      <ViewCandidates/>
    </View>
  )
}
