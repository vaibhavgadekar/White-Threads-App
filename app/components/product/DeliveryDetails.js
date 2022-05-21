import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

export default function DeliveryDetails() {
    return (
        <View style={style.container}>
            <View style={style.content}>
                <View style={style.deliverRow}>
                    <View style={style.deliverTo}>
                        <Text style={{ fontSize: 13, fontFamily: "DMSansMedium", color: 'gray' }}>
                            Deliver To
                        </Text>
                        <Text style={{ fontSize: 14, fontFamily: "DMSansBold", color: '#000' }}>
                            Home: Near sawata temple ..
                        </Text>
                    </View>
                    <View style={style.changeButtonView}>
                        <View style={style.changeButton}>
                            <Text style={style.borderButtonText}>Change</Text>
                        </View>
                    </View>
                </View>
                <View style={[style.deliverRow, { marginTop: 10 }]}>
                    <Feather name="truck" size={22} color="black" />
                    <Text style={[style.borderButtonText,{fontSize:12,marginTop:3,marginLeft:10}]}>Get it by Wed, Feb 22</Text>
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
        width: "90%",
        height: 200,
        backgroundColor: 'white',
        borderRadius: 6,
    },
    deliverRow: {
        width: "100%",
        flexDirection: 'row'
    },
    deliverTo: {
        width: "70%",
        marginTop: 10
    },
    changeButtonView: {
        width: "30%",
    },
    changeButton: {
        height: 40,
        marginTop: 6,
        width: "100%",
        borderColor: 'black',
        borderWidth: 1.3,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderButtonText: {
        color: "black",
        fontSize: 14,
        fontFamily: "DMSansMedium",
    },

})