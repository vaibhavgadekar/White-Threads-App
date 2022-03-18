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

export default function ProductLists() {
  const items = [
    {
      name: "Cherry Crumple",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17048020/2022/2/4/64a98450-0e32-4a32-934f-406034a1c28b1643975322918maxBoysGreenCargoShorts1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/14/88f80477-e591-486c-b45d-d8dc70b8ac0c1610624603241-1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17129956/2022/2/11/10180bd8-daf8-4256-9221-385f69f7c66e1644557015538PantaloonsJuniorOrangeFloralA-LineDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17062930/2022/2/5/f9f329bb-0846-4474-93a4-d704e35552321644056884307AKKRITIBYPANTALOONSFuchsiaA-LineDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17045996/2022/2/4/64cafdf1-7050-4b30-8c07-3ac0e70cc3b21643961943824pspeachesMustardYellowFloralDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14803292/2021/12/21/6c5b514d-f938-4ea4-8e20-284077313cf71640081932008-YK-Girls-Dresses-1751640081931652-1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Cherry Crumple",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16117272/2022/1/27/670592ef-2fd6-4adc-a8a7-e18dd927d3fc1643298647704CherryCrumblePeach-ColouredEmbellishedNetDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/14/88f80477-e591-486c-b45d-d8dc70b8ac0c1610624603241-1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17129956/2022/2/11/10180bd8-daf8-4256-9221-385f69f7c66e1644557015538PantaloonsJuniorOrangeFloralA-LineDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17062930/2022/2/5/f9f329bb-0846-4474-93a4-d704e35552321644056884307AKKRITIBYPANTALOONSFuchsiaA-LineDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17045996/2022/2/4/64cafdf1-7050-4b30-8c07-3ac0e70cc3b21643961943824pspeachesMustardYellowFloralDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14803292/2021/12/21/6c5b514d-f938-4ea4-8e20-284077313cf71640081932008-YK-Girls-Dresses-1751640081931652-1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Cherry Crumple",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16117272/2022/1/27/670592ef-2fd6-4adc-a8a7-e18dd927d3fc1643298647704CherryCrumblePeach-ColouredEmbellishedNetDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/14/88f80477-e591-486c-b45d-d8dc70b8ac0c1610624603241-1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17129956/2022/2/11/10180bd8-daf8-4256-9221-385f69f7c66e1644557015538PantaloonsJuniorOrangeFloralA-LineDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17062930/2022/2/5/f9f329bb-0846-4474-93a4-d704e35552321644056884307AKKRITIBYPANTALOONSFuchsiaA-LineDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17045996/2022/2/4/64cafdf1-7050-4b30-8c07-3ac0e70cc3b21643961943824pspeachesMustardYellowFloralDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14803292/2021/12/21/6c5b514d-f938-4ea4-8e20-284077313cf71640081932008-YK-Girls-Dresses-1751640081931652-1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Cherry Crumple",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16117272/2022/1/27/670592ef-2fd6-4adc-a8a7-e18dd927d3fc1643298647704CherryCrumblePeach-ColouredEmbellishedNetDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/14/88f80477-e591-486c-b45d-d8dc70b8ac0c1610624603241-1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17129956/2022/2/11/10180bd8-daf8-4256-9221-385f69f7c66e1644557015538PantaloonsJuniorOrangeFloralA-LineDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17062930/2022/2/5/f9f329bb-0846-4474-93a4-d704e35552321644056884307AKKRITIBYPANTALOONSFuchsiaA-LineDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17045996/2022/2/4/64cafdf1-7050-4b30-8c07-3ac0e70cc3b21643961943824pspeachesMustardYellowFloralDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14803292/2021/12/21/6c5b514d-f938-4ea4-8e20-284077313cf71640081932008-YK-Girls-Dresses-1751640081931652-1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Cherry Crumple",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16117272/2022/1/27/670592ef-2fd6-4adc-a8a7-e18dd927d3fc1643298647704CherryCrumblePeach-ColouredEmbellishedNetDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/14/88f80477-e591-486c-b45d-d8dc70b8ac0c1610624603241-1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17129956/2022/2/11/10180bd8-daf8-4256-9221-385f69f7c66e1644557015538PantaloonsJuniorOrangeFloralA-LineDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17062930/2022/2/5/f9f329bb-0846-4474-93a4-d704e35552321644056884307AKKRITIBYPANTALOONSFuchsiaA-LineDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17045996/2022/2/4/64cafdf1-7050-4b30-8c07-3ac0e70cc3b21643961943824pspeachesMustardYellowFloralDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14803292/2021/12/21/6c5b514d-f938-4ea4-8e20-284077313cf71640081932008-YK-Girls-Dresses-1751640081931652-1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Cherry Crumple",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16117272/2022/1/27/670592ef-2fd6-4adc-a8a7-e18dd927d3fc1643298647704CherryCrumblePeach-ColouredEmbellishedNetDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/14/88f80477-e591-486c-b45d-d8dc70b8ac0c1610624603241-1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17129956/2022/2/11/10180bd8-daf8-4256-9221-385f69f7c66e1644557015538PantaloonsJuniorOrangeFloralA-LineDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17062930/2022/2/5/f9f329bb-0846-4474-93a4-d704e35552321644056884307AKKRITIBYPANTALOONSFuchsiaA-LineDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17045996/2022/2/4/64cafdf1-7050-4b30-8c07-3ac0e70cc3b21643961943824pspeachesMustardYellowFloralDress1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
    {
      name: "Lili Picks",
      img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14803292/2021/12/21/6c5b514d-f938-4ea4-8e20-284077313cf71640081932008-YK-Girls-Dresses-1751640081931652-1.jpg",
      desc: "Girls Printed Empire Dress",
      price: "400",
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: Dimensions.get("window").width,
          }}
        >
          {items.map((item, index) => {
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
          })}
        </View>
      </ScrollView>
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
    fontSize: 14,
    marginTop: 5,
    fontFamily: "DMSansMedium",
  },
  percentText: {
    marginLeft: 5,
    color: "#00A300",
    fontSize: 13,
    marginTop: 5,
    fontFamily: "DMSansMedium",
  },
  BottomView: {
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width,
    height: 60,
    flexDirection:'row',
    backgroundColor: "#000",
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
