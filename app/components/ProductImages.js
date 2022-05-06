import { View, Text, StyleSheet,Image,ScrollView,Pressable,BackHandler ,Alert} from 'react-native'
import React,{useState,useEffect} from 'react'
import { ImageGallery } from '@georstat/react-native-image-gallery';
import { ColorStyles } from '../assets/styles/ColorStyles'

export default function ProductImages() {

    const [isOpen, setIsOpen] = useState(false);
    const openGallery = () => setIsOpen(true);
    const closeGallery = () => setIsOpen(false);
    const data=[
        {
            url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14834692/2021/7/28/245895c4-08d9-4e5f-98cc-77d7085ab44a1627458115551-Marks--Spencer-Men-Olive-Green-Pure-Cotton-Garment-Dyed-Soli-1.jpg",
          },
          {
            url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14834692/2021/7/28/3a6644fc-eaa5-4899-9fb3-66fc6f37f07a1627458115531-Marks--Spencer-Men-Olive-Green-Pure-Cotton-Garment-Dyed-Soli-2.jpg",
          },
          {
            url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14834692/2021/7/28/3d1ede29-b922-465b-ab8b-c6effba483c71627458115510-Marks--Spencer-Men-Olive-Green-Pure-Cotton-Garment-Dyed-Soli-3.jpg",
          },
          {
            url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14834692/2021/7/28/e1fb9f14-b513-45c5-b1e5-4cc216d4d8211627458115471-Marks--Spencer-Men-Olive-Green-Pure-Cotton-Garment-Dyed-Soli-5.jpg",
          },
          {
            url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14834692/2021/7/28/176fd5a2-ad28-46f3-92e3-d0f9733feb8d1627458115452-Marks--Spencer-Men-Olive-Green-Pure-Cotton-Garment-Dyed-Soli-6.jpg",
          },
    ]
    function getRandomColor() {
        var letters = 'BCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }

    const renderHeaderComponent = (image, currentIndex) => {
        return( 
        <View onStartShouldSetResponder={closeGallery} style={{ height: 40, width: 40, borderColor: ColorStyles.light.lightgray, borderWidth: 1,marginTop:20 ,marginLeft:10}}>

        </View>
        );
      };


      useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);

  return (
      <View style={styles.container}>
          <View>
              <ScrollView horizontal>
                  {data.map((item, index) => {
                      return (
                          <Pressable onPress={openGallery}>
                          <Image source={{ uri: item.url }} style={{ height: 400, width: 300, marginLeft: 9, backgroundColor: getRandomColor(), borderRadius: 4 }}/>
                          </Pressable>
                      )
                  })}
              </ScrollView>
          </View>
          <View>
              <ScrollView horizontal>
                  {data.map((item, index) => {
                      return (
                          <View style={{ height: 40, width: 40, borderColor: ColorStyles.light.lightgray, borderWidth: 1, marginLeft: 8, justifyContent: 'center', alignItems: 'center',backgroundColor:index==3?getRandomColor():"white" }}>
                              <Text style={{ color: index == 3 ? "black" : ColorStyles.light.lightgray }}>M</Text>
                          </View>
                      )
                  })}
              </ScrollView>
              <ImageGallery style={{backgroundColor: 'white',}} close={closeGallery} isOpen={isOpen} images={data} renderHeaderComponent={renderHeaderComponent} thumbSize={100}/>
          </View>
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
})