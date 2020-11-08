import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Collapsible from 'react-native-collapsible';


export default function Profile({ alerts, navigation, user, signup, setUser, setLikedCandidates, setDislikedCandidates, likedCandidates, dislikedCandidates  }) {

  const [isLikedCollapsed, setIsLikedCollapsed] = useState(true)
  const [isDislikedCollapsed, setIsDislikedCollapsed] = useState(true)

  return(
    <View style={styles.container}>
      <View><TouchableOpacity><Text>Logout</Text></TouchableOpacity></View>
      <Text style={styles.heading}>{user.username}'s Profile</Text>
      <TouchableOpacity onPress={() => setIsLikedCollapsed(!isLikedCollapsed)}>
        <Text>Liked Politicians</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isLikedCollapsed}>
        <Text>Render liked politicians here</Text>
      </Collapsible>
      <TouchableOpacity onPress={() => setIsDislikedCollapsed(!isDislikedCollapsed)}>
        <Text>Disliked Politicians</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isDislikedCollapsed}>
        <Text>Render liked politicians here</Text>
      </Collapsible>
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
  },
  heading: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color: '#457B9D',
    textAlign: 'left'
  }
})
