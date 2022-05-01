import { StyleSheet } from 'react-native'
import { ColorStyles } from './ColorStyles'
export const GenericStyles = StyleSheet.create({
    primaryButton: {
        width: "100%",
        height: 53,
        backgroundColor: ColorStyles.light.primaryButton,
        borderRadius: 8
    },
    primaryButtonText: {
        color: ColorStyles.light.white,
        fontSize: 16,
        fontFamily: "DMSansBold",
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: ColorStyles.light.darkpink,
        fontSize: 26,
        fontFamily: "DMSansBold",
    },
    marginLeft24: {
        marginLeft: 24
    },
    inputBackground: {
        width: "100%",
        height: 103,
        backgroundColor: "#ebe1d3",
        borderRadius: 18
    },
    inputText: {
        color: ColorStyles.light.darkpink,
        fontSize: 20,
        fontFamily: "DMSansBold",
        marginTop:8,
        marginLeft:10
    },
    marginTop24: {
        marginTop: 24
    },
    marginTop68: {
        marginTop: 68
    },
    width90:{
width:"90%"
    }
})