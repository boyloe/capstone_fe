import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function CreateAccount({ signup, alerts, login }) {
  const baseURL = 'http://localhost:3000'
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loginScreen, setLoginScreen] = useState(false)


  const handleSubmit = (event) => {
    let user = {
      username,
      password
    }
    !loginScreen ?
    login(user) 
    : signup(user)
  }

  const handleLoginForm = () => {
    setLoginScreen(!loginScreen)
  }


  const showAlerts = () => alerts.map(alert => <Text style={styles.alert}>{alert}</Text>)

  return(
    <View style={styles.container}>
      { loginScreen ? <Text style={styles.heading}>Create an Account</Text> : <Text style={styles.heading}>Log In</Text>}
        <View style={{flexDirection: 'row', alignItems: 'center', margin: scale(8)}}>
          <Text style={styles.labels}>Username:</Text>
          <TextInput style={styles.input} onChangeText={setUserName} value={username}/>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: scale(8)}}>
          <Text style={styles.labels}>Password:</Text>
          <TextInput style={styles.input} onChangeText={setPassword} value={password} secureTextEntry={true}/>
        </View>
        {alerts ? showAlerts() : null}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          color="#841584">
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        { loginScreen ? 
        <><Text style={styles.labels}>Already registered?</Text>
        <TouchableOpacity style={styles.switchButton} onPress={handleLoginForm}>
          <Text style={styles.switchButtonText}>Log In</Text>
        </TouchableOpacity></>
        : <><Text style={styles.labels}>Not Registered?</Text>
        <TouchableOpacity style={styles.switchButton} onPress={handleLoginForm}>
          <Text style={styles.switchButtonText}>Create an Account</Text>
          </TouchableOpacity></>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FAEE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderStyle: 'solid',
    borderWidth:  scale(1),
  },
  heading: {
    fontSize: scale(30),
    fontWeight: 'bold',
    margin: scale(15),
    color: '#1D3557',
    textAlign: 'center'
  },
  input: {
    borderStyle: 'solid',
    borderColor: '#1D3557',
    borderWidth: scale(1),
    minWidth: scale(100),
    marginLeft: scale(5),
    borderRadius: scale(5),
    minHeight: scale(20),
    fontSize: scale(15),
    textAlign: 'center',
    padding: scale(4),
    color: '#1D3557'
    },
    button: {
      padding: scale(5),
      backgroundColor:'#1D3557',
      borderRadius: scale(5),
      margin: scale(15),
    },
    switchButton: {
      padding: scale(8),
      backgroundColor:'#F1FAEE',
      borderRadius: scale(5),
      margin: scale(10)
    },
    buttonText: {
      color: '#F1FAEE',
      fontSize: scale(20),
      padding: scale(1)
    },
    switchButtonText: {
      color: '#457B9D',
      fontSize: scale(15),
      fontWeight: 'bold',
      fontStyle: 'italic'
    },
    labels: {
      fontSize: scale(20),
      color: '#1D3557'
    },
      alert: {
        color: '#E63946',
        fontSize: scale(15),
        margin: scale(10)
      }
})