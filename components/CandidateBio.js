import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Button, Image, SafeAreaView, ScrollView, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAlignJustify, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function CandidateBio({ id, setBioVisible }) {

  const [candidateInfo, setCandidateInfo] = useState({})

  const baseURL = 'http://localhost:3000'

  useEffect(() => {
    fetch(`${baseURL}/candidates/bio/${id}`)
      .then(response => response.json())
      .then((results) => setCandidateInfo(results))
  }, [])

  console.log(candidateInfo)

  const renderBio = (candidateInfo) => {
    console.log('photo', candidateInfo.bio.candidate.photo)
    return(
    <View style={styles.infoContainer}>
      <TouchableOpacity
      style={styles.back}
      onPress={() => setBioVisible(false)}
      accessibilityLabel="Press to go back.">
      <FontAwesomeIcon icon={ faChevronLeft } size={scale(22)} color='#1D3557'/>
      </TouchableOpacity>
      {candidateInfo.bio.candidate.photo ? 
      <Image style={styles.headshot} resizeMode='contain' source={{ uri: candidateInfo.bio.candidate.photo ,}}/> : <Text>"No photo provided"</Text>}
      <Text>{candidateInfo.bio.candidate.firstName} {candidateInfo.bio.candidate.lastName}</Text>
      {candidateInfo.bio.office ? 
        <>
          <Text>Office Information</Text>
          <Text>{candidateInfo.bio.office.name.first} </Text>
          <Text>Party: {candidateInfo.bio.office.parties} </Text> 
          <Text>Status: {candidateInfo.bio.office.status} </Text>
          <Text>Last Elected: {candidateInfo.bio.office.lastElect} </Text>
        </>
       : null }
      {candidateInfo.bio.election ?
          <>
            <Text>Election Information</Text>
            <Text>Office: {candidateInfo.bio.election.office} </Text> 
            <Text>Party: {candidateInfo.bio.election.parties} </Text> 
            <Text>Status: {candidateInfo.bio.election.status} </Text> 
          </>
      : null }
      <Text>Birthdate: {candidateInfo.bio.candidate.birthDate}</Text>
      <Text>Family: {candidateInfo.bio.candidate.family}</Text>
      <Text>Hometown: {candidateInfo.bio.candidate.homeCity}, {candidateInfo.bio.candidate.homeState}</Text>
      <Text>Religion: {candidateInfo.bio.candidate.religion}</Text>

    </View>
    )}

  return(
      <>
      {candidateInfo.bio ? renderBio(candidateInfo) : <Text>Loading...</Text>}
      </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  back: {
    margin: scale(10)
  },
  headshot: {
    // flex: 1,
    alignSelf: 'center',
    width: scale(110),
    height: scale(135),
    margin: scale(8),
    borderColor: '#457B9D',
    borderWidth: scale(4)
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: scale(5)
  }
});