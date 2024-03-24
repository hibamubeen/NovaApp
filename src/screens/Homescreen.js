import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import homepage from '../../assets/homepage.png';

const Homescreen = () => {

  return (
    <ImageBackground source={homepage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome, Hiba!</Text>
        <Text style={styles.events}>EVENTS NEAR YOU</Text>
      </View>
      <TouchableOpacity style={styles.event1}>
        <Image
          source={require('../../assets/wehack.png')}
          style={styles.clickableImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.event2}>
        <Image
          source={require('../../assets/fair.png')}
          style={styles.clickableImage}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: "flex-start",
    right: 70,
    top: 80
  },
  events: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 170,
  },
  clickableImage: {
    width: 210,
    height: 110,
    resizeMode: 'stretch',
  },
  event1: {
    position: 'absolute',
    top: 245,
    left: 8,
    resizeMode: 'stretch',
  },
  event2: {
    position: 'absolute',
    top: 540,
    right:35,
    resizeMode: 'stretch',

  },
});

export default Homescreen;