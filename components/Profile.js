import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Profile({ alerts, navigation, user, signup, setUser, setLikedCandidates, setDislikedCandidates, likedCandidates, dislikedCandidates  }) {


  return(
    <View style={styles.container}>
      <Text>Hey! What is up?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  back: {
    color: '#1D3557'
  }
})
