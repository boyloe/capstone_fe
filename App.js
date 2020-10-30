import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

export default function App() {

  const [count, setCount] = useState(0)

  const handlePress = () => {
    setCount(count + 1)
  }

  return (
    <View style={styles.container}>
      <Home/>
      {/* <LoginForm/> */}
    </View>
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
