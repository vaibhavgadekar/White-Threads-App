import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import { ColorStyles } from '../../assets/styles/ColorStyles'
import { GenericStyles } from '../../assets/styles/GenericStyles'
import InputText from '../../components/InputText'
import BottomLink from '../../components/BottomLink'
import * as NavigationBar from 'expo-navigation-bar';

export default function LoginScreen() {
    const navigation = useNavigation()
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync(ColorStyles.light.primaryBg)
        NavigationBar.setButtonStyleAsync('dark')
      }, [])

    return (
        <View style={style.conatiner}>
            <StatusBar backgroundColor={ColorStyles.light.primaryBg} barStyle="dark-content" />
            <Text style={[GenericStyles.headerText, GenericStyles.marginLeft24, GenericStyles.marginTop24]}>Hey,{"\n"}Login now</Text>
            <View style={[GenericStyles.centerContent, GenericStyles.marginTop68]}>
                <InputText style={[GenericStyles.width90]} onChangeText={(e) => console.log(e)} keyboardType={"numeric"} />
                <Button title="Login" style={[GenericStyles.marginTop24, { width: "90%" }]} onPress={() => navigation.navigate("ProductList")} />
                <View style={[GenericStyles.marginTop24]}>
                    <BottomLink primaryText={"New user?"} secondaryText={" Signup here"} onPress={() => navigation.navigate("WelcomeScreen")}></BottomLink>
                </View>
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