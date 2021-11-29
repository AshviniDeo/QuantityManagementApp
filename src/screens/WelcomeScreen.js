import {NavigationHelpersContext} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Image,
  Alert,
  Pressable,
} from 'react-native';

import Conversion from './Conversion';
function WelcomeScreen({navigation}) {
  const image = require('../assets/bgimages.jpeg');
  const pressHandle = () => {
    navigation.navigate('Conversion');
  };
  return (
    <View>
      <ImageBackground style={styles.bgImage} source={image}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/icon.jpg')} />
          <Pressable
            style={[
              styles.btn,
              ({pressed}) => ({backgroundColor: pressed ? 'gray' : 'tomato'}),
            ]}
            onPress={pressHandle}>
            <Text style={styles.text}>Lets Go..!!</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  btn: {
    height: 30,
    width: 120,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'tomato',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    bottom: 120,
  },
  logo: {
    marginBottom: 30,
    height: 150,
    width: 150,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default WelcomeScreen;
