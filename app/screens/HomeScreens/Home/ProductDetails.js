import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import ProductImages from '../../../components/ProductImages'
import AppStatusBar from '../../../components/common/AppStatusBar'
import HeaderBar from '../../../components/HeaderBar'
import BottomButtons from '../../../components/common/BottomButtons'
import ProductName from '../../../components/product/ProductName'
import ProductSizes from '../../../components/product/ProductSizes'
import DeliveryDetails from '../../../components/product/DeliveryDetails'

export default function ProductDetails() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <AppStatusBar />
            <HeaderBar />
            <ScrollView>
                <ProductImages></ProductImages>
                <ProductName />
                <ProductSizes />
                <DeliveryDetails/>
            </ScrollView>
            <BottomButtons />
        </SafeAreaView>
    )
}