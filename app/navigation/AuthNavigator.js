import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginScreen from '../screens/Authentications/LoginScreen'
import WelcomeScreen from '../screens/WelcomeScreen'

export default function AuthNavigator() {
    const AuthStack = createNativeStackNavigator()
    return (
        <AuthStack.Navigator screenOptions={{
            animation:'slide_from_right'
        }}>
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
