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

export default function T059({ navigation }) {
        // Atualiza as cores se o modo noturno estiver ligado
        const { colors } = useTheme();

        // Configuração de texto para as próximas telas
        Text.defaultProps       = Text.defaultProps || {}
        Text.defaultProps.style =  { 
              color             : colors.text,
              fontFamily        : 'Mulish_Regular',
              fontSize          : 20,
              marginHorizontal  : 20,
              textAlign         : 'center',
              lineHeight        : 35
        }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View >
                    <Parag>Seu paciente não apresenta esses sintomas! {"\n"} Sugiro você realizar aconselhamento sobre a importância do dianóstico e prevenção combinada.</Parag>
                </View>
                <Imagem source={require("../../assets/images/F029.png")} title={"Acompanhamento"} number={"F029"}/>
                <View >
                    <Parag>Após o aconselhamento, é importante oferecer os testes rápidos.</Parag>
                    <Parag>Se o paciente aceitou fazer, clique em TESTES RÁPIDOS e será direcionado para essa seção.</Parag>
                    <Parag>Se ele recusou realizar os testes mesmo com o aconselhamento, não há mais nada a fazer além da sensibilização. Registre tudo!</Parag>
                    <Parag>Se NÃO, clique em FINALIZAR e será redirecionado ao MENU PRINCIPAL.</Parag>
                </View>
            </ScrollView>
            <View style={styles.containerBotao}>
                    <Botao
                        title="TESTES RÁPIDOS"
                        onPress={() => navigation.navigate('063-TestesRapidos')}
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