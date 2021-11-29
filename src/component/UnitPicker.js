import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
function UnitPicker({pickerOption, selectedValue, onValueChange}) {
  return (
    <View style={styles.picker}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}>
        {/* <Picker.Item label="Meter" value="Meter" />
                <Picker.Item label="Kilometer" value="Kilomter" />
                <Picker.Item label="Centimeter" value="Centimeter" />
                <Picker.Item label="Foot" value="Foot" />
                <Picker.Item label="Inch" value="Inch" /> */}
        {pickerOption ? (
          pickerOption.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
          ))
        ) : (
          <Picker.Item label="no option" value={''} />
        )}
      </Picker>
    </View>
  );
}
const styles = StyleSheet.create({
  picker: {
    backgroundColor: 'tomato',
    width: '50%',
    borderRadius: 10,
    marginTop: 10,
  },
});
export default UnitPicker;
