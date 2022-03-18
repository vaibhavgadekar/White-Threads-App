import { Dimensions, StyleSheet, Text, View } from "react-native";

import HeaderBar from "./app/screens/HeaderBar";
import ProductLists from "./app/screens/ProductLists";
import React from "react";
import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    DMSansBold: require("./app/fonts/DMSans-Bold.ttf"),
    DMSansMedium: require("./app/fonts/DMSans-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* <WelcomeScreen/> */}
      <HeaderBar/>
      <ProductLists />
     
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
