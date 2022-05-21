import { View, Text ,StatusBar} from 'react-native'
import React from 'react'

export default function AppStatusBar() {
  return (
    <View>
      <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
    </View>
  )
}