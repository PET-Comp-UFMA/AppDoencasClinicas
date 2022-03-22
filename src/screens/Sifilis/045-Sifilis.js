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

export default function T045({ navigation }) {
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
                    <Parag>Seu paciente apresenta erupções cutâneas, única ou múltiplas, na genitália e/ou palma das mãos e/ou na planta dos pés?</Parag>
                    <Imagem source={require("src/assets/images/F030.png")} title={"F030"}/>
                    <Imagem source={require("src/assets/images/F031.png")} title={"F031"}/>
                    <Imagem source={require("src/assets/images/F032.png")} title={"F032"}/>
                </View>

            </ScrollView>
            <View style={styles.containerBotao}>

                <Botao
                    title="SIM"
                    onPress={() => navigation.navigate('046-Sifilis')}
                />

                <Botao
                    title="NAO"
                    onPress={() => navigation.navigate('')}
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