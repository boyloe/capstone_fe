import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Button, Image, SafeAreaView, ScrollView, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

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
    console.log(candidateInfo)
    return(
    <View>
      <Button title='Back' onPress={() => setBioVisible(false)}></Button>
      {candidateInfo.bio.candidate.photo ? 
      <Image source={{ uri: candidateInfo.bio.candidate.photo , }}/> : <Image></Image>}
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