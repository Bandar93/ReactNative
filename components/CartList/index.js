import React from 'react'
import { View, Text } from 'react-native'
import cartStore from '../../stores/cartStore'
import CartItem from './CartItem'

const CartList = () => {
    const cartList = cartStore.items.map((item) => ( 
    <CartItem key={item.product._id} item={item}/>
    ));
    return (
        <View>
            {cartList}
        </View>
    )
}

export default CartList
