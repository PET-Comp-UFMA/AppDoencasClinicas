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
import Parag from '../../components/Parag';
import Bold from '../../components/Bold';
import Botao from '../../components/Botao';
import Tabela from "../../components/Tabela";

export default function T051({ navigation }) {
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
                    <Parag>Se existir erupção macular eritematosa pouco visível (roséola), principalmente no tronco e raiz dos membros, sendo comum placas mucosas, assim como lesões acinzentadas e pouco visíveis nas mucosas, ou ainda papulosas eritemato-acastanhadas, que podem atingir todo o tegumento, sendo frequentes nos genitais. Habitualmente, atingem a região plantar e palmar, com um colarinho de escamação característico, em geral não pruriginosa.</Parag>
                    <Parag>Considerar esquema terapêutico para sífilis recente e solicitar VDRL trimestralmente (mensal em gestante):</Parag>
                    <Tabela tableHead={tableHead} tableData={tableData} />
                    <Parag>No caso de sífilis recente em gestantes, alguns experts recomendam uma dose adicional de 2,4 milhões de unidades de penicilina benzatina, IM, uma semana após a primeira dose.</Parag>
                    <Parag>Buscar parceria sexual para investigação.</Parag>
                    <Parag>Após diagnóstico, realizar notificação.</Parag>
                    <Parag>Escolha uma das duas primeiras opções, ou caso tenha chegado ao seu objetivo, pode clicar em <Bold>FINALIZAR</Bold> e será direcionado ao <Bold>MENU PRINCIPAL</Bold>. </Parag>
                </View>

            </ScrollView>
            <View style={styles.containerBotao}>

                <Botao
                    title="USUÁRIO(A) TEM O TESTE RÁPIDO REAGENTE, MAS NÃO SÃO ESSAS CARACTÉRISTICAS"
                    onPress={() => navigation.navigate('201-Sifilis')}
                />

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
            <Bold>Sífilis recente</Bold>: Sífilis primária, secundária e latente recente (com até um ano de evolução).

        </Text>,

        <Text style={styles.textData}>
            <Bold>Benzilpenicili-na benzatina</Bold> 2,4 milhões UI, IM, dose única (1,2 milhão UI em cada glúteo).
        </Text>,
        
        <Text style={styles.textData}>
            <Bold>Doxiciclina</Bold> 100mg, 12/12h, VO, por 15 dias
        </Text>,

        <Text style={styles.textData}>
            Trimestral (em gestantes, o controle deve ser mensal)
        </Text>,
    ],
];
