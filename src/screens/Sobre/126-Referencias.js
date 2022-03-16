import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    Linking
} from 'react-native';

import Tabela from "@components/Tabela";
import Botao from '@components/Botao';
import Imagem from '@components/Imagem';
import Bold from '@components/Bold';

import { useTheme } from '@react-navigation/native';
import { TouchableRipple } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';

export default function T126({ navigation })  {

    // Atualiza as cores se o modo noturno estiver ligado
    const { colors } = useTheme();

	// Configuração de texto para as próximas telas
	Text.defaultProps       = Text.defaultProps || {}
	Text.defaultProps.style =  { 
  		color             : colors.text,
  		fontFamily        : 'Mulish_Regular',
  		fontSize          : 15,
  		marginHorizontal  : 20,
  		textAlign         : 'center',
  		lineHeight        : 35
	}

    return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>

                    <View>
                        <Text>Aperte em qualquer referência para ir para seu devido site</Text>
                        <Tabela tableData={tableData}/>
                    </View>
                </ScrollView>

                <View style = {styles.containerBotao}>
                    <Botao
                        title = "FINALIZAR"
                        onPress = { () => navigation.popToTop() }/>
                </View>
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex            : 1,
        alignItems      : 'center',
        justifyContent  : 'center',
        flexDirection   : 'column',
        justifyContent  : 'space-between',
        paddingTop      : 10
    },
    containerBotao: {
        marginTop       : 30,
        width           : '100%'
    },
    hiperlink: {
        color: "blue",
        fontFamily        : 'Mulish_Regular',
        fontSize          : 20,
        marginHorizontal  : 20,
        textAlign         : 'center',
        lineHeight        : 35
    }
});

const tableData = [
    [<Text onPress={() => {Linking.openURL('http://conitec.gov.br/images/Relatorios/2021/20210422_Relatorio_PCDT_IST_SECRETARIO_588_2021.pdf')}}>
        BRASIL. Ministério da Saúde (2021). Relatório de Recomendação - Protocolo Clínico e Diretrizes Terapêuticas: Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (IST). Brasília - DF, 2021. Disponível em: http://conitec.gov.br/images/Relatorios/2021/20210422_Relatorio_PCDT_IST_SECRETARIO_588_2021.pdf. 184 p.
    </Text>],
    [<Text onPress={() => {Linking.openURL('http://www.aids.gov.br/pt-br/pcdt-hepatites')}}>
        BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de DST, Aids e Hepatites Virais.
        Protocolo Clínico e Diretrizes Terapêuticas para Hepatite B e Coinfecções / Ministério da Saúde, Secretaria de Vigilância em Saúde, Departamento de DST, Aids e Hepatites Virais. – Brasília : Ministério da Saúde, 2017. 120 p. Disponível em: http://www.aids.gov.br/pt-br/pcdt-hepatites.
    </Text>],
    [<Text onPress={() => {Linking.openURL('http://www.aids.gov.br/system/tdf/pub/2016/64644/pcdt_hepatite_c_06_2019_isbn.pdf?file=1&type=node&id=64644&force=1')}}>
        BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância, Prevenção e Controle das Infecções Sexualmente Transmissíveis, do HIV/Aids e das Hepatites Virais.
        Protocolo Clínico e Diretrizes Terapêuticas para Hepatite C e Coinfecções / Ministério da Saúde, Secretaria de Vigilância em Saúde, Departamento de Vigilância, Prevenção e Controle das Infecções Sexualmente Transmissíveis, do HIV/Aids e das Hepatites Virais. – Brasília : Ministério da Saúde, 2019. 68 p. Disponível em: http://www.aids.gov.br/system/tdf/pub/2016/64644/pcdt_hepatite_c_06_2019_isbn.pdf?file=1&type=node&id=64644&force=1.
    </Text>],
    [<Text onPress={() => {Linking.openURL('http://www.aids.gov.br/system/tdf/pub/2016/64510/miolo_pcdt_prep_11_2018_web.pdf?file=1&type=node&id=64510&force=1')}}>
        BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância, Prevenção e Controle das Infecções Sexualmente Transmissíveis, do HIV/Aids e das Hepatites Virais.
        Protocolo Clínico e Diretrizes Terapêuticas para Profilaxia Pré-Exposição (PrEP) de Risco à Infecção pelo HIV / Ministério da Saúde, Secretaria de Vigilância em Saúde, Departamento de Vigilância, Prevenção e Controle das Infecções Sexualmente Transmissíveis, do HIV/Aids e das Hepatites Virais. – Brasília : Ministério da Saúde, 2018. 52 p. Disponível em: http://www.aids.gov.br/system/tdf/pub/2016/64510/miolo_pcdt_prep_11_2018_web.pdf?file=1&type=node&id=64510&force=1.
    </Text>],
    [<Text onPress={() => {Linking.openURL('http://www.aids.gov.br/system/tdf/pub/2016/68105/miolo_pcdt_pep_09_2021.pdf?file=1&type=node&id=68105&force=1')}}>
        BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de DST, Aids e Hepatites Virais.
        Protocolo Clínico e Diretrizes Terapêuticas para Profi laxia Pós-Exposição (PEP) de Risco à Infecção pelo HIV, IST e Hepatites Virais. – Brasília : Ministério da Saúde, 2021. 102p. Disponível em: http://www.aids.gov.br/system/tdf/pub/2016/68105/miolo_pcdt_pep_09_2021.pdf?file=1&type=node&id=68105&force=1.
    </Text>],
    [<Text onPress={() => {Linking.openURL('https://bvsms.saude.gov.br/bvs/publicacoes/cuidado_integral_hiv_manual_multiprofissional.pdf')}}>
        BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância, Prevenção e Controledas Infecções Sexualmente Transmissíveis, do HIV/Aids e das Hepatites Virais. Cuidado integral às pessoas que vivem com HIV pela Atenção Básica : manual para a equipe multiprofissional / Ministério da Saúde, Secretaria de Vigilância em Saúde, Departamento de Vigilância, Prevenção e Controle das Infecções Sexualmente Transmissíveis, do HIV/Aids e das Hepatites Virais. – Brasília : Ministério da Saúde, 2017. 56 p. Disponível em: https://bvsms.saude.gov.br/bvs/publicacoes/cuidado_integral_hiv_manual_multiprofissional.pdf.
    </Text>],
    [<Text onPress={() => {Linking.openURL('https://bvsms.saude.gov.br/bvs/publicacoes/cuidado_integral_hiv_manual_multiprofissional.pdf')}}>
        BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância, Prevenção e Controle das Doenças Sexualmente Transmissíveis, Aids e Hepatites Virais.
        Manual Técnico para o Diagnóstico das Hepatites Virais / Ministério da Saúde, Secretaria de Vigilância em Saúde, Departamento de Vigilância, Prevenção e Controle das IST, do HIV/Aids e das Hepatites Virais. – Brasília : Ministério da Saúde, 2016. 123 p. Disponível em: https://qualitr.paginas.ufsc.br/files/2018/08/manual_tecnico_hepatites_08_2018_web.pdf.
    </Text>]
];
