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
 
 
 import TituloTeste from '@components/Titulo'
 
 const App: () => Node = () => {
 
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName = 'Principal' 
         screenOptions={{
           headerTitle: (props) => <TituloTeste {...props}/>,
           headerBackVisible: "no"
         }}
       > 
 
       
       <Stack.Screen 
         name = 'Principal'
         component = {TelaPrincipal}
         options={{ title: "Tela Principal" }}/>
 
       
 
 
       <Stack.Screen 
         name = 'Teste'
         component = {TelaTeste}
         options={{ title: "Tela Teste" }}
       />
 
       </Stack.Navigator>
     </NavigationContainer>
   );
 
 };
 
 
 export default App;
 