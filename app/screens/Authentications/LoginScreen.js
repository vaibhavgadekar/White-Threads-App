import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import { ColorStyles } from '../../assets/styles/ColorStyles'
import { GenericStyles } from '../../assets/styles/GenericStyles'
import InputText from '../../components/InputText'

export default function LoginScreen() {
    const navigation = useNavigation()

    return (
        <View style={style.conatiner}>
            <StatusBar backgroundColor={ColorStyles.light.primaryBg} barStyle="dark-content" />
            <Text style={[GenericStyles.headerText, GenericStyles.marginLeft24, GenericStyles.marginTop24]}>Hey,{"\n"}Login now</Text>
            <View style={[GenericStyles.centerContent,GenericStyles.marginTop68]}>
                <InputText style={[GenericStyles.width90]} />
                <Button title="Login" style={[GenericStyles.marginTop24,{ width: "90%" }]} onPress={() => navigation.navigate("WelcomeScreen")} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: ColorStyles.light.primaryBg,
        width: "100%",
        height: "100%"
    }
})