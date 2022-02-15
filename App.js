import React from 'react';
import type Node from 'react';
import { NavigationContainer }      from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


// Telas
import TelaPrincipal from '@screens/TelaPrincipal';
import TelaTeste     from '@screens/TelaTeste';
import T001          from '@screens/001-Inicio';
import T002          from '@screens/002-ManejoClinico';

// Componentes
import Titulo        from '@components/Titulo';


const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = '001-Inicio' 
        screenOptions={{
          headerTitle: (props) => <Titulo {...props}/>,
          headerBackVisible: "no"
        }}> 
       
       <Stack.Screen 
          name      = '001-Inicio'
          component = {T001}
          options   = {{ title: "Início" ,
                         headerShown: false}}/>

        <Stack.Screen 
          name      = '002-Manejo Clinico'
          component = {T002}
          options   = {{ title: "Manejo Clínico" }}/>

      </Stack.Navigator>
    </NavigationContainer>
  ); 
};
 
export default App;