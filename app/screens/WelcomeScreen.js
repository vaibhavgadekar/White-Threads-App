import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LottieView from 'lottie-react-native';
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import { ColorStyles } from "../assets/styles/ColorStyles";
import { GenericStyles } from "../assets/styles/GenericStyles";

export default function WelcomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={ColorStyles.light.primaryBg} barStyle="dark-content" />
      <View style={[styles.fullImage, GenericStyles.centerContent]}>
        <LottieView source={require('../assets/lottie/cart2.json')} autoPlay loop style={{ height: 400 }} />
      </View>
      <View style={styles.descTextParent}>
        <Text style={styles.welcomeText}>Welcome to CaStore !</Text>
        <Text style={styles.descriptionText}>
          With long experience in the audio industry, we create the best quality
          products
        </Text>
        <Button title="Get Started" onPress={() => navigation.goBack()} style={{ marginTop: 20,width: "90%", }} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorStyles.light.primaryBg,
    width: "100%",
    height: "100%"
  },
  fullImage: {
    height: "60%",
    width: "100%",
  },
  descTextParent: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  welcomeText: {
    fontSize: 25,
    fontFamily: "DMSansBold",
    color: ColorStyles.light.black,
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 15,
    textAlign: "center",
    color: ColorStyles.light.lightgray,
    fontFamily: "DMSansMedium",
  },
  getStartedButton: {
    width: Dimensions.get("window").width - 70,
    marginTop: 100,
    height: 53,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#000",
    borderRadius: 8,
  },
  getStartedText: {
    fontSize: 15,
    marginTop: 18,
    fontFamily: "DMSansBold",
    color: "#FFF",
    marginLeft: 20,
  },
  rightIcon: {
    marginRight: 20,
    marginTop: 15,
  },
});
