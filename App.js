import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './components/Navigation';
export default function App() {


  return (
    <NavigationContainer>
    <NativeBaseProvider>
    
      <Navigation/>
    
    </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
