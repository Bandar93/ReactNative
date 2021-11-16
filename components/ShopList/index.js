import { observer } from 'mobx-react'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import shopStore from '../../stores/shopStore'
import ShopItem from './ShopItem'

const ShopList = () => {
    const shopList = shopStore.shop.map((shop) => (
        <ShopItem shop={shop} key={shop._id}/>
        
    ));
    console.log(shopStore.shop)

    return (
        <View>
        {shopList}
        </View>
    )
}

export default observer (ShopList);

const styles = StyleSheet.create({})
