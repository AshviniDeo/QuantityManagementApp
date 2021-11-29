import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput} from 'react-native';

import UnitPicker from '../component/UnitPicker';
import Mybutton from '../component/Mybutton';
import TextBox from '../component/TextBox';
export default function Temperature() {
  const image = require('../assets/bgimages.jpeg');
  const [fromText, setFromText] = useState('');
  const [toText, setToText] = useState('');
  const [fromValue, setFromValue] = useState('Celcius');
  const [toValue, setToValue] = useState('Farhenite');
  const pickerOption = ['Celcius', 'Farhenite', 'Kelvin'];
  const convertTemperature = () => {
    let answer;
    if (fromValue === 'Celcius') {
      if (toValue === 'Celcius') {
        answer = fromText;
        setToText(answer);
      } else if (toValue === 'Farhenite') {
        answer = (fromText * 9) / 5 + 32;
        setToText(answer);
      } else if (toValue === 'Kelvin') {
        answer = fromText + 273.15;
        setToText(answer);
      }
    } else if (fromValue === 'Farhenite') {
      if (toValue === 'Celcius') {
        answer = ((fromText - 32) * 5) / 9;
        setToText(answer);
      } else if (toValue === 'Farhenite') {
        answer = fromText;
        setToText(answer);
      } else if (toValue === 'Kelvin') {
        answer = ((fromText - 32) * 5) / 9 + 273.15;
        setToText(answer);
      }
    } else if (fromValue === 'Kelvin') {
      if (toValue === 'Celcius') {
        answer = fromText - 273.15;
        setToText(answer);
      } else if (toValue === 'Farhenite') {
        answer = ((fromText - 273.15) * 9) / 5 + 32;
        setToText(answer);
      } else if (toValue === 'Kelvin') {
        answer = fromText;
        setToText(answer);
      }
    }
  };
  console.log(fromText);
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
            <Mybutton onPress={convertTemperature}>Convert</Mybutton>
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
