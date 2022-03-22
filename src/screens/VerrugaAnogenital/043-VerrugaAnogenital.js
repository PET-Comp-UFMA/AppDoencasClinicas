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

export default function T043({ navigation }) {
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

                <Imagem source={require("src/assets/images/F029.png")} title={"Acompanhamento"} number={"F029"}/>
                
                <View>
                    <Parag>Após o aconselhamento, o que seu paciente decidiu?</Parag>
                </View>

            </ScrollView>
            <View style={styles.containerBotao}>

                <Botao
                    title="Aceitou fazer os testes rápidos"
                    onPress={() => navigation.navigate('063-TestesRapidos')}
                />
                <Botao
                    title="mesmo assim não aceitou realizar os testes rápidos"
                    onPress={() => navigation.navigate('044-VerrugaAnogenital')}
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