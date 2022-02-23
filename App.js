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
import T014          from '@screens/014-CorrimentoVaginal';
import T015          from '@screens/015-CorrimentoUretral';
import T016          from '@screens/016-CorrimentoUretral';
import T017          from '@screens/017-CorrimentoUretral';
import T023          from '@screens/023-CorrimentoVaginal';


import T063          from '@screens/TestesRapidos/063-TestesRapidos';

import T064          from '@screens/TestesRapidos/Sifilis/064-TesteRapidoSifilis';
import T065          from '@screens/TestesRapidos/Sifilis/065-TesteRapidoSifilis';
import T066          from '@screens/TestesRapidos/Sifilis/066-RetesteSifilis';
import T067          from '@screens/TestesRapidos/Sifilis/067-RetesteSifilis';
import T068          from '@screens/TestesRapidos/Sifilis/068-RetesteSifilis';
import T069          from '@screens/TestesRapidos/Sifilis/069-TesteRapidoSifilis';
import T070          from '@screens/TestesRapidos/Sifilis/070-RetesteSifilis';
import T071          from '@screens/TestesRapidos/Sifilis/071-RetesteSifilis';

import T072          from '@screens/TestesRapidos/072-Aconselhamento';
import T073          from '@screens/TestesRapidos/073-Indisponivel';
import T074          from '@screens/TestesRapidos/074-TesteNaoReagente';

import T084          from '@screens/TestesRapidos/HepatiteB/084-TesteRapidoHepatiteB';
import T085          from '@screens/TestesRapidos/HepatiteB/085-RetesteHepatiteB';

import T102          from '@screens/TiraDuvidas/102-TiraDuvidas';
import T103          from '@screens/TiraDuvidas/103-CandidiaseVulvovaginal';
import T104          from '@screens/TiraDuvidas/104-VaginoseBacteriana';
import T105          from '@screens/TiraDuvidas/105-Tricomoniase';
import T106          from '@screens/TiraDuvidas/106-ClamidiaeGonorreia';
import T107          from '@screens/TiraDuvidas/107-LinfogranulamaVenereo';
import T108          from '@screens/TiraDuvidas/108-Cancroide';
import T109          from '@screens/TiraDuvidas/109-HerpesGenital';
import T110          from '@screens/TiraDuvidas/110-Donovanose';
import T111          from '@screens/TiraDuvidas/111-CondilomaAcuminado';
import T112          from '@screens/TiraDuvidas/112-Sifilis';
import T113          from '@screens/TiraDuvidas/113-HIV';
import T114          from '@screens/TiraDuvidas/114-HepatiteBeC';
import T115          from '@screens/TiraDuvidas/115-Preservativos';
import T116          from '@screens/TiraDuvidas/116-EntendendoViolenciaSexual';
import T117          from '@screens/TiraDuvidas/117-ProfilaxiadasIST';
import T118          from '@screens/TiraDuvidas/118-ProfilaxiadasIST';
import T119          from '@screens/TiraDuvidas/119-ProfilaxiadasHepatiteB';
import T120          from '@screens/TiraDuvidas/120-ProfilaxiadainfecçãoporHIV';
import T121          from '@screens/TiraDuvidas/121-PrevencaodaGravidez';
import T122          from '@screens/TiraDuvidas/122-NotificandoaViolenciaSexual';

import T025          from '@screens/025-UlceraAnogenital';
import T026          from '@screens/026-UlceraAnogenital';
import T027          from '@screens/027-UlceraAnogenital';
import T028          from '@screens/028-UlceraAnogenital';
import T029          from '@screens/029-UlceraAnogenital';
import T030          from "@screens/030-UlceraAnogenital";
import T031          from "@screens/031-UlceraAnogenital";
import T032          from "@screens/032-UlceraAnogenital";


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
          name      = '014-Corrimento Vaginal'
          component = {T014}
          options   = {{ title: "Corrimento Vaginal" }}/>

        <Stack.Screen 
          name      = '015-Corrimento Uretral'
          component = {T015}
          options   = {{ title: "Corrimento Uretral" }}/>

        <Stack.Screen 
          name      = '016-Corrimento Uretral'
          component = {T016}
          options   = {{ title: "Corrimento Uretral" }}/>

        <Stack.Screen 
          name      = '017-Corrimento Uretral'
          component = {T017}
          options   = {{ title: "Corrimento Uretral" }}/>

        <Stack.Screen 
          name      = '023-Corrimento Vaginal'
          component = {T023}
          options   = {{ title: "Corrimento Vaginal" }}/>

        <Stack.Screen 
          name      = '063-TestesRapidos'
          component = {T063}
          options   = {{ title: "Testes Rápidos" }}/>
        
        <Stack.Screen 
          name      = '064-TesteRapidoSifilis'
          component = {T064}
          options   = {{ title: "Teste Rápido Sífilis" }}/>

        <Stack.Screen 
          name      = '065-TesteRapidoSifilis'
          component = {T065}
          options   = {{ title: "Teste Rápido Sífilis" }}/>

        <Stack.Screen 
          name      = '066-RetesteSifilis'
          component = {T066}
          options   = {{ title: "Reteste Sífilis" }}/>

        <Stack.Screen 
          name      = '067-RetesteSifilis'
          component = {T067}
          options   = {{ title: "Reteste Sífilis" }}/>

        <Stack.Screen 
          name      = '068-RetesteSifilis'
          component = {T068}
          options   = {{ title: "Reteste Sífilis" }}/>

        <Stack.Screen 
          name      = '069-TesteRapidoSifilis'
          component = {T069}
          options   = {{ title: "Teste Rápido Sífilis" }}/>

        <Stack.Screen 
          name      = '070-RetesteSifilis'
          component = {T070}
          options   = {{ title: "Reteste Sífilis" }}/>
        
        <Stack.Screen 
          name      = '071-RetesteSifilis'
          component = {T071}
          options   = {{ title: "Reteste Sífilis" }}/>

        <Stack.Screen 
          name      = '072-Aconselhamento'
          component = {T072}
          options   = {{ title: "Aconselhamento" }}/>

        <Stack.Screen 
          name      = '073-Indisponivel'
          component = {T073}
          options   = {{ title: "Indisponível" }}/>

        <Stack.Screen 
          name      = '074-TesteNaoReagente'
          component = {T074}
          options   = {{ title: "Teste Não Reagente" }}/>
        
        <Stack.Screen 
          name = '084-TesteRapidoHepatiteB'
          component = {T084}
          options = {{ title: "Teste Rápido Hepatite B"}} />

        <Stack.Screen 
          name = '085-RetesteHepatiteB'
          component = {T085}
          options = {{ title: "Teste Rápido Hepatite B"}} />

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
          name='113-HIV'
          component={T113}
          options={{ title: "HIV" }} />

        <Stack.Screen
          name='114-HepatiteBeC'
          component={T114}
          options={{ title: "Hepatite B e C" }} />
        
        <Stack.Screen
          name='115-Preservativos'
          component={T115}
          options={{ title: "Preservativos" }} />

        <Stack.Screen
          name='116-EntendendoViolenciaSexual'
          component={T116}
          options={{ title: "Entendendo Violência Sexual" }} />
        
        <Stack.Screen
          name='117-ProfilaxiadasIST'
          component={T117}
          options={{ title: "Profilaxia das IST" }} />
        
        <Stack.Screen
          name='118-ProfilaxiadasIST'
          component={T118}
          options={{ title: "Profilaxia das IST em situação de Violência Sexual" }} />

        <Stack.Screen
          name='119-ProfilaxiadasHepatiteB'
          component={T119}
          options={{ title: "Profilaxia da Hepatite B" }} />

        <Stack.Screen
          name='120-ProfilaxiadainfecçãoporHIV'
          component={T120}
          options={{ title: "Profilaxia da infecção por HIV" }} />
         
        <Stack.Screen
          name='121-PrevencaodaGravidez'
          component={T121}
          options={{ title: "Prevenção da Gravidez" }} />

        <Stack.Screen
          name='122-NotificandoaViolenciaSexual'
          component={T122}
          options={{ title: "Notificando a Violência Sexual" }} />

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

        <Stack.Screen
          name='028-UlceraAnogenital'
          component={T028}
          options={{ title: "Úlcera Anogenital" }} />
        
        <Stack.Screen
          name='029-UlceraAnogenital'
          component={T029}
          options={{ title: "Úlcera Anogenital" }} />
        
        <Stack.Screen
          name='030-UlceraAnogenital'
          component={T030}
          options={{ title: "Ulcera Anogenital" }} />
        
        <Stack.Screen
          name='031-UlceraAnogenital'
          component={T031}
          options={{ title: "Ulcera Anogenital" }} />
        
        <Stack.Screen
          name='032-UlceraAnogenital'
          component={T032}
          options={{ title: "Ulcera Anogenital" }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

