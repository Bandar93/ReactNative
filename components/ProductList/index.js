import React from 'react'
import { View } from 'react-native'
import ProductItem from './ProductItem'

const ProductList = ({products}) => {
    const productList = products.map((product) => <ProductItem product={product} key={product._id}/>)
    return (
        <View>
            {productList}
        </View>
    )
}

export default ProductList
