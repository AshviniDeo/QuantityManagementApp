import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput} from 'react-native';

import Mybutton from '../component/Mybutton';
import UnitPicker from '../component/UnitPicker';
import TextBox from '../component/TextBox';
function Weight() {
  const image = require('../assets/bgimages.jpeg');
  const [fromText, setFromText] = useState('');
  const [toText, setToText] = useState('');
  const [fromValue, setFromValue] = useState('Gram');
  const [toValue, setToValue] = useState('Kilogram');
  const pickerOption = ['Kilogram', 'Gram', 'Pound'];
  const convertWeight = () => {
    let answer;
    if (fromValue === 'Gram') {
      if (toValue === 'Gram') {
        answer = fromText;
        setToText(answer);
      } else if (toValue === 'Kilogram') {
        answer = fromText / 1000;
        setToText(answer);
      } else if (toValue === 'Pound') {
        answer = fromText * 0.002205;
        setToText(answer);
      }
    } else if (fromValue === 'Kilogram') {
      if (toValue === 'Gram') {
        answer = fromText * 1000;
        setToText(answer);
      } else if (toValue === 'Kilogram') {
        answer = fromText;
        setToText(answer);
      } else if (toValue === 'Pound') {
        answer = fromText * 2.2046;
        setToText(answer);
      }
    } else if (fromValue === 'Pound') {
      if (toValue === 'Gram') {
        answer = fromText / 0.002205;
        setToText(answer);
      } else if (toValue === 'Kilogram') {
        answer = fromText / 2.2046;
        setToText(answer);
      } else if (toValue === 'Pound') {
        answer = fromText;
        setToText(answer);
      }
    }
  };
  return (
    <View>
      <ImageBackground style={styles.bgImage} source={image}>
        <View style={styles.container}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'auto'}}>
              From
            </Text>
          </View>
          <View>
            <TextBox onChangeText={setFromText} val={fromText} />
            <UnitPicker
              pickerOption={pickerOption}
              selectedValue={fromValue}
              onValueChange={setFromValue}
            />
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'auto'}}>
              To
            </Text>
          </View>
          <View>
            <View style={styles.box}>
              <Text>{toText}</Text>
            </View>
            <UnitPicker
              pickerOption={pickerOption}
              selectedValue={toValue}
              onValueChange={setToValue}
            />
          </View>
          <View>
            <Mybutton onPress={convertWeight}>Convert</Mybutton>
          </View>
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
  container: {
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'column',
    marginLeft: 50,
    top: 20,
  },

  box: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    textAlign: 'center',
    height: 50,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  inputbox: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    textAlign: 'center',
  },
});
export default Weight;
