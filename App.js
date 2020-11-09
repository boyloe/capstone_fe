import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer, useNavigation, withNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Profile from './components/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


export default function App({ navigation }) {

  const [user, setUser] = useState({})
  const [alerts, setAlerts] = useState([])
  const [likedCandidates, setLikedCandidates] = useState([])
  const [dislikedCandidates, setDislikedCandidates] = useState([])
  const baseURL = 'http://localhost:3000'

  const signup = (user) => {
    fetch(`${baseURL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    })
      .then(response => response.json())
      .then(data => {
        if(data.errors) {
          setAlerts(data.errors)
        } else {
          AsyncStorage.setItem('token', data.token)
          setUser(data.user)
          setAlerts([])
          console.log(user)
        }
      })
  }

  const logout = () => {
    setUser({})
    AsyncStorage.removeItem('token')
  }

  // const getLikedIds = (data) => {
  //   const newLiked = []
  //   data.likedCandidates.map(cand => {
  //     [...newLiked, cand.cand_id]
  //   })
  //   setLikedCandidates(newLiked)
  // }

  // const getDislikedIds = (data) => {
  //   const newDisliked = []
  //   data.likedCandidates.map(cand => {
  //     [...newDisliked, cand.cand_id]
  //   })
  //   setDislikedCandidates(newLiked)
  // }

  const login = ({ username, password }) => {
    fetch(`${baseURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(data => {
        if(data.errors) {
          setAlerts(data.errors)
        } else {
          AsyncStorage.setItem('token', data.token)
          setUser(data.user)
          setAlerts([])
          setLikedCandidates(data.liked)
          setDislikedCandidates(data.disliked)
        }
      })
  }

  console.log(user, likedCandidates, dislikedCandidates)

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
        </View>,
        }}

      >
      <Stack.Screen 
        name='Home'
        >
          {(props) => <Home
            user={user}
            navigation={navigation}
            alerts={alerts}
            setUser={setUser}
            setLikedCandidates={setLikedCandidates}
            setDislikedCandidates={setDislikedCandidates}
            signup={signup}
            login={login}
            likedCandidates={likedCandidates}
            dislikedCandidates={dislikedCandidates}
            {...props} />}
        </Stack.Screen>
        <Stack.Screen 
        name='Profile'
        >
          {(props) => <Profile
            user={user} 
            alerts={alerts}
            logout={logout}
            signup={signup}
            setUser={setUser}
            setLikedCandidates={setLikedCandidates}
            setDislikedCandidates={setDislikedCandidates}
            likedCandidates={likedCandidates}
            dislikedCandidates={dislikedCandidates}
            {...props} />}
        </Stack.Screen>
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
