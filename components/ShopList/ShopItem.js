import { observer } from 'mobx-react'
import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import { baseURL } from '../../stores/api'

const ShopItem = ({shop,navigation}) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate("ShopDetail",{shop: shop }) } > {shop.name} </Text>
            <Image
            source = {{uri: baseURL + shop.image}}
            style={{width:50, height:50}}
            />
        </View>
    )
}

export default  observer(ShopItem)

const styles = StyleSheet.create({})
