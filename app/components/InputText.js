import { View, Text, Pressable,TextInput } from 'react-native'
import React from 'react'
import { GenericStyles } from '../assets/styles/GenericStyles'

export default function InputText(props) {
    function emitClickEvent() {
        if (props.onPress) {
            props.onPress();
        }
    }

    return (
        <View  style={[GenericStyles.inputBackground,props.style]}>
                <TextInput style={[GenericStyles.inputText]} placeholder="Mobile number" />
        </View>
    )
}
