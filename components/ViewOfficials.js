import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Button, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function ViewOfficials() {

  const [zipCode, setZipCode] = useState()
  const [officialList, setOfficialList] = useState([])
  const baseURL = 'http://localhost:3000'

  const Item = ({ item, onPress, style }) => (

    <TouchableOpacity style={styles.item}>
      <Text style={styles.ballotName}>{item.firstName} {item.lastName}</Text>
      <Text style={styles.info}>{item.title}</Text>
      <Text style={styles.info}>{item.officeParties} Party</Text>
    </TouchableOpacity>
  )

  const renderItem = ({item}) => {
    return(
      <Item item={item}/>
    )
  }

  const getOfficials = (event, zipCode) => {
    fetch(`${baseURL}/officials/zip/${zipCode}`)
      .then(response => response.json())
      .then(data => setOfficialList(data.candidateList.candidate))
  }

  return(
    <View style={styles.container}>
      <Text style={styles.heading}>Officials</Text>
      <Text style={styles.directions}>Enter zip code to view representatives:</Text>
      <View style={styles.zipContainer}>
        <TextInput style={styles.input} onChangeText={setZipCode} value={zipCode} placeholder={'Zip Code'}/>
        <TouchableOpacity
          onPress={(event) => getOfficials(event, zipCode)}
          style={styles.button}
          accessibilityLabel="Enter your zip code to view your officials.">
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          title
          style={styles.list}
          extraData={officialList}
          data={officialList}
          keyExtractor={item => item.id}
          renderItem={renderItem}/>
      </SafeAreaView>
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
    borderColor: '#1D3557',
    borderWidth: scale(1),
    minWidth: scale(100),
    margin: scale(10),
    borderRadius: scale(5),
    minHeight: scale(20),
    fontSize: scale(15),
    textAlign: 'center',
    padding: scale(5),
    color: '#1D3557'
    },
  item: {
    borderStyle: 'solid',
    borderWidth: scale(1),
    borderRadius: scale(5),
    borderColor: '#457B9D',
    padding: scale(10),
    margin: scale(5),
    alignItems: 'center'
  },
  heading: {
    fontSize: scale(25),
    fontWeight: 'bold',
    margin: scale(10),
    color: '#1D3557'
  },
  button: {
    padding: scale(5),
    backgroundColor:'#1D3557',
    borderRadius: scale(5)
  },
  buttonText: {
    color: '#F1FAEE',
    fontSize: scale(15),
    padding: scale(1)
  },
  zipContainer: {
    flexDirection: 'row',
    padding: scale(10),
    margin: scale(5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer: {
    width: scale(250),
    padding: scale(10)
  },
  ballotName: {
    fontSize: scale(15),
    fontWeight: 'bold',
    padding: scale(3),
    color: '#1D3557',
    textAlign: 'center'
  },
  info: {
    fontSize: scale(12),
    color: '#1D3557'
  },
  directions: {
    fontSize: scale(15)
  }
})