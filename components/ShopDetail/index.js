import { observer } from 'mobx-react';
import React from 'react'
import {  Image , View , Text} from 'react-native'
import { baseURL } from '../../stores/api';
import shopStore from '../../stores/shopStore'

const ShopDetail = () => {
    const shop = shopStore.shop[0];
    return (
        <View>
            <Text> {shop.name} </Text>
            <Image source={{uri: baseURL + shop.image}}
            style={{width:50, height:50}} />
            
        </View>
    )
}

export default observer(ShopDetail);