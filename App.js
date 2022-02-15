import React from 'react';
import type Node from 'react';
import { NavigationContainer }      from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


// Telas
import T001          from '@screens/001-Inicio';
import T002          from '@screens/002-ManejoClinico';
import T003          from '@screens/003-AnamneseEExameFisico';
import T004          from '@screens/004-CorrimentoVaginalOuUretral';
import T005          from '@screens/005-CorrimentoVaginal';

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

        <Stack.Screen 
          name      = '003-Anamnese e Exame Fisico'
          component = {T003}
          options   = {{ title: "Anamnese e Exame Físico" }}/>

        <Stack.Screen 
          name      = '004-Corrimento Vaginal ou Uretral'
          component = {T004}
          options   = {{ title: "Corrimento Vaginal ou Uretral" }}/>

        <Stack.Screen 
          name      = '005-Corrimento Vaginal'
          component = {T005}
          options   = {{ title: "Corrimento Vaginal" }}/>


      </Stack.Navigator>
    </NavigationContainer>
  ); 
};
 
export default App;