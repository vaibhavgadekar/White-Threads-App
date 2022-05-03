import { View, Text, Dimensions,StatusBar } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export default function PlaceHolder() {
    const placeholderItems = ["1", "2", "3", "4", "5", "6"]

    return (
        <View>
      <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "100%",
                }}
            >
                {placeholderItems.map((item, index) => {
                    return (
                        <SkeletonPlaceholder>
                            <SkeletonPlaceholder width={Dimensions.get("window").width / 2} height={250} style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <SkeletonPlaceholder.Item width={(Dimensions.get("window").width / 2) - 10} height={200} borderRadius={9} />
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
                    )
                })}
            </View>
        </View>
    )
}