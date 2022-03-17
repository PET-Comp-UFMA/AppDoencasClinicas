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
import Imagem from "@components/Imagem";

export default function T050({ navigation }) {
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
                    <Parag>Após o aconselhamento, seu paciente refletiu melhor e decidiu realizar os testes?</Parag>
                    <Parag>Se <Bold>SIM</Bold>, clique em <Bold>TESTES RÁPIDOS</Bold> e será direcionado para essa seção.</Parag>
                    <Parag>Se ele recusou realiar os testes mesmo com aconselhamento, não há mais nada a fazer além da sensibilização. Registre tudo!</Parag>
                    <Parag>Se <Bold>NÃO</Bold>, clique em <Bold>FINALIZAR</Bold> e será direcionado ao <Bold    >MENU PRINCIPAL</Bold   >.</Parag>
                </View>

            </ScrollView>
            <View style={styles.containerBotao}>

                <Botao
                    title="REALIZAR TESTE RÁPIDO"
                    onPress={() => navigation.navigate('051-Sifilis')}
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