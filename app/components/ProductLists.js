import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Text,
  FlatList,
  View,
} from "react-native";

import React, { memo } from "react";
import { ColorStyles } from "../assets/styles/ColorStyles";
import AppStatusBar from "./common/AppStatusBar";
function ProductLists(props) {

  const placeholderItems = ["1", "2", "3", "4", "5", "6"]
  return (
    <View style={styles.container}>
      <AppStatusBar />
      {/* <ScrollView> */}
      <FlatList
        data={props.items && props.items}
        keyExtractor={(x, i) => i.toString()}
        numColumns={2}
        onEndReachedThreshold={0.4}
        onEndReached={props.onEndReached}
        initialNumToRender={5}
        style={{ marginBottom: 60 }}
        renderItem={({ item, index }) =>
          <View style={styles.Productcard}>
            <View style={styles.productImage}>
              <View>
                <ImageBackground
                  source={{
                    uri: item.image,
                  }}
                  resizeMode="contain"
                  style={[styles.productImage, {
                    height: 230,
                    width: (Dimensions.get("window").width - 20) / 2,
                  }]}
                >
                  <View style={{ height: 25, width: 70, backgroundColor: '#10B989', marginTop: 5, marginLeft: 5, borderRadius: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontFamily: "DMSansMedium", fontSize: 11 }}>Trending</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <Text style={styles.descTextParent}>{item.title.length > 20 ? item.title.substring(0, 19) + ".." : item.title}</Text>
            <Text style={styles.descriptionText}>{item.description.length > 20 ? item.description.substring(0, 20) + ".." : item.description}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.regularPrice}>{"\u20B9"}248</Text>
              <Text style={styles.offerPrice}>
                {"\u20B9"}
                {item.price}
              </Text>
              <Text style={styles.percentText}>20% OFF</Text>
            </View>
          </View>
        }
      />
      {/* {props.items.map((item, index) => {
            return (
              <View style={styles.Productcard}>
                <View style={styles.productImage}>
                  <Image
                    source={{
                      uri: item.img,
                    }}
                    resizeMode="cover"
                    style={styles.productImage}
                  />
                </View>
                <Text style={styles.descTextParent}>{item.name}</Text>
                <Text style={styles.descriptionText}>{item.desc}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.regularPrice}>{"\u20B9"}248</Text>
                  <Text style={styles.offerPrice}>
                    {"\u20B9"}
                    {item.price}
                  </Text>
                  <Text style={styles.percentText}>20% OFF</Text>
                </View>
              </View>
            );
          })} */}
      {/* </ScrollView> */}
      <View style={styles.BottomView}>
        <View style={styles.SortByView}>
          <View style={styles.SortByViewChild}>
            <Ionicons name="swap-vertical-outline" size={24} color="#fff" />
            <Text style={styles.SortText}>SORT BY</Text>
          </View>
        </View>
        <View style={styles.SortByView}>
          <View style={styles.SortByViewChild}>
            <Ionicons name="filter" size={24} color="#fff" />
            <Text style={styles.SortText}>FILTER BY</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Productcard: {
    width: Dimensions.get("window").width / 2,
    backgroundColor: "#fff",
    height: 330,
    borderColor: "lightgray",
    borderWidth: 0.5,
  },
  productImage: {
    height: 250,
    width: Dimensions.get("window").width / 2,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center'
  },
  descTextParent: {
    fontSize: 13,
    marginTop: 5,
    marginLeft: 10,
    color: "#282C3F",
    fontFamily: "DMSansBold",
  },
  descriptionText: {
    fontSize: 13,
    // marginTop:5,
    marginLeft: 10,
    color: "#c5c5c5",
    fontFamily: "DMSansMedium",
  },
  priceRow: {
    width: Dimensions.get("window").width / 2,
    flexDirection: "row",
  },
  regularPrice: {
    marginLeft: 10,
    color: "lightgray",
    fontSize: 13,
    marginTop: 5,
    fontFamily: "DMSansMedium",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  offerPrice: {
    marginLeft: 4,
    color: "#000000",
    fontSize: 13,
    marginTop: 5,
    fontFamily: "DMSansMedium",
  },
  percentText: {
    marginLeft: 5,
    color: "#EC6D2B",
    fontSize: 12,
    marginTop: 5,
    fontFamily: "DMSansMedium",
  },
  BottomView: {
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width,
    height: 60,
    flexDirection: 'row',
    backgroundColor: ColorStyles.light.darkpink,
  },
  SortByView: {
    width: Dimensions.get("window").width / 2,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "gray",
    borderRightWidth: 0.4,
  },
  SortByViewChild: {
    flexDirection: "row",
  },
  SortText: {
    marginLeft: 5,
    color: "#fff",
    fontSize: 13,
    marginTop: 5,
    fontFamily: "DMSansMedium",
  },
});
export default memo(ProductLists)