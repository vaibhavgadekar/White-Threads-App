import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import React from "react";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
      <Image
        source={require("../images/Banner.png")}
        resizeMode="contain"
        style={styles.fullImage}
      />
      <View style={styles.descTextParent}>
        <Text style={styles.welcomeText}>Welcome to CaStore !</Text>
        <Text style={styles.descriptionText}>
          With long experience in the audio industry, we create the best quality
          products
        </Text>
        <TouchableOpacity>
          <View style={styles.getStartedButton}>
            <View></View>
            <Text style={styles.getStartedText}>GET STARTED</Text>
            <FontAwesome
              name="long-arrow-right"
              size={24}
              color="black"
              style={styles.rightIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fullImage: {
    height: 500,
    width: Dimensions.get("window").width,
  },
  descTextParent: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  welcomeText: {
    fontSize: 25,
    fontFamily: "DMSansBold",
    color: "#000",
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 15,
    textAlign: "center",
    color: "#ACACAC",
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
