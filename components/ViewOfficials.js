import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Button, FlatList, SafeAreaView, ScrollView } from 'react-native';

export default function ViewOfficials() {

  const [zipCode, setZipCode] = useState(0)
  const [officialList, setOfficialList] = useState([])
  const baseURL = 'http://localhost:3000'

  const renderItem = (item) => {
    return <Item key={item.id} title={item.ballotName}/>
  }

  const getOfficials = (event, zipCode) => {
    fetch(`${baseURL}/officials/zip/${zipCode}`)
      .then(response => response.json())
      .then(data => setOfficialList(data.officialList.official))
  }

  return(
    <View style={styles.container}>
      <Text style={styles.heading}>Officials</Text>
      <Text>Enter zip code to see current representatives:</Text>
      <TextInput style={styles.input} onChangeText={setZipCode} value={zipCode}/>
      <Button
        onPress={(event) => getOfficials(event, zipCode)}
        style={styles.button}
        title="Submit"
        color="#1D3557"
        accessibilityLabel="Enter your zip code to view your officials."/>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={officialList}
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