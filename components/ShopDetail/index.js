import { observer } from 'mobx-react';
import { Button, Spinner } from 'native-base';
import React from 'react'
import {  Image , View , Text} from 'react-native'
import { baseURL } from '../../stores/api';
import shopStore from '../../stores/shopStore'
import ProductList from '../ProductList';

const ShopDetail = ({navigation}) => {
    if(shopStore.isLoading) return <Spinner />
    const shop = shopStore.shop[0];
    return (
        <View>
            <Text> {shop.name} </Text>
            <Image source={{uri: baseURL + shop.image}}
            style={{width:50, height:50}} />
            <ProductList products={shop.products}/>
            <Button onPress={() => navigation.navigate("Home")}>Home</Button>
            
        </View>
    )
}

export default observer(ShopDetail);