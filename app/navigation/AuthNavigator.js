import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginScreen from '../screens/Authentications/LoginScreen'
import ProductLists from '../components/ProductLists'
import WelcomeScreen from '../screens/WelcomeScreen'
import ProductList from '../screens/HomeScreens/Home/ProductList'

export default function AuthNavigator() {
    const AuthStack = createNativeStackNavigator()
    return (
        <AuthStack.Navigator screenOptions={{
            animation:'slide_from_right'
        }}>
             <AuthStack.Screen
                name="ProductList"
                component={ProductList}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            
        </AuthStack.Navigator>
    )
}
