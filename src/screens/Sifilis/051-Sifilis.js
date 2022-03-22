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
import Parag from 'src/components/Parag';
import Bold from 'src/components/Bold';
import Botao from 'src/components/Botao';
import Imagem from "src/components/Imagem";
import Tabela from "src/components/Tabela";

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
                    <Parag>Se o teste rápido foi reagente e se o usuário apresenta uma úlcera rica em treponemas, geralmente única e indolor, com borda bem definida e regular, base endurecida e fundo limpo, que ocorre no local de entrada da bactéria (pênis, vulva, vagina, colo uterino, ânus, boca, ou outros locais do tegumento), sendo denominada “cancro duro”.</Parag>
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
                    onPress={() => navigation.navigate('200-Sifilis')}
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
