import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text, Button } from 'react-native'

export default function LoginForm() {

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const logIn = () => {
    console.log('login pressed')
  }

  return(
    <View style={styles.container}>
      <Text>Username:</Text>
      <TextInput style={styles.input} onChangeText={setUserName} value={username}/>
      <Text>Password:</Text>
      <TextInput style={styles.input} onChangeText={setPassword} value={password} secureTextEntry={true}/>
      <Button
        onPress={logIn}
        title="Log In"
        color="#841584"
        accessibilityLabel="Log in to the app"/>
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
    border: 'solid 1px #000'
  }
})