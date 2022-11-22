import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import Titulo from './src/components/Titulo';

import { useTheme } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Mulish_400Regular as Mulish_Regular,
	Mulish_700Bold as Mulish_Bold
} from '@expo-google-fonts/mulish';

import { useColorScheme } from 'react-native';


// Telas
import T001 from './src/screens/001-Inicio';
import T002 from './src/screens/002-ManejoClinico';
import T003 from './src/screens/003-AnamneseEExameFisico';

import T004 from './src/screens/Corrimento Vaginal ou Uretral/004-CorrimentoVaginalOuUretral';
import T005 from './src/screens/Corrimento Vaginal ou Uretral/005-CorrimentoVaginal';
import T006 from './src/screens/Corrimento Vaginal ou Uretral/006-CorrimentoVaginal';
import T007 from './src/screens/Corrimento Vaginal ou Uretral/007-CorrimentoVaginal';
import T008 from './src/screens/Corrimento Vaginal ou Uretral/008-CorrimentoVaginal';
import T009 from './src/screens/Corrimento Vaginal ou Uretral/009-CorrimentoVaginal';
import T010 from './src/screens/Corrimento Vaginal ou Uretral/010-CorrimentoVaginal';
import T011 from './src/screens/Corrimento Vaginal ou Uretral/011-CorrimentoVaginal';
import T012 from './src/screens/Corrimento Vaginal ou Uretral/012-CorrimentoVaginal';
import T013 from './src/screens/Corrimento Vaginal ou Uretral/013-CorrimentoVaginal';
import T014 from './src/screens/Corrimento Vaginal ou Uretral/014-CorrimentoVaginal';
import T015 from './src/screens/Corrimento Vaginal ou Uretral/015-CorrimentoUretral';
import T016 from './src/screens/Corrimento Vaginal ou Uretral/016-CorrimentoUretral';
import T017 from './src/screens/Corrimento Vaginal ou Uretral/017-CorrimentoUretral';
import T018 from './src/screens/Corrimento Vaginal ou Uretral/018-CorrimentoUretral';
import T019 from './src/screens/Corrimento Vaginal ou Uretral/019-CorrimentoUretral';
import T023 from './src/screens/Corrimento Vaginal ou Uretral/023-CorrimentoVaginal';
import T024 from './src/screens/Corrimento Vaginal ou Uretral/024-CorrimentoUretral';


import T025 from './src/screens/Ulcera Anogenital/025-UlceraAnogenital';
import T026 from './src/screens/Ulcera Anogenital/026-UlceraAnogenital';
import T027 from './src/screens/Ulcera Anogenital/027-UlceraAnogenital';
import T028 from './src/screens/Ulcera Anogenital/028-UlceraAnogenital';
import T029 from './src/screens/Ulcera Anogenital/029-UlceraAnogenital';
import T030 from "./src/screens/Ulcera Anogenital/030-UlceraAnogenital";
import T031 from "./src/screens/Ulcera Anogenital/031-UlceraAnogenital";
import T032 from "./src/screens/Ulcera Anogenital/032-UlceraAnogenital";
import T033 from "./src/screens/Ulcera Anogenital/033-UlceraAnogenital";
import T034 from "./src/screens/Ulcera Anogenital/034-UlceraAnogenital";

import T039 from "./src/screens/VerrugaAnogenital/039-VerrugaAnogenital";
import T040 from "./src/screens/VerrugaAnogenital/040-VerrugaAnogenital";
import T041 from "./src/screens/VerrugaAnogenital/041-VerrugaAnogenital";
import T042 from "./src/screens/VerrugaAnogenital/042-VerrugaAnogenital";
import T043 from "./src/screens/VerrugaAnogenital/043-VerrugaAnogenital";
import T044 from "./src/screens/VerrugaAnogenital/044-VerrugaAnogenital";

import T045 from "./src/screens/Sifilis/045-Sifilis"
import T046 from "./src/screens/Sifilis/046-Sifilis"
import T047 from "./src/screens/Sifilis/047-Sifilis"
import T048 from "./src/screens/Sifilis/048-Sifilis"
import T049 from "./src/screens/Sifilis/049-Aconselhamento"
import T050 from "./src/screens/Sifilis/050-Sifilis"
import T051 from "./src/screens/Sifilis/051-Sifilis"
import T052 from "./src/screens/Sifilis/052-Sifilis"
import T200 from "./src/screens/Sifilis/200-Sifilis"
import T201 from "./src/screens/Sifilis/201-Sifilis"
import T202 from "./src/screens/Sifilis/202-Sifilis"
import T203 from "./src/screens/Sifilis/203-Sifilis"
import T204 from "./src/screens/Sifilis/204-Sifilis"

import T054 from "./src/screens/HIV/054-HIV";
import T055 from "./src/screens/HIV/055-HIV";
import T056 from "./src/screens/HIV/056-HIV";
import T057 from "./src/screens/HIV/057-HIV-PrEP";
import T058 from "./src/screens/HIV/058-HIV-PEP";
import T059 from "./src/screens/HIV/059-TesteNaoReagente";

import T060 from './src/screens/Hepatite B e C/060-HepatiteBeC';
import T061 from './src/screens/Hepatite B e C/061-HepatiteBeC';
import T062 from './src/screens/Hepatite B e C/062-HepatiteBeC';
import T301 from './src/screens/Hepatite B e C/301-HepatiteB';
import T302 from './src/screens/Hepatite B e C/302-HepatiteB';

import T063 from './src/screens/TestesRapidos/063-TestesRapidos';

import T064 from './src/screens/TestesRapidos/Sifilis/064-TesteRapidoSifilis';
import T065 from './src/screens/TestesRapidos/Sifilis/065-TesteRapidoSifilis';
import T066 from './src/screens/TestesRapidos/Sifilis/066-RetesteSifilis';
import T067 from './src/screens/TestesRapidos/Sifilis/067-RetesteSifilis';
import T068 from './src/screens/TestesRapidos/Sifilis/068-RetesteSifilis';
import T069 from './src/screens/TestesRapidos/Sifilis/069-TesteRapidoSifilis';
import T070 from './src/screens/TestesRapidos/Sifilis/070-RetesteSifilis';
import T071 from './src/screens/TestesRapidos/Sifilis/071-RetesteSifilis';

import T072 from './src/screens/TestesRapidos/072-Aconselhamento';
import T073 from './src/screens/TestesRapidos/073-Indisponivel';
import T074 from './src/screens/TestesRapidos/Sifilis/074-TesteNaoReagente';

import T076 from './src/screens/TestesRapidos/HIV/076-TesteRapidoHIV';
import T077 from './src/screens/TestesRapidos/HIV/077-TesteRapidoHIV';
import T078 from './src/screens/TestesRapidos/HIV/078-RetesteHIV';
import T079 from './src/screens/TestesRapidos/HIV/079-RetesteHIV';
import T080 from './src/screens/TestesRapidos/HIV/080-RetestesHIV';
import T081 from './src/screens/TestesRapidos/HIV/081-TesteRapidoHIV';
import T082 from './src/screens/TestesRapidos/HIV/082-RetesteHIV';
import T083 from './src/screens/TestesRapidos/HIV/083-RetesteHIV';

import T084 from './src/screens/TestesRapidos/HepatiteB/084-TesteRapidoHepatiteB';
import T085 from './src/screens/TestesRapidos/HepatiteB/085-RetesteHepatiteB';
import T086 from './src/screens/TestesRapidos/HepatiteB/086-RetesteHepatiteB';
import T087 from './src/screens/TestesRapidos/HepatiteB/087-RetesteHepatiteB';
import T088 from './src/screens/TestesRapidos/HepatiteB/088-RetesteHepatiteB';
import T089 from './src/screens/TestesRapidos/HepatiteB/089-RetesteHepatiteB';
import T090 from './src/screens/TestesRapidos/HepatiteB/090-RetesteHepatiteB';
import T091 from './src/screens/TestesRapidos/HepatiteB/091-RetesteHepatiteB';

import T092 from './src/screens/TestesRapidos/HepatiteC/092-TesteRapidoHepatiteC';
import T093 from './src/screens/TestesRapidos/HepatiteC/093-RetesteHepatiteC';
import T094 from './src/screens/TestesRapidos/HepatiteC/094-RetesteHepatiteC';
import T095 from './src/screens/TestesRapidos/HepatiteC/095-RetesteHepatiteC';
import T096 from './src/screens/TestesRapidos/HepatiteC/096-RetesteHepatiteC';
import T097 from './src/screens/TestesRapidos/HepatiteC/097-RetesteHepatiteC';
import T098 from './src/screens/TestesRapidos/HepatiteC/098-RetesteHepatiteC';
import T099 from './src/screens/TestesRapidos/HepatiteC/099-RetesteHepatiteC';
import T100 from './src/screens/TestesRapidos/100-InterpretacaodeResultados';
import T101 from './src/screens/TestesRapidos/101-RecusouTeste';

import T102 from './src/screens/TiraDuvidas/102-TiraDuvidas';
import T102_1 from './src/screens/TiraDuvidas/102_1-CorrimentoVaginalOuUteral';
import T102_2 from './src/screens/TiraDuvidas/102_2-UlceraAnogenital';
import T103 from './src/screens/TiraDuvidas/103-CandidiaseVulvovaginal';
import T104 from './src/screens/TiraDuvidas/104-VaginoseBacteriana';
import T105 from './src/screens/TiraDuvidas/105-Tricomoniase';
import T106 from './src/screens/TiraDuvidas/106-ClamidiaeGonorreia';
import T107 from './src/screens/TiraDuvidas/107-LinfogranulamaVenereo';
import T108 from './src/screens/TiraDuvidas/108-Cancroide';
import T109 from './src/screens/TiraDuvidas/109-HerpesGenital';
import T110 from './src/screens/TiraDuvidas/110-Donovanose';
import T111 from './src/screens/TiraDuvidas/111-CondilomaAcuminado';
import T112 from './src/screens/TiraDuvidas/112-Sifilis';
import T113 from './src/screens/TiraDuvidas/113-HIV';
import T114 from './src/screens/TiraDuvidas/114-HepatiteBeC';
import T115 from './src/screens/TiraDuvidas/115-Preservativos';
import T116 from './src/screens/TiraDuvidas/116-EntendendoViolenciaSexual';
import T117 from './src/screens/TiraDuvidas/117-ProfilaxiadasIST';
import T118 from './src/screens/TiraDuvidas/118-ProfilaxiadasIST';
import T119 from './src/screens/TiraDuvidas/119-ProfilaxiadasHepatiteB';
import T120 from './src/screens/TiraDuvidas/120-ProfilaxiadainfeccaoporHIV';
import T121 from './src/screens/TiraDuvidas/121-PrevencaodaGravidez';
import T122 from './src/screens/TiraDuvidas/122-NotificandoaViolenciaSexual';
import T127 from './src/screens/TiraDuvidas/127-PepProfissional'
import T128 from './src/screens/TiraDuvidas/128-CuidadosLocais'
import T129 from './src/screens/TiraDuvidas/129-Acolhimento'
import T130 from './src/screens/TiraDuvidas/130-Testagem'
import T131 from './src/screens/TiraDuvidas/131-CondutaAposTestagem'
import T132 from './src/screens/TiraDuvidas/132-IndicacaoProfilaxia'
import T133 from './src/screens/TiraDuvidas/133-IndicacaoPEP'
import T134 from './src/screens/TiraDuvidas/134-IndicacaoPepB'

import T123 from './src/screens/Sobre/123-Sobre';
import T124 from './src/screens/Sobre/124-Idealizadores';
import T125 from './src/screens/Sobre/125-Desenvolvedores';
import T126 from './src/screens/Sobre/126-Referencias';




// Temas
const darkTheme = {
	dark: true,
	colors: {
		primary: 'white',
		background: '#121212',
		card: 'rgb(255, 255, 255)',
		text: 'rgb(255, 255, 255)',
		border: 'rgb(199, 199, 204)',
		notification: 'cyan',
	}
}
const lightTheme = {
	dark: false,
	colors: {
		primary: 'gray',
		background: 'rgb(255, 255, 255)',
		card: 'rgb(255, 255, 255)',
		text: '#00172E',
		border: 'rgb(199, 199, 204)',
		notification: 'blue',
	}
}



const Stack = createNativeStackNavigator();

export default function App() {

	const scheme = useColorScheme();
	const { colors } = useTheme();

	// Carregamento das fontes
	let [fontsLoaded] = useFonts({ Mulish_Regular, Mulish_Bold });
	if (!fontsLoaded) { return <AppLoading />; }
	return (
		<NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>

			<View style={{
				flex: 1,
				backgroundColor: scheme === 'dark' ? darkTheme.colors.background : lightTheme.colors.background
			}
			}>

				<Stack.Navigator initialRouteName='001-Inicio'
					screenOptions={{
						headerTitle: (props) => <Titulo {...props} />,
						headerBackVisible: "no",
						headerStyle: {
							backgroundColor: scheme === 'dark' ? darkTheme.colors.background : lightTheme.colors.background
						}
					}}
				>
					<Stack.Screen
						name='001-Inicio'
						component={T001}
						options={{
							title: "Início",
							headerShown: false
						}}
					/>

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
						name='009-Corrimento Vaginal'
						component={T009}
						options={{ title: "Corrimento Vaginal" }} />

					<Stack.Screen
						name='010-Corrimento Vaginal'
						component={T010}
						options={{ title: "Corrimento Vaginal" }} />

					<Stack.Screen
						name='011-Corrimento Vaginal'
						component={T011}
						options={{ title: "Corrimento Vaginal" }} />

					<Stack.Screen
						name='012-Corrimento Vaginal'
						component={T012}
						options={{ title: "Corrimento Vaginal" }} />

					<Stack.Screen
						name='013-Corrimento Vaginal'
						component={T013}
						options={{ title: "Corrimento Vaginal" }} />

					<Stack.Screen
						name='014-Corrimento Vaginal'
						component={T014}
						options={{ title: "Corrimento Vaginal" }} />

					<Stack.Screen
						name='015-Corrimento Uretral'
						component={T015}
						options={{ title: "Corrimento Uretral" }} />

					<Stack.Screen
						name='016-Corrimento Uretral'
						component={T016}
						options={{ title: "Corrimento Uretral" }} />

					<Stack.Screen
						name='017-Corrimento Uretral'
						component={T017}
						options={{ title: "Corrimento Uretral" }} />

					<Stack.Screen
						name='018-Corrimento Uretral'
						component={T018}
						options={{ title: "Corrimento Uretral" }} />

					<Stack.Screen
						name='019-Corrimento Uretral'
						component={T019}
						options={{ title: "Corrimento Uretral" }} />

					<Stack.Screen
						name='023-Corrimento Vaginal'
						component={T023}
						options={{ title: "Corrimento Vaginal" }} />

					<Stack.Screen
						name='024-Corrimento Uretral'
						component={T024}
						options={{ title: "Corrimento Vaginal" }} />

					<Stack.Screen
						name='039-VerrugaAnogenital'
						component={T039}
						options={{ title: "Verruga Anogenital" }} />

					<Stack.Screen
						name='040-VerrugaAnogenital'
						component={T040}
						options={{ title: "Verruga Anogenital" }} />

					<Stack.Screen
						name='041-VerrugaAnogenital'
						component={T041}
						options={{ title: "Verruga Anogenital" }} />

					<Stack.Screen
						name='042-VerrugaAnogenital'
						component={T042}
						options={{ title: "Verruga Anogenital" }} />

					<Stack.Screen
						name='043-VerrugaAnogenital'
						component={T043}
						options={{ title: "Verruga Anogenital" }} />

					<Stack.Screen
						name='044-VerrugaAnogenital'
						component={T044}
						options={{ title: "Verruga Anogenital" }} />

					<Stack.Screen
						name='045-Sifilis'
						component={T045}
						options={{ title: "Sífilis" }} />

					<Stack.Screen
						name='046-Sifilis'
						component={T046}
						options={{ title: "Sífilis" }} />

					<Stack.Screen
						name='047-Sifilis'
						component={T047}
						options={{ title: "Sífilis" }} />

					<Stack.Screen
						name='048-Sifilis'
						component={T048}
						options={{ title: "Sífilis" }} />

					<Stack.Screen
						name='049-Aconselhamento'
						component={T049}
						options={{ title: "Aconselhamento" }} />

					<Stack.Screen
						name='050-Sifilis'
						component={T050}
						options={{ title: "Sifilis" }} />

					<Stack.Screen
						name='051-Sifilis'
						component={T051}
						options={{ title: "Sifilis" }} />

					<Stack.Screen
						name='052-Sifilis'
						component={T052}
						options={{ title: "Sifilis" }} />

					<Stack.Screen
						name='200-Sifilis'
						component={T200}
						options={{ title: "Sifilis" }} />

					<Stack.Screen
						name='201-Sifilis'
						component={T201}
						options={{ title: "Sifilis" }} />

					<Stack.Screen
						name='202-Sifilis'
						component={T202}
						options={{ title: "Sifilis" }} />

					<Stack.Screen
						name='203-Sifilis'
						component={T203}
						options={{ title: "Sifilis" }} />

					<Stack.Screen
						name='204-Sifilis'
						component={T204}
						options={{ title: "Sifilis" }} />

					<Stack.Screen
						name='060-HepatiteBeC'
						component={T060}
						options={{ title: "Hepatite B e C" }} />

					<Stack.Screen
						name='061-HepatiteBeC'
						component={T061}
						options={{ title: "Hepatite B e C" }} />

					<Stack.Screen
						name='062-HepatiteBeC'
						component={T062}
						options={{ title: "Hepatite B e C" }} />

					<Stack.Screen
						name='063-TestesRapidos'
						component={T063}
						options={{ title: "Testes Rápidos" }} />

					<Stack.Screen
						name='064-TesteRapidoSifilis'
						component={T064}
						options={{ title: "Teste Rápido Sífilis" }} />

					<Stack.Screen
						name='065-TesteRapidoSifilis'
						component={T065}
						options={{ title: "Teste Rápido Sífilis" }} />

					<Stack.Screen
						name='066-RetesteSifilis'
						component={T066}
						options={{ title: "Reteste Sífilis" }} />

					<Stack.Screen
						name='067-RetesteSifilis'
						component={T067}
						options={{ title: "Reteste Sífilis" }} />

					<Stack.Screen
						name='068-RetesteSifilis'
						component={T068}
						options={{ title: "Reteste Sífilis" }} />

					<Stack.Screen
						name='069-TesteRapidoSifilis'
						component={T069}
						options={{ title: "Teste Rápido Sífilis" }} />

					<Stack.Screen
						name='070-RetesteSifilis'
						component={T070}
						options={{ title: "Reteste Sífilis" }} />

					<Stack.Screen
						name='071-RetesteSifilis'
						component={T071}
						options={{ title: "Reteste Sífilis" }} />

					<Stack.Screen
						name='072-Aconselhamento'
						component={T072}
						options={{ title: "Aconselhamento" }} />

					<Stack.Screen
						name='073-Indisponivel'
						component={T073}
						options={{ title: "Indisponível" }} />

					<Stack.Screen
						name='074-TesteNaoReagente'
						component={T074}
						options={{ title: "Teste Não Reagente" }} />

					<Stack.Screen
						name='076-TesteRapidoHIV'
						component={T076}
						options={{ title: "Teste Rápido HIV" }} />

					<Stack.Screen
						name='077-TesteRapidoHIV'
						component={T077}
						options={{ title: "Teste Rápido HIV" }} />

					<Stack.Screen
						name='078-RetesteHIV'
						component={T078}
						options={{ title: "Reteste HIV" }} />

					<Stack.Screen
						name='079-RetesteHIV'
						component={T079}
						options={{ title: "Reteste HIV" }} />

					<Stack.Screen
						name='080-RetestesHIV'
						component={T080}
						options={{ title: "Reteste HIV" }} />

					<Stack.Screen
						name='081-TesteRapidoHIV'
						component={T081}
						options={{ title: "Teste Rápido HIV" }} />

					<Stack.Screen
						name='082-RetesteHIV'
						component={T082}
						options={{ title: "Reteste HIV" }} />

					<Stack.Screen
						name='083-RetesteHIV'
						component={T083}
						options={{ title: "Reteste HIV" }} />


					<Stack.Screen
						name='084-TesteRapidoHepatiteB'
						component={T084}
						options={{ title: "Teste Rápido Hepatite B" }} />

					<Stack.Screen
						name='085-RetesteHepatiteB'
						component={T085}
						options={{ title: "Teste Rápido Hepatite B" }} />

					<Stack.Screen
						name='086-RetesteHepatiteB'
						component={T086}
						options={{ title: "Reteste Hepatite B" }} />

					<Stack.Screen
						name='087-RetesteHepatiteB'
						component={T087}
						options={{ title: "Reteste Hepatite B" }} />

					<Stack.Screen
						name='088-RetesteHepatiteB'
						component={T088}
						options={{ title: "Reteste Hepatite B" }} />

					<Stack.Screen
						name='089-RetesteHepatiteB'
						component={T089}
						options={{ title: "Reteste Hepatite B" }} />

					<Stack.Screen
						name='090-RetesteHepatiteB'
						component={T090}
						options={{ title: "Reteste Hepatite B" }} />

					<Stack.Screen
						name='091-RetesteHepatiteB'
						component={T091}
						options={{ title: "Reteste Hepatite B" }} />

					<Stack.Screen
						name='092-TesteRapidoHepatiteC'
						component={T092}
						options={{ title: "Teste Rápido Hepatite C" }} />

					<Stack.Screen
						name='093-RetesteHepatiteC'
						component={T093}
						options={{ title: "Reteste Hepatite C" }} />

					<Stack.Screen
						name='094-RetesteHepatiteC'
						component={T094}
						options={{ title: "Reteste Hepatite C" }} />

					<Stack.Screen
						name='095-RetesteHepatiteC'
						component={T095}
						options={{ title: "Reteste Hepatite C" }} />

					<Stack.Screen
						name='096-RetesteHepatiteC'
						component={T096}
						options={{ title: "Reteste Hepatite C" }} />

					<Stack.Screen
						name='097-RetesteHepatiteC'
						component={T097}
						options={{ title: "Reteste Hepatite C" }} />

					<Stack.Screen
						name='098-RetesteHepatiteC'
						component={T098}
						options={{ title: "Reteste Hepatite C" }} />

					<Stack.Screen
						name='099-RetesteHepatiteC'
						component={T099}
						options={{ title: "Reteste Hepatite C" }} />

					<Stack.Screen
						name='100-InterpretacaodeResultados'
						component={T100}
						options={{ title: "Interpretação de Resultados" }} />

					<Stack.Screen
						name='101-RecusouTeste'
						component={T101}
						options={{ title: "Recusou fazer o teste" }} />

					<Stack.Screen
						name='102-TiraDuvidas'
						component={T102}
						options={{ title: "Tira Dúvidas" }} />

					<Stack.Screen
						name='102_1-CorrimentoVaginalOuUteral'
						component={T102_1}
						options={{ title: "Corrimento Vaginal ou Uteral" }} />
					
					<Stack.Screen
						name='102_2-UlceraAnogenital'
						component={T102_2}
						options={{ title: "Úlcera Anogenital" }} />

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
						options={{ title: "Úlcera Anogenital" }} />

					<Stack.Screen
						name='031-UlceraAnogenital'
						component={T031}
						options={{ title: "Úlcera Anogenital" }} />

					<Stack.Screen
						name='032-UlceraAnogenital'
						component={T032}
						options={{ title: "Úlcera Anogenital" }} />

					<Stack.Screen
						name='033-UlceraAnogenital'
						component={T033}
						options={{ title: "Úlcera Anogenital" }} />

					<Stack.Screen
						name='034-UlceraAnogenital'
						component={T034}
						options={{ title: "Úlcera Anogenital" }} />

					<Stack.Screen
						name='123-Sobre'
						component={T123}
						options={{ title: "Sobre" }} />

					<Stack.Screen
						name='124-Idealizadores'
						component={T124}
						options={{ title: "Idealizadores" }} />

					<Stack.Screen
						name='125-Desenvolvedores'
						component={T125}
						options={{ title: "Desenvolvedores" }} />

					<Stack.Screen
						name='126-Referencias'
						component={T126}
						options={{ title: "Referências" }} />

					<Stack.Screen
						name='054-HIV'
						component={T054}
						options={{ title: "HIV" }} />

					<Stack.Screen
						name='055-HIV'
						component={T055}
						options={{ title: "HIV" }} />

					<Stack.Screen
						name='056-HIV'
						component={T056}
						options={{ title: "HIV" }} />

					<Stack.Screen
						name='057-HIV-PrEP'
						component={T057}
						options={{ title: "HIV - PreP" }} />

					<Stack.Screen
						name='058-HIV-PEP'
						component={T058}
						options={{ title: "HIV - PEP" }} />
					
					<Stack.Screen
						name='059-TesteNaoReagente'
						component={T059}
						options={{ title: "HIV" }} />
					<Stack.Screen
						name='127-PepProfissional'
						component={T127}
						options={{ title: "PEP PROFISSIONAL" }} />
					<Stack.Screen
						name='128-CuidadosLocais'
						component={T128}
						options={{ title: "Cuidados Locais" }} />
					<Stack.Screen
						name='129-Acolhimento'
						component={T129}
						options={{ title: "Acolhimento" }} />
					<Stack.Screen
						name='130-Testagem'
						component={T130}
						options={{ title: "Testeagem" }} />
					<Stack.Screen
						name='131-CondutaAposTestagem'
						component={T131}
						options={{ title: "Conduta Apos Testagem" }} />
					<Stack.Screen
						name='132-IndicacaoProfilaxia'
						component={T132}
						options={{ title: "Indicação Proxilaxia" }} />
					<Stack.Screen
						name='133-IndicacaoPEP'
						component={T133}
						options={{ title: "Indicação PEP" }} />
					<Stack.Screen
						name='134-IndicacaoPepB'
						component={T134}
						options={{ title: "Indicação PEP" }} />
					<Stack.Screen
						name='301-HepatiteB'
						component={T301}
						options={{ title: "Hepatite B" }} />
					<Stack.Screen
						name='302-HepatiteB'
						component={T302}
						options={{ title: "Hepatite B" }} />


				</Stack.Navigator>
			</View>
			<StatusBar style="auto" />
		</NavigationContainer>

	);
}

