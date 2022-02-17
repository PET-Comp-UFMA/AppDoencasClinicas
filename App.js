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
import T102          from '@screens/102-TiraDuvidas';
import T103          from '@screens/103-CandidiaseVulvovaginal';
import T104          from '@screens/104-VaginoseBacteriana';
import T105          from '@screens/105-Tricomoniase';
import T106          from '@screens/106-ClamidiaeGonorreia';
import T107          from '@screens/107-LinfogranulamaVenereo';
import T108          from '@screens/108-Cancroide';
import T025          from '@screens/025-UlceraAnogenital';
import T026          from '@screens/026-UlceraAnogenital';


// Componentes
import Titulo from '@components/Titulo';


const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='001-Inicio'
        screenOptions={{
          headerTitle: (props) => <Titulo {...props} />,
          headerBackVisible: "no"
        }}>

        <Stack.Screen
          name='001-Inicio'
          component={T001}
          options={{
            title: "Início",
            headerShown: false
          }} />

        <Stack.Screen
          name='002-Manejo Clinico'
          component={T002}
          options={{ title: "Manejo Clínico" }} />

        <Stack.Screen
          name='003-Anamnese e Exame Fisico'
          component={T003}
          options={{ title: "Anamnese e Exame Físico" }} />

        <Stack.Screen
          name='003-Corrimento Vaginal ou Uretral'
          component={T004}
          options={{ title: "Corrimento Vaginal ou Uretral" }} />

        <Stack.Screen 
          name      = '004-Corrimento Vaginal ou Uretral'
          component = {T004}
          options   = {{ title: "Corrimento Vaginal ou Uretral" }}/>

        <Stack.Screen 
          name      = '005-Corrimento Vaginal'
          component = {T005}
          options   = {{ title: "Corrimento Vaginal" }}/>

        <Stack.Screen
          name='102-TiraDuvidas'
          component={T102}
          options={{ title: "Tira Dúvidas" }} />
          
        <Stack.Screen
          name='103-CandidiaseVulvovaginal'
          component={T103}
          options={{ title: "Candidíase Vulvovaginal" }} />
        
        <Stack.Screen
          name='104-VaginoseBacteriana'
          component={T104}
          options={{ title: "Vaginose Bacteriana" }} />
        
        <Stack.Screen
          name='105-Tricomoniase'
          component={T105}
          options={{ title: "Tricomoníase" }} />

        <Stack.Screen
          name='106-ClamidiaeGonorreia'
          component={T106}
          options={{ title: "Clamídia e Gonorreia" }} />

        <Stack.Screen
          name='107-LinfogranulamaVenereo'
          component={T107}
          options={{ title: "Linfogranulama Venéreo (LGV)" }} />

        <Stack.Screen
          name='108-Cancroide'
          component={T108}
          options={{ title: "Cancroide" }} />

        <Stack.Screen
          name='025-UlceraAnogenital'
          component={T025}
          options={{ title: "Úlcera Anogenital" }} />

        <Stack.Screen
          name='026-UlceraAnogenital'
          component={T026}
          options={{ title: "Úlcera Anogenital" }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;