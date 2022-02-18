import React from 'react';
import type Node from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Telas
import T001          from '@screens/001-Inicio';
import T002          from '@screens/002-ManejoClinico';
import T003          from '@screens/003-AnamneseEExameFisico';
import T004          from '@screens/004-CorrimentoVaginalOuUretral';
import T005          from '@screens/005-CorrimentoVaginal';
import T006          from '@screens/006-CorrimentoVaginal';
import T007          from '@screens/007-CorrimentoVaginal';
import T008          from '@screens/008-CorrimentoVaginal';
import T009          from '@screens/009-CorrimentoVaginal';
import T010          from '@screens/010-CorrimentoVaginal';
import T011          from '@screens/011-CorrimentoVaginal';
import T012          from '@screens/012-CorrimentoVaginal';
import T013          from '@screens/013-CorrimentoVaginal';
import T102          from '@screens/102-TiraDuvidas';
import T103          from '@screens/103-CandidiaseVulvovaginal';
import T104          from '@screens/104-VaginoseBacteriana';
import T105          from '@screens/105-Tricomoniase';
import T106          from '@screens/106-ClamidiaeGonorreia';
import T107          from '@screens/107-LinfogranulamaVenereo';
import T108          from '@screens/108-Cancroide';
import T109          from '@screens/109-HerpesGenital';
import T110          from '@screens/110-Donovanose';
import T111          from '@screens/111-CondilomaAcuminado';
import T112          from '@screens/112-Sifilis';
import T025          from '@screens/025-UlceraAnogenital';
import T026          from '@screens/026-UlceraAnogenital';
import T027          from '@screens/027-UlceraAnogenital'


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
          name='004-Corrimento Vaginal ou Uretral'
          component={T004}
          options={{ title: "Corrimento Vaginal ou Uretral" }} />

        <Stack.Screen
          name='005-Corrimento Vaginal'
          component={T005}
          options={{ title: "Corrimento Vaginal" }} />

        <Stack.Screen
          name='006-Corrimento Vaginal'
          component={T006}
          options={{ title: "Corrimento Vaginal" }} />

        <Stack.Screen
          name='007-Corrimento Vaginal'
          component={T007}
          options={{ title: "Corrimento Vaginal" }} />

        <Stack.Screen
          name='008-Corrimento Vaginal'
          component={T008}
          options={{ title: "Corrimento Vaginal" }} />

        <Stack.Screen 
          name      = '009-Corrimento Vaginal'
          component = {T009}
          options   = {{ title: "Corrimento Vaginal" }}/>

        <Stack.Screen 
          name      = '010-Corrimento Vaginal'
          component = {T010}
          options   = {{ title: "Corrimento Vaginal" }}/>

        <Stack.Screen 
          name      = '011-Corrimento Vaginal'
          component = {T011}
          options   = {{ title: "Corrimento Vaginal" }}/>

        <Stack.Screen 
          name      = '012-Corrimento Vaginal'
          component = {T012}
          options   = {{ title: "Corrimento Vaginal" }}/>

        <Stack.Screen 
          name      = '013-Corrimento Vaginal'
          component = {T013}
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
          name='109-HerpesGenital'
          component={T109}
          options={{ title: "Herpes Genital" }} />

        <Stack.Screen
          name='110-Donovanose'
          component={T110}
          options={{ title: "Donovanose" }} />

        <Stack.Screen
          name='111-CondilomaAcuminado'
          component={T111}
          options={{ title: "Condiloma Acuminado" }} />

        <Stack.Screen
          name='112-Sifilis'
          component={T112}
          options={{ title: "Sífilis" }} />

        <Stack.Screen
          name='025-UlceraAnogenital'
          component={T025}
          options={{ title: "Úlcera Anogenital" }} />

        <Stack.Screen
          name='026-UlceraAnogenital'
          component={T026}
          options={{ title: "Úlcera Anogenital" }} />

        <Stack.Screen
          name='027-UlceraAnogenital'
          component={T027}
          options={{ title: "Úlcera Anogenital" }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

