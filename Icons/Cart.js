import React from 'react'
import { View, Text } from 'react-native'
import Icon from "react-native-vector-icons/EvilIcons"

const Cart = ({navigation}) => {
    return (
        <View>
            {/* <Text onPress={() => navigation.navigate("CartList")} >Cart</Text> */}
            <Icon onPress={() => navigation.navigate("CartList")}size={35} name="cart"/>
        </View>
    )
}

export default Cart
