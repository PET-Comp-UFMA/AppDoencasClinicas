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

export default function Aconselhamento({ navigation }) {
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
                    <Parag>Se chegou até aqui é porque seu paciente não apresenta nenhuma dessas queixas, ou mesmo depois do aconselhamento não aceitou realizar os testes rápidos.</Parag>
                    <Parag>Se ele recusou realizar os testes mesmo com o aconselhamento, não há mais nada a fazer além da sensibilização. Registre tudo!</Parag>
                    <Parag>Então, clique em <Bold>MENU PRINCIPAL</Bold> e você será direcionado ao início, ou em <Bold>ANAMNESE E EXAME FÍSICO</Bold> para voltar para o menu dessa seção.</Parag>
                </View>

            </ScrollView>
            <View style={styles.containerBotao}>

                <Botao
                    title="Menu principal"
                    onPress={() => navigation.navigate('001-Inicio')}
                />

                <Botao
                    title="anamnese e exame físico"
                    onPress={() => navigation.navigate('003-Anamnese e Exame Fisico')}
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