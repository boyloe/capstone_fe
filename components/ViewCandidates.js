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
      <Text style={styles.heading}>Candidates</Text>
      <Text>Enter zip code to see who's running for office:</Text>
      <TextInput style={styles.input} onChangeText={setZipCode} value={zipCode}/>
      <Button
        onPress={(event) => getCandidates(event, zipCode)}
        style={styles.button}
        title="Submit"
        color="#1D3557"
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
    flex: 1,
    backgroundColor: '#F1FAEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderStyle: 'solid',
    borderColor: '#1D3557',
    borderWidth: 1,
    minWidth: 100,
    margin: 10
  },
  list: {
    // backgroundColor: 'light blue',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10
  }
})