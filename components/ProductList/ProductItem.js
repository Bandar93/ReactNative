import React,{useState} from 'react'
import { View, Text } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import cartStore from '../../stores/cartStore';

const ProductItem = ({product}) => {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = (value) => {
        cartStore.addItemToCart(product, value)
        setQuantity(value);

    }
    return (
        <View>
            <Text>product.name</Text>
            <NumericInput
            minValue={1}
             value={quantity}
             onChange={(value) => handleAdd(value)} />
        </View>
        
    )
}

export default ProductItem
