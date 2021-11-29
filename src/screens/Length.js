import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput} from 'react-native';

import UnitPicker from '../component/UnitPicker';
import Mybutton from '../component/Mybutton';

function Length() {
  const image = require('../assets/bgimages.jpeg');
  const [fromText, setFromText] = useState('');
  const [toText, setToText] = useState();
  const [fromValue, setFromValue] = useState('Meter');
  const [toValue, setToValue] = useState('Inch');
  const lengthConvert = () => {
    let answer;
    if (fromValue === 'Meter') {
      if (toValue === 'Meter') {
        answer = fromText;
        setToText(answer);
      } else if (toValue === 'Kilometer') {
        answer = fromText / 1000;
        setToText(answer);
      } else if (toValue === 'Centimeter') {
        answer = fromText * 100;
        setToText(answer);
      } else if (toValue === 'Foot') {
        answer = fromText * 3.281;
        setToText(answer);
      } else if (toValue === 'Inch') {
        answer = fromText * 39.37;
        setToText(answer);
      }
    } else if (fromValue === 'Kilometer') {
      if (toValue === 'Meter') {
        answer = fromText * 1000;
        setToText(answer);
      } else if (toValue === 'Kilometer') {
        answer = fromText;
        setToText(answer);
      } else if (toValue === 'Centimeter') {
        answer = fromText * 100000;
        setToText(answer);
      } else if (toValue === 'Foot') {
        answer = fromText * 3281;
        setToText(answer);
      } else if (toValue === 'Inch') {
        answer = fromText * 39370;
        setToText(answer);
      }
    } else if (fromValue === 'Centimeter') {
      if (toValue === 'Meter') {
        answer = fromText / 100;
        setToText(answer);
      } else if (toValue === 'Kilometer') {
        answer = fromText / 100000;
        setToText(answer);
      } else if (toValue === 'Centimeter') {
        answer = fromText;
        setToText(answer);
      } else if (toValue === 'Foot') {
        answer = fromText / 30.48;
        setToText(answer);
      } else if (toValue === 'Inch') {
        answer = fromText / 2.54;
        setToText(answer);
      }
    } else if (fromValue === 'Inch') {
      if (toValue === 'Meter') {
        answer = fromText / 39.37;
        setToText(answer);
      } else if (toValue === 'Kilometer') {
        answer = fromText / 39370.0;
        setToText(answer);
      } else if (toValue === 'Centimeter') {
        answer = fromText * 2.54;
        setToText(answer);
      } else if (toValue === 'Foot') {
        answer = fromText / 12;
        setToText(answer);
      } else if (toValue === 'Inch') {
        answer = fromText;
        setToText(answer);
      }
    } else if (fromValue === 'Foot') {
      if (toValue === 'Meter') {
        answer = fromText / 3.281;
        setToText(answer);
      } else if (toValue === 'Kilometer') {
        answer = fromText / 32.81;
        setToText(answer);
      } else if (toValue === 'Centimeter') {
        answer = fromText * 30.48;
        setToText(answer);
      } else if (toValue === 'Foot') {
        answer = fromText;
        setToText(answer);
      } else if (toValue === 'Inch') {
        answer = fromText * 39.37;
        setToText(answer);
      }
    }
  };
  const pickerOption = ['Kilometer', 'Meter', 'Foot', 'Centimeter', 'Inch'];

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
            <TextInput
              onChangeText={text => setFromText(text)}
              maxLength={10}
              keyboardType="numeric"
              placeholder="Enter Value"
              style={styles.inputbox}
            />
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
            <Mybutton onPress={lengthConvert}>Convert</Mybutton>
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
export default Length;
