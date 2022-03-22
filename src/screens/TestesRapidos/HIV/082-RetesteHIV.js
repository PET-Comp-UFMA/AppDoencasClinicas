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
import Parag from './src/components/Parag';
import Bold from './src/components/Bold';
import Botao from './src/components/Botao';

export default function T070({ navigation }) {
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
                    <Parag>Se não tem mais material para fazer o <Bold>RETESTE</Bold>, e o paciente concorda em prosseguir, clique em <Bold>MANEJO CLÍNICO</Bold> para prosseguir e será direcionado para as possíveis soluções</Parag>
                    <Parag>Caso o paciente não concorde em prosseguir, aconselhe-o. Se ele concordar, clique em <Bold>MANEJO CLÍNICO</Bold>, se mesmo assim ele não concordar, não há mais nada a fazer além de sensibilizar, então, clique em <Bold>FINALIZAR</Bold> e será direcionado ao <Bold>MENU PRINCIPAL</Bold>.</Parag>
                </View>
                
            </ScrollView>
            <View style={styles.containerBotao}>

                    <Botao
                        title="MANEJO CLÍNICO"
                        onPress={() => navigation.navigate('002-Manejo Clinico')}
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