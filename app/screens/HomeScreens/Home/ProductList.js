import { View, Text,SafeAreaView ,StatusBar} from 'react-native'
import React,{useState,useEffect} from 'react'
import { Dimensions } from 'react-native-web'
import ProductLists from '../../../components/ProductLists'
import HeaderBar from '../../../components/HeaderBar'
import { useNavigation } from '@react-navigation/native'
import NoData from '../../../components/common/NoData'
import PlaceHolder from '../../../components/common/PlaceHolder'
import ProductImages from '../../../components/ProductImages'

export default function ProductList() {
    const navigation=useNavigation()
    const rawitems = [
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
const [page,setPage]=useState(8)
const [loading,setLoading]=useState(true)
const [items,setItems]=useState([])
    const onEndReached = () => {
        let data = rawitems
        setPage(page + 5)
        console.log(page);
        data = data.slice(0, page)
        setItems(data)
    }

    useEffect(() => {
        setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://fakestoreapi.com/products", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result) {
                  console.log(result);
                    setItems(result)
                    setLoading(false)
                }
            })
            .catch(error => {
              console.log(error);
                setLoading(false)
            });
    }, [])

    return (
        // <View >
          <SafeAreaView style={{ flex: 1 }}>
            <>
      <StatusBar backgroundColor={"#ffffff"} barStyle="dark-content" />

            <HeaderBar onPress={() => navigation.goBack()} />
            {!loading &&  items.length <= 0 && <NoData />}
            {!loading && items && items.length > 0 && <ProductLists
                items={items}
                // onEndReached={onEndReached} 
                />}
            {loading && <PlaceHolder />}
            {/* <ProductImages/> */}
            </>
            </SafeAreaView>
        // </View>
    )
}