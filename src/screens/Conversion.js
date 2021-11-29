import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Length from './Length';
import Temperature from './Temperature';
import Weight from './Weight';
function Conversion(navigation) {
  const image = require('../assets/bgimages.jpeg');
  const Tab = createMaterialTopTabNavigator();
  return (
    <View>
      <ImageBackground style={styles.bgImage} source={image}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: 'bold',
              color: 'white',
            },
            tabBarStyle: {backgroundColor: 'tomato'},
          }}>
          <Tab.Screen name="Length" component={Length} />
          <Tab.Screen name="Temperature" component={Temperature} />
          <Tab.Screen name="Weight" component={Weight} />
        </Tab.Navigator>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
});
export default Conversion;
