import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text, Button } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function CreateAccount({ signup, alerts }) {
  const baseURL = 'http://localhost:3000'
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(false)

  const handleChange = ({target}) => {
    return target.name === "username" ?
      setUserName(target.value) :
      setPassword(target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    let user = {
      username,
      password
    }
    signup(user)
  }

  const handleLoginForm = (event) => {
    event.preventDefault()
    setLogin(!login)
  }

  const showAlerts = () => alerts.map(alert => <Text>{alert}</Text>)

  return(
    <View style={styles.container}>
      { login ? <Text>Create an Account</Text> : <Text>Log In</Text>}
      <Text>Username:</Text>
      <TextInput style={styles.input} onChangeText={handleChange} value={username}/>
      <Text>Password:</Text>
      <TextInput style={styles.input} onChangeText={handleChange} value={password} secureTextEntry={true}/>
      <Button
        onPress={handleSubmit}
        title="Submit"
        color="#841584"
        accessibilityLabel="Submit to create your account."/>
        {alerts ? showAlerts() : null}
        { login ? 
        <><Text>Already registered?</Text>
        <Button onPress={handleLoginForm} title="Log In"/></>
        : <><Text>Not Registered?</Text>
        <Button onPress={handleLoginForm} title="Create an Account"/></>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: .5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderStyle: 'solid',
    borderWidth:  scale(1),
  }
})