import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import Parag from '@components/Parag';
import Bold from '@components/Bold';
import Botao from '@components/Botao';
import Tabela from "@components/Tabela";

export default function T201({ navigation }) {
    // Atualiza as cores se o modo noturno estiver ligado
    const { colors } = useTheme();

    // Configuração de texto para as próximas telas
    Text.defaultProps = Text.defaultProps || {}
    Text.defaultProps.style = {
        color: colors.text,
        fontFamily: 'Mulish_Regular',
        fontSize: 20,
        marginHorizontal: 20,
        textAlign: 'center',
        lineHeight: 35
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Parag>Caso apresente teste reagente essas características:</Parag>
                    <Parag>• Neurológicas: meningite, gomas do cérebro ou da medula, atrofia do nervo óptico, lesão do sétimo par craniano, manifestações psiquiátricas, tabes dorsalis e quadros demenciais como o da paralisia geral.</Parag>
                    <Parag>Considerar esquema terapêutico para neurosífilis e solicitar exame de LCR de 6/6 meses até normalização:</Parag>
                    
                    <Tabela tableHead={tableHead} tableData={tableData} />
                    
                    <Parag>Buscar parceria sexual para investigação.</Parag>
                    <Parag>Após diagnóstico, realizar notificação.</Parag>
                    <Parag>Escolha uma das duas primeiras opções, ou caso tenha chegado ao seu objetivo, pode clicar em <Bold>FINALIZAR</Bold> e será direcionado ao <Bold>MENU PRINCIPAL</Bold>. </Parag>
                </View>

            </ScrollView>
            <View style={styles.containerBotao}>

                <Botao
                    title="USUÁRIO(A) TEM APENAS O TESTE RÁPIDO REAGENTE"
                    onPress={() => navigation.navigate('203-Sifilis')}
                />
                
                <Botao
                    title="FINALIZAR"
                    onPress={() => navigation.navigate('001-Inicio')}
                />

            </View>
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',

        paddingTop: 15,
        width: '100%'
    },
    containerBotao: {
        marginTop: 30,
        width: '100%'
    },
    texto: {
        marginBottom: 10,

    },
});

const tableHead = [
    <Text style={styles.textHead}>Estadiamento</Text>,
    <Text style={styles.textHead}>Esquema Terapêutico</Text>,
    <Text style={styles.textHead}>Alternativa (exceto para gestantes)</Text>,
    <Text style={styles.textHead}>Seguimento (teste não treponêmico)</Text>,

]
const tableData = [
    [
        <Text style={styles.textData}>
            <Bold>Neurossífilis</Bold>

        </Text>,

        <Text style={styles.textData}>
            <Bold>Benzilpenicilina potássica/cristalina</Bold> 18-24 milhões UI, 1x/ dia, EV, administrada em doses de 3-4 milhões UI, a cada 4 horas ou por infusão contínua, por 14 dias
        </Text>,
        
        <Text style={styles.textData}>
            <Bold>Ceftriaxona</Bold> 2g IV, 1x/dia, por 10-14 dias
        </Text>,

        <Text style={styles.textData}>
            Exame de LCR de 6/6 meses até normalização
        </Text>,
    ],
];
