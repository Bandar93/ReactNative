import React from 'react'
import { View, Text, Image } from 'react-native'
import { baseURL } from '../../stores/api'
const CartItem = ({item}) => {
    return (
        <View>
            <Text>{item.product.name}</Text>
            <Image source={{uri: baseURL + item.product.image}}
            style={{width:50, height:50}} />
            <Text>{item.quantity} Quantity</Text>
            <Text>{item.product.price} KD price</Text>
        </View>
    )
}

export default CartItem
