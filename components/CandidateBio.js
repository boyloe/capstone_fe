import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Button, Image, SafeAreaView, ScrollView, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function CandidateBio({ id }) {

  const [candidateId, setCandidateId] = useState('')
  const [candidateInfo, setCandidateInfo] = useState({})

  const baseURL = 'http://localhost:3000'

  useEffect(() => {
    setCandidateId(id)
    fetch(`${baseURL}/candidates/bio/${candidateId}`)
      .then(response => response.json())
      .then((results) => setCandidateInfo(results))
  })

  const renderBio = (candidateInfo) => {
    console.log(candidateInfo)
    return(
    <View>
      {candidateInfo.candidate.photo ? 
      <Image source={{ uri: candidateInfo.candidate.photo , }}/> : <Image></Image>}
      <Text>{candidateInfo.candidate.firstName} {candidateInfo.candidate.lastName}</Text>
      {candidateInfo.office ? 
        <>
          <Text>Office Information</Text>
          <Text>{candidateInfo.office.name.first} </Text>
          <Text>Party: {candidateInfo.office.parties} </Text> 
          <Text>Status: {candidateInfo.office.status} </Text>
          <Text>Last Elected: {candidateInfo.office.lastElect} </Text>
        </>
       : null }
      {candidateInfo.election ?
          <>
            <Text>Election Information</Text>
            <Text>Office: {candidateInfo.election.office} </Text> 
            <Text>Party: {candidateInfo.election.parties} </Text> 
            <Text>Status: {candidateInfo.election.status} </Text> 
          </>
      : null }
      <Text>Birthdate: {candidateInfo.candidate.birthDate}</Text>
      <Text>Family: {candidateInfo.candidate.family}</Text>
      <Text>Hometown: {candidateInfo.candidate.homeCity}, {candidateInfo.candidate.homeState}</Text>
      <Text>Religion: {candidateInfo.candidate.religion}</Text>
    </View>
    )}

  return(
      <>
      {candidateInfo ? <>{renderBio()}</> : <Text>Loading</Text>}
      </>
  )
}