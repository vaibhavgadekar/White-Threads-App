import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { GenericStyles } from '../assets/styles/GenericStyles'

export default function Button(props) {
    function emitClickEvent() {
        if (props.onPress) {
            props.onPress();
        }
    }

    return (
        <Pressable onPress={() => emitClickEvent()} style={[GenericStyles.primaryButton, GenericStyles.centerContent, props.style]}>
                <Text style={[GenericStyles.primaryButtonText]}>{props.title}</Text>
        </Pressable>
    )
}
