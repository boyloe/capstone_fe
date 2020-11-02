import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Button, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function CandidateBio({ candidateId }) {

  const [candidate, setCandidate] = useState('')
  const baseURL = 'http://localhost:3000'

  fetch(`http://localhost:3000/candidates/bio/${can_id}`)

  return(
    <View>

    </View>
  )
}