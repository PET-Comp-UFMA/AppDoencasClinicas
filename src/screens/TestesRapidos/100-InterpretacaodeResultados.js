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

export default function T100({ navigation }) {
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
                    <Parag>O teste rápido inclui um sistema de controle interno de migração, representado por um linha coloriada, que aparece na área de controle (C), essa linha confirma que o resultado obtido é válido.</Parag>
                    <Parag>Cada teste exige uma quantidade “X” de amostra (sangue), de tampão e tempo necessário para a leitura.</Parag>
                    <Parag>Obedeça o que recomenda cada laboratório.</Parag>
                    <Parag>Se a linha de controle (C) não aparecer dentro do tempo máximo determiado pelo fabricante, o teste será considero inválido, mesmo que a linha colorida apareça na área de teste (T).</Parag>
                </View>

                <View>
                    <Imagem source={require("../../assets/images/F033.png")} title={"Acompanhamento"} number={"F033"}/>
                    <Parag>Qualquer intensidade de linha colorida na área de teste é considerado como resultado reagente.</Parag>
                </View>

                <View>
                    <Imagem source={require("../../assets/images/F034.png")} title={"Acompanhamento"} number={"F034"}/>
                    <Parag>Quando aparece somente a linha colorida do controle o resultado é não reagente.</Parag>
                </View>

                <View>
                <Imagem source={require("../../assets/images/F035.png")} title={"Acompanhamento"} number={"F035"}/>
                <Parag>Caso tenha concluído, clique em <Bold>FINALIZAR</Bold>, e será direcionado ao <Bold>MENU PRINCIPAL</Bold>. Ou na seta para a <Bold>ESQUERDA</Bold>, caso precise relembrar algo.</Parag>
                </View>

            </ScrollView>
            <View style={styles.containerBotao}>

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