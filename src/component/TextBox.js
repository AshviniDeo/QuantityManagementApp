import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

function TextBox({onChangeText, val}) {
  return (
    <View>
      <TextInput
        maxLength={10}
        keyboardType="numeric"
        placeholder="Enter Value"
        style={styles.box}
        onChangeText={text => onChangeText(text)}
        value={val}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    textAlign: 'center',
  },
});

export default TextBox;
