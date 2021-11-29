import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Mybutton({children, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'tomato',
    alignItems: 'center',
    width: '30%',
    height: 30,
    alignContent: 'center',
    top: 30,
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});
