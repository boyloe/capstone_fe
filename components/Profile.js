import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronCircleDown, faChevronDown, faChevronRight, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Collapsible from 'react-native-collapsible';
import LottieView from 'lottie-react-native';
import ProfileAnimation from './ProfileAnimation';


export default function Profile({ alerts, navigation, user, logout, signup, setUser, setLikedCandidates, setDislikedCandidates, likedCandidates, dislikedCandidates  }) {

  const [isLikedCollapsed, setIsLikedCollapsed] = useState(true)
  const [isDislikedCollapsed, setIsDislikedCollapsed] = useState(true)

  const clearUser = () => {
    navigation.navigate('Home')
    logout()
  }

  const renderDislikedStat = () => {
    return (
      dislikedCandidates.length === 1 ? `You have disliked ${dislikedCandidates.length} politician.` :
      `You have disliked ${dislikedCandidates.length} politicians.`
    )
  }

  const renderLikedStat = () => {
    return (
      likedCandidates.length === 1 ? `You have liked ${likedCandidates.length} politician.` :
      `You have liked ${likedCandidates.length} politicians.`
    )
  }

  return(
    <View style={styles.container}>
      <View style={styles.logout}>
        <TouchableOpacity style={{flexDirection: 'row'}} navigation={navigation} onPress={clearUser}>
          <Text style={styles.logoutText}>Logout </Text>
          <FontAwesomeIcon icon={ faSignOutAlt } size={scale(20)} style={styles.icon} color='#FFFFFF'/>
        </TouchableOpacity>
      </View>
        <LottieView
            source={require('../assets/profile.json')}
            autoPlay
            loop={false}
            style={styles.profilepic}
        />
      <Text style={styles.title}>{user.username}'s Profile</Text>
      <View style={styles.bottom}>
        <View style={styles.statContainer}>
          <Text style={styles.activityHeading}>Activity:</Text>
            <View style={styles.stat}>
              <Text style={styles.number}>{likedCandidates.length}</Text>
              <Text style={styles.likes}>Likes</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.number}>{dislikedCandidates.length}</Text>
            <Text style={styles.likes}>Dislikes</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity onPress={() => setIsLikedCollapsed(!isLikedCollapsed)}>
          <View style={styles.headerRow} flexDirection='row'>
            {isLikedCollapsed 
            ? <FontAwesomeIcon icon={ faChevronRight } size={scale(20)} style={styles.icon} color='#457B9D'/>
            : <FontAwesomeIcon icon={ faChevronDown } size={scale(20)} style={styles.icon} color='#457B9D'/>}
            <Text style={styles.heading}> Liked Politicians</Text>
          </View>
          </TouchableOpacity>
          <Collapsible collapsed={isLikedCollapsed}>
            <Text>Jared Polis</Text>
          </Collapsible>
          <TouchableOpacity onPress={() => setIsDislikedCollapsed(!isDislikedCollapsed)}>
          <View style={styles.headerRow} flexDirection='row'>
          {isDislikedCollapsed 
            ? <FontAwesomeIcon icon={ faChevronRight } size={scale(20)} style={styles.icon} color='#457B9D'/>
            : <FontAwesomeIcon icon={ faChevronDown } size={scale(20)} style={styles.icon} color='#457B9D'/>}
            <Text style={styles.heading}>  Disliked Politicians</Text>
          </View>
          </TouchableOpacity>
          <Collapsible collapsed={isDislikedCollapsed}>
            <Text>Render liked politicians here</Text>
          </Collapsible>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    // alignContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#1D3557',
  },
  bottom: {
    backgroundColor: '#FFFFFF',
    height: scale(400),
    borderRadius: scale(30),
  },
  heading: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color: '#1D3557',
    textAlign: 'left'
  },
  activityHeading: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color: '#1D3557',
    textAlign: 'left'
  },
  title: {
    fontSize: scale(28),
    color: '#FFFFFF',
    margin: scale(15),
    fontWeight: 'bold'
  },
  logout: {
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: scale(8)
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: scale(18),
    textAlign: 'right',
    marginRight: scale(8)
  },
  headerRow: {
    fontSize: scale(17),
    fontWeight: 'bold',
    padding: scale(3),
    margin: scale(5),
    marginLeft: scale(10),
    flexDirection: 'row',
    color: '#457B9D',
    textAlign: 'left',
    alignContent: 'center',
  },
  icon: {
    marginRight: scale(5)
  },
  statContainer: {
    padding: scale(10),
    margin: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // borderStyle: 'solid',
    // borderWidth: scale(2),
    // borderRadius: scale(8),
    // borderColor: '#457B9D',

  }, 

  profilepic: {
    width: scale(70),
    alignSelf: 'center',
  },
  stat: {
    width: scale(90),
    height: scale(90),
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A8DADC',
    margin: scale(5),
    borderRadius: scale(50),
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: '#1D3557',
    shadowOpacity: scale(.4),
  },
  number: {
    color: '#1D3557',
    fontSize: scale(40),
    fontWeight: 'bold',
  },
  likes: {
    color: '#1D3557',
    fontSize: scale(15),
    // fontWeight: 'bold'
  }
})
