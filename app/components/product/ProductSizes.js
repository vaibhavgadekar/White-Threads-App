import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ColorStyles } from '../../assets/styles/ColorStyles'

export default function ProductSizes() {
    return (
        <View>
            <View style={{ marginTop: 15, marginLeft: 10 }}>
                <ScrollView horizontal>
                    {["XS", "S", "M", "L", "XL", "XXL"].map((item, index) => {
                        return (
                            <View style={{ height: 36, width: 36, borderColor: ColorStyles.light.lightgray, borderWidth: 1, marginLeft: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: index == 3 ? "black" : "#F9FAFB", borderRadius: 4 }}>
                                <Text style={{
                                    color: index == 3 ? "white" : ColorStyles.light.lightgray, fontSize: 11,
                                    fontFamily: "DMSansMedium",
                                }}>{item}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}