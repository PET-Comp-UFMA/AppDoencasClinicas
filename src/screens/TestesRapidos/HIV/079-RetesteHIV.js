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
import Parag from '../../../components/Parag';
import Bold from '../../../components/Bold';
import Botao from '../../../components/Botao';

export default function T079({ navigation }) {
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
                    <Parag>Reteste foi <Bold>REAGENTE</Bold>. Clique em <Bold>MANEJO CLÍNICO</Bold>, e você será direcionado para as possíveis soluções. </Parag>
                    <Parag>Se o paciente se recusar em prosseguir o manejo, aconselhe sobre a importância do tratamento, se ainda assim não concordar, clique em <Bold>FINALIZAR</Bold> e será direcionado ao <Bold>MENU PRINCIPAL</Bold>. Notifique todo o processo.</Parag>
                </View>
                
            </ScrollView>

            <View style={styles.containerBotao}>

                    <Botao
                        title="MANEJO CLÍNICO"
                        onPress={() => navigation.navigate('054-HIV')}
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