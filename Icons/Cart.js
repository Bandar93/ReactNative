import { observer } from 'mobx-react'
import { VStack, Badge } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import Icon from "react-native-vector-icons/EvilIcons"
import cartStore from '../stores/cartStore'

const Cart = ({navigation}) => {
    return (
        
        <View>
            <VStack>
            <Badge // bg="red.400"
        colorScheme="danger"
        rounded="999px"
        mb={-5}
        mr={1}
        zIndex={0}
        variant="solid"
        alignSelf="flex-end"
        _text={{
          fontSize: 12,
        }}
      >
        {cartStore.totalQuantity}
      </Badge>
            <Text> {cartStore.totalQuantity} </Text>
            {/* <Text onPress={() => navigation.navigate("CartList")} >Cart</Text> */}
            <Icon onPress={() => navigation.navigate("CartList")}size={35} name="cart"/>
            </VStack>
        </View>
    )
}

export default observer(Cart);
