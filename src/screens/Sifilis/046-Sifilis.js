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
import Imagem from "../../components/Imagem";

export default function T046({ navigation }) {
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
                    <Parag>Ofereça ao seu paciente os testes, principalmente o de sífilis.</Parag>
                    <Parag>Se seu paciente aceitou realizar os testes. Clique em <Bold>ACEITOU REALIZAR OS TESTES</Bold>.</Parag>
                    <Parag>Caso contrário, clique em <Bold>NÃO ACEITOU REALIZAR OS TESTES</Bold>.</Parag>
                </View>

            </ScrollView>
            <View style={styles.containerBotao}>

                <Botao
                    title="ACEITOU FAZER TESTES RÁPIDOS"
                    onPress={() => navigation.navigate('047-Sifilis')}
                />

                <Botao
                    title="NÃO ACEITOU FAZER TESTES RÁPIDOS"
                    onPress={() => navigation.navigate('048-Sifilis')}
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