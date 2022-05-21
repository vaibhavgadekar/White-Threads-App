import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BottomButtons() {
    return (
        <View style={style.container}>
            <View style={style.chidContainer}>
                <View style={style.borderButton}>
                    <Text style={style.borderButtonText}>{"Add to Cart"}</Text>
                </View>
                <View style={style.fillButton}>
                    <Text style={style.fillButtonText}>{"Buy now"}</Text>

                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        height: 80,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    chidContainer: {
        flexDirection: 'row',

    },
    borderButton: {
        height: 50,
        width: "45%",
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fillButton: {
        height: 50,
        width: "45%",
        marginLeft: 16,
        backgroundColor: 'black',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderButtonText: {
        color: "black",
        fontSize: 14,
        fontFamily: "DMSansMedium",
    },
    fillButtonText: {
        color: "white",
        fontSize: 14,
        fontFamily: "DMSansMedium",
    }

})