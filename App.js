//Remove unused imports
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
import LottieView from 'lottie-react-native';
import { LogBox } from 'react-native';

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();

export default function App({ navigation }) {

  const [user, setUser] = useState({})
  const [alerts, setAlerts] = useState([])
  const [likedCandidates, setLikedCandidates] = useState([])
  const [dislikedCandidates, setDislikedCandidates] = useState([])
  //deploy backend
  const baseURL = 'http://localhost:3000'
  //consisten spacing for parenthesis and brackets
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
        }
      })
  }

  const logout = () => {
    setUser({})
    AsyncStorage.removeItem('token')
  }


  const addLike = (id) => {
    let user_id = user.id
    let cand_id = id
    fetch(`${baseURL}/liked_candidates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_id, cand_id })
    })
      .then(response => response.json())
      .then(data => {
        setLikedCandidates([...likedCandidates, data])
    })
  }

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
  //Delete console.logs
  console.log(user, 'liked candidates', likedCandidates, 'disliked candidaes', dislikedCandidates)

  return (
    //Don't need this React fragment,
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
            addLike={addLike}
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
            addLike={addLike}
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

//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
