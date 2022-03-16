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

export default function T011({ navigation }) {
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
                <View>
                    <Parag>Realizar aconselhamento sobre prevenção combinada, e fale da importância do teste.</Parag>
                </View>
                <Imagem source={require("@images/F029.png")} title={"Acompanhamento"} number={"F029"}/>
                
                <View>
                    <Parag>Aborde pontos mais importantes relacionados à vulnerabilidade em relação às IST.</Parag>
                    <Parag>Caso seu paciente aceite realizar, clique em <Bold>TESTES RÁPIDOS</Bold>.</Parag>
                    <Parag>Se não, clique em <Bold>FINALIZAR</Bold> e será direcionado ao menu principal. Registre tudo.</Parag>
                </View>
            </ScrollView>
            <View style={styles.containerBotao}>

                <Botao
                    title="REALIZAR TESTE RÁPIDO"
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
        marginTop:20,
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