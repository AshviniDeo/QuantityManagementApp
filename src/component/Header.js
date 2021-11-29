import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Header extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}> Quantity Management App </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 25,
        width: "100%",

    }
})
export default Header
