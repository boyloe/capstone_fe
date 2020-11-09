import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronCircleDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Collapsible from 'react-native-collapsible';


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
      `You have liked ${dislikedCandidates.length} politicians.`
    )
  }

  return(
    <View style={styles.container}>
      <View style={styles.logout}>
        <TouchableOpacity style={{flexDirection: 'row'}} navigation={navigation} onPress={clearUser}>
          <Text style={styles.logoutText}>Logout</Text>
          <FontAwesomeIcon icon={ faSignOutAlt } size={scale(20)} style={styles.icon} color='#E63946'/>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{user.username}'s Profile</Text>
      <View style={styles.statContainer}>
        <Text style={styles.activityHeading}>Activity</Text>
        <Text style={styles.stat}>{renderLikedStat()}</Text>
        <Text style={styles.stat}>{renderDislikedStat()}</Text>
      </View>
      <View style={styles.infoContainer}>
        <TouchableOpacity onPress={() => setIsLikedCollapsed(!isLikedCollapsed)}>
        <View style={styles.headerRow} flexDirection='row'>
          <FontAwesomeIcon icon={ faChevronCircleDown } size={scale(20)} style={styles.icon} color='#457B9D'/>
          <Text style={styles.heading}> Liked Politicians</Text>
        </View>
        </TouchableOpacity>
        <Collapsible collapsed={isLikedCollapsed}>
          <Text>Render liked politicians here</Text>
        </Collapsible>
        <TouchableOpacity onPress={() => setIsDislikedCollapsed(!isDislikedCollapsed)}>
        <View style={styles.headerRow} flexDirection='row'>
          <FontAwesomeIcon icon={ faChevronCircleDown } style={styles.icon} size={scale(20)} color='#457B9D'/>
          <Text style={styles.heading}>  Disliked Politicians</Text>
        </View>
        </TouchableOpacity>
        <Collapsible collapsed={isDislikedCollapsed}>
          <Text>Render liked politicians here</Text>
        </Collapsible>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F1FAEE',
    margin: scale(5)
  },
  infoContainer: {
    // borderStyle: 'solid',
    // borderWidth: scale(1)
  },
  back: {
    color: '#1D3557'
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
    color: '#1D3557',
    margin: scale(15),
    fontWeight: 'bold'
  },
  logout: {
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: scale(20),
    marginBottom: scale(100),
    marginTop: scale(-190),
  },
  logoutText: {
    color: '#E63946',
    fontSize: scale(20),
    textAlign: 'right',
    marginRight: scale(5)
  },
  headerRow: {
    fontSize: scale(17),
    fontWeight: 'bold',
    padding: scale(3),
    margin: scale(5),
    flexDirection: 'row',
    color: '#457B9D',
    textAlign: 'left',
    alignContent: 'center'
  },
  icon: {
    marginRight: scale(5)
  },
  stat: {
    fontSize: scale(18),
    // fontWeight: 'bold',
    color: '#1D3557',
    textAlign: 'left',
    margin: scale(3)
  },
  statContainer: {
    borderStyle: 'solid',
    borderWidth: scale(2),
    borderRadius: scale(5),
    borderColor: '#457B9D',
    padding: scale(10),
    margin: scale(15)
  }
})
