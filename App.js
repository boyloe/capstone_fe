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

const Stack = createStackNavigator();

export default function App() {

  // const [count, setCount] = useState(0)

  // const handlePress = () => {
  //   setCount(count + 1)
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name="SwingVote"
        component={Home}
        options={{
          headerStyle: {height: scale(110), backgroundColor: "#A8DADC"},
          headerTitle: () => <Image 
            style={{ width: scale(115), height: scale(105), alignSelf: 'center', marginBottom: scale(5)}}
            source = { require('./logo.png') }
            />
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
