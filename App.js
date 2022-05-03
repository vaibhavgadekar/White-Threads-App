import { Dimensions, StyleSheet, Text, View } from "react-native";

import React, {useEffect} from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
export default function App() {
  const [loaded] = useFonts({
    DMSansBold: require("./app/assets/fonts/DMSans-Bold.ttf"),
    DMSansMedium: require("./app/assets/fonts/DMSans-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }


  return (
    <>
<NavigationContainer>
  <AuthNavigator/>
</NavigationContainer>
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
