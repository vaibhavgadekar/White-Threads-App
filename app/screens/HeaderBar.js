import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React from "react";

export default function HeaderBar() {
  return (
    <View style={styles.headerParent}>
      <View style={styles.leftLogoView}>
        <AntDesign
          name="arrowleft"
          size={28}
          color="black"
          style={styles.leftIcon}
        />
        <Text style={styles.headerTitle}>Mens Shoees</Text>
      </View>
      <View style={styles.RightLogoView}>
        <View style={styles.rightLogoRow}>
          <AntDesign
            name="search1"
            size={25}
            color="black"
            style={styles.searchIcon}
          />
          <Ionicons
            name="heart-outline"
            size={26}
            color="black"
            style={styles.searchIcon}
          />
          <View>
          <SimpleLineIcons
            name="handbag"
            size={25}
            color="black"
            style={styles.searchIcon}
          />
          {/* <View style={{height:20,width:20,borderRadius:30,backgroundColor:'#000',marginTop:-28,marginLeft:19}}></View> */}
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerParent: {
    height: 60,
    width: Dimensions.get("window").width,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  leftLogoView: {
    flexDirection: "row",
  },
  leftIcon: {
    marginLeft: 15,
    marginTop: 15,
  },
  headerTitle: {
    fontSize: 18,
    marginTop: 16,
    marginLeft: 10,
    color: "#282C3F",
    fontFamily: "DMSansBold",
  },
  RightLogoView: {
    right: 0,
    position: "absolute",
  },
  rightLogoRow: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  searchIcon: {
    marginTop: 15,
    marginRight: 20,
  },
});
