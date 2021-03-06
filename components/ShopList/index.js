import { observer } from 'mobx-react'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import shopStore from '../../stores/shopStore'
import ShopItem from './ShopItem'

const ShopList = ({navigation}) => {
    const shopList = shopStore.shop.map((shop) => (
        <ShopItem shop={shop} navigation={navigation} key={shop._id}
        styles="container"/>
        
    ));
    

    return (
        <View>
        {shopList}
        </View>
    )
}

export default observer (ShopList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
