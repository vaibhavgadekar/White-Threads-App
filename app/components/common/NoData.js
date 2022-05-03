import { View, Text ,StyleSheet,StatusBar,Image} from 'react-native'
import React from 'react'
import { ColorStyles } from '../../assets/styles/ColorStyles'
import { GenericStyles } from '../../assets/styles/GenericStyles'

export default function NoData() {
  return (
      <View style={[style.container, GenericStyles.centerContent]}>
          <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
          <Image style={style.image} source={require('../../assets/images/common/NoData.png')} />
          <Text style={style.headerTitle}>Not found</Text>
      </View>
  )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:ColorStyles.light.white,
        height:"100%",
        width:"100%"
    },
    image:{
        height:200,
        width:200
    },
    headerTitle: {
        fontSize: 18,
        marginTop: 16,
        marginLeft: 10,
        color: "#282C3F",
        fontFamily: "DMSansBold",
      },
})