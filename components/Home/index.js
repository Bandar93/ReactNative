import { Text,Button } from 'native-base';
import React from 'react'
import {   View } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View>
           <Text>Home Page</Text>
           <Button onPress={() => navigation.navigate("ShopList")}>ShopList</Button>

        </View>
    );
};

export default Home


