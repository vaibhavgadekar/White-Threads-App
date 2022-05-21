import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ProductName() {
    return (
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.title}>Calvin clien Regular fit slim shirt Calvin clien Regular fit slim shirt </Text>
                <View style={style.priceRow}>
                    <Text style={style.regularPrice}>{"\u20B9"}248</Text>
                    <Text style={style.offerPrice}>
                        {"\u20B9"}
                        {"200"}
                    </Text>
                    <Text style={style.percentText}>20% OFF</Text>
                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        marginTop: 30,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: "90%"
    },
    title: {
        color: "#1F2937",
        fontSize: 14,
        fontFamily: "DMSansBold",
    },
    priceRow: {
        width: "100%",
        flexDirection: "row",
    },
    regularPrice: {
        color: "lightgray",
        fontSize: 13,
        marginTop: 5,
        fontFamily: "DMSansBold",
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
    },
    offerPrice: {
        marginLeft: 4,
        color: "#000000",
        fontSize: 13,
        marginTop: 5,
        fontFamily: "DMSansMedium",
    },
    percentText: {
        marginLeft: 5,
        color: "#EC6D2B",
        fontSize: 12,
        marginTop: 5,
        fontFamily: "DMSansMedium",
    },
})