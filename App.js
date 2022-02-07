/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import TelaPrincipal from '@screens/TelaPrincipal';
import TelaTeste from '@screens/TelaTeste';




const App: () => Node = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Principal'>

      <Stack.Screen 
        name = 'Principal'
        components = {TelaPrincipal}
      />

      <Stack.Screen 
        name = 'Teste'
        components = {TelaTeste}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );

};


export default App;
