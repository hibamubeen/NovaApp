import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/landing-background.png')} style={styles.container}>
    <Image source={require('../../assets/hanging-lanterns-1.png')} style={styles.lantern} />
      
      <Text style={styles.title}>NOVA</Text>
      
      <Image source={require('../../assets/landing-vines-2.png')} style={styles.leafTop} />
      
      <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText} >LOG IN / SIGN UP</Text>
      </TouchableOpacity>
      
      <Image source={require('../../assets/landing-vines-1.png')} style={styles.leafBottom} />
      </ImageBackground>
  );
};
export default LandingPage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

     // Replace with the exact color code from your design
  },
  lantern: {
    // Add your styles for the lantern image
    position: 'absolute',
    alignSelf: 'flex-start',
    top: 10, // Adjust the position as needed
    left: 10
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 150, // Adjust the spacing as needed
    paddingTop: 170
  },
  leafTop: {
    // Add your styles for the leaf image
    position: 'absolute',
    top: 370, // Adjust the position as needed
    alignSelf: 'flex-end',
    margin: 10
  },
  button: {
    backgroundColor: '#490074', // Replace with the exact color code from your design
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 100,
    marginTop: 50
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  leafBottom: {
    // Add your styles for the leaf image
    position: 'absolute',
    bottom: 12, // Adjust the position as needed
    alignSelf: "flex-start"
  },
});
