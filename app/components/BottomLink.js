import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ColorStyles } from '../assets/styles/ColorStyles'

export default function BottomLink(props) {
    return (
        <View>
            <Text>
                <Text style={style.primaryText}>{props.primaryText}</Text>
                <Text style={style.secondaryText} onPress={props.onPress}> {props.secondaryText}</Text>
            </Text>
        </View>
    )
}
const style = StyleSheet.create({
    primaryText: {
        color: ColorStyles.light.darkpink,
        fontSize: 15,
        fontFamily: "DMSansMedium",
    },
    secondaryText: {
        color: ColorStyles.light.darkpink,
        fontSize: 15,
        fontFamily: "DMSansBold",
    }
})