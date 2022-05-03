import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { GenericStyles } from '../assets/styles/GenericStyles'
import { ColorStyles } from '../assets/styles/ColorStyles';

export default function InputText(props) {
    function emitClickEvent() {
        if (props.onPress) {
            props.onPress();
        }
    }

    return (
        <View style={[GenericStyles.inputBackground, props.style, style.parentView]}>
            <Text style={[GenericStyles.inputText, style.countryCode]} >+91</Text>
            <View style={style.verticalLine}></View>
            <TextInput style={[GenericStyles.inputText, style.inputText]} placeholder="Mobile number" onChangeText={props.onChangeText} maxLength={10} keyboardType={props.keyboardType} />
        </View>
    )
}

const style = StyleSheet.create({
    parentView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4
    },
    verticalLine: {
        height: 15,
        width: 2,
        backgroundColor: ColorStyles.light.darkpink,
        marginLeft: 5
    },
    inputText: {
        marginLeft: 10,
        width: "50%"
    },
    countryCode: {
        color: '#520b52',
        marginLeft: 5,
    }
})