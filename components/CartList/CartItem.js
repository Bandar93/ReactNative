import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { Button, VStack } from 'native-base'
import NumericInput from 'react-native-numeric-input'
import { baseURL } from '../../stores/api'
import cartStore from '../../stores/cartStore'
import { observer } from 'mobx-react'
const CartItem = ({item}) => {
    const [quantity, setQuantity] = useState(item.quantity);

    const handleAdd = (value) => {
        setQuantity(value)
        cartStore.addItemToCart(item.product,value);

    };
    return (
        <View>
            
            <Image source={{uri: baseURL + item.product.image}}
            style={{width:50, height:50}} />
            <VStack>
            <Text>{item.product.name}</Text>
            <Text>{item.quantity} Quantity</Text>
            <Text>{item.product.price} KD price</Text>
            <VStack>
            <NumericInput
            minValue={1}
             value={quantity}
             onChange={(value) => handleAdd(value)} />
             
             </VStack>
            </VStack>
            
            
        </View>
    )
}

export default observer(CartItem);
