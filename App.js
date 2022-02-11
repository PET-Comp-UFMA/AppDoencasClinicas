import React from 'react';
import type Node from 'react';
import { NavigationContainer }      from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


// Configuração de texto
import Text          from 'react-native';
Text.defaultProps       = Text.defaultProps || {}
Text.defaultProps.style =  { 
  color: 'red',
  fontFamily: 'Mulish-Regular',
  fontSize: 12
}

// Telas
import TelaPrincipal from '@screens/TelaPrincipal';
import TelaTeste     from '@screens/TelaTeste';

// Componentes
import Titulo        from '@components/Titulo';


const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Principal' 
        screenOptions={{
          headerTitle: (props) => <Titulo {...props}/>,
          headerBackVisible: "no"
        }}> 
       
        <Stack.Screen 
          name      = 'Principal'
          component = {TelaPrincipal}
          options   = {{ title: "Tela Principal" }}/>
 
        <Stack.Screen 
          name      = 'Teste'
          component = {TelaTeste}
          options   = {{ title: "Tela Teste" }}/>
 
      </Stack.Navigator>
    </NavigationContainer>
  ); 
};
 
export default App;
 