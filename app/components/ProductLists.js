import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  View,
} from "react-native";

import React,{memo} from "react";
import { ColorStyles } from "../assets/styles/ColorStyles";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
 function ProductLists(props) {

  const placeholderItems=["1","2","3","4","5","6"]
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
      {/* <ScrollView> */}
        {/* <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
       {placeholderItems.map((item, index) => {
         return(
          <SkeletonPlaceholder>
            <SkeletonPlaceholder width={Dimensions.get("window").width / 2} height={250} style={{justifyContent: 'center',alignItems: 'center',}}>
            <SkeletonPlaceholder.Item width={(Dimensions.get("window").width / 2)-10} height={200} borderRadius={9} />
              </SkeletonPlaceholder>
            <SkeletonPlaceholder.Item width={Dimensions.get("window").width / 2} height={80}>
              <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                <SkeletonPlaceholder.Item marginLeft={10} marginTop={10}>
                  <SkeletonPlaceholder.Item width={120} height={20} borderRadius={4} />
                  <SkeletonPlaceholder.Item
                    marginTop={6}
                    width={80}
                    height={20}
                    borderRadius={4}
                  />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
         )})}
        </View> */}

    

          <FlatList
            data={props.items}
            keyExtractor={(x, i) => i.toString()}
            numColumns={2}
            onEndReachedThreshold={0.4}
            onEndReached={props.onEndReached}
            initialNumToRender={5}
            renderItem={({ item, index }) =>
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
      {/* <View style={styles.BottomView}>
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
      </View> */}
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
  },
  descTextParent: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 10,
    color: "#282C3F",
    fontFamily: "DMSansBold",
  },
  descriptionText: {
    fontSize: 13,
    // marginTop:5,
    marginLeft: 10,
    color: "#535766",
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
    color: "#00A300",
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