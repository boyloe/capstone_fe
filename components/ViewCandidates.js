import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Button, FlatList, SafeAreaView, ScrollView } from 'react-native';

export default function ViewCandidates() {

  const [zipCode, setZipCode] = useState(0)
  const [candidateList, setCandidateList] = useState([])
  const baseURL = 'http://localhost:3000'

  const renderItem = (item) => {
    return <Item key={item.id} title={item.ballotName}/>
  }

  const getCandidates = (event, zipCode) => {
    fetch(`${baseURL}/candidates/zip/${zipCode}`)
      .then(response => response.json())
      .then(data => setCandidateList(data.candidateList.candidate))
  }

  return(
    <View style={styles.container}>
      <Text>Zip Code:</Text>
      <TextInput style={styles.input} onChangeText={setZipCode} value={zipCode}/>
      <Button
        onPress={(event) => getCandidates(event, zipCode)}
        title="Submit"
        color="#841584"
        accessibilityLabel="Enter your zip code to view your candidates."/>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={candidateList}
          renderItem={({item}) => (
            <View>
              <Text>{item.ballotName}</Text>
            <Text>{item.electionParties} Party</Text>
            <Text>{item.electionOffice}</Text>
          </View>)}/>
      </SafeAreaView>
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
  },
  list: {
    backgroundColor: 'light blue',
  }
})