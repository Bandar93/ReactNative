import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../Home'
import ShopList from '../ShopList'
import ShopDetail from '../ShopDetail'
import CartList from '../CartList';
import Cart from '../../Icons/Cart'
const Navigation = () => {
    const { Navigator, Screen} = createStackNavigator();
    return (
        <Navigator initialRouteName="Home">
         <Screen name="Home" component={Home} />
         <Screen name="ShopList" component={ShopList}
         options={({ navigation }) => ({
             title: "Shop",
             headerRight: () => < Cart navigation={navigation} />
         })} />
         <Screen name="ShopDetail" component={ShopDetail}
         options={({ navigation,route }) => {
             return {
                 title: route.params.shop.name,
                 headerRight: () => < Cart navigation={navigation} />
             };
         }}
         />
         <Screen name="CartList" component={CartList}/>
        </Navigator>
    )
}

export default Navigation
