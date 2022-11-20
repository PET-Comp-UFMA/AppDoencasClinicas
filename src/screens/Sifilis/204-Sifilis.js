import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import Parag from '../../components/Parag';
import Imagem from '../../components/Imagem';


export default function T204({ navigation }) {
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
                    <Parag>• Os testes treponêmicos são os primeiros a se tornarem reagentes, e podem permanecer reagentes por toda a vida, mesmo após o tratamento.</Parag>
                </View>
                <View style={styles.containerImage}>
                    <Image style={styles.image} source={require("../../assets/images/F047.png")}/>
                </View>
                <View>
                    <Parag>• Por isso, indica-se a solicitação de testes não treponêmicos para monitoramento da resposta ao tratamento.</Parag>
                    <Parag>• Não se deixe enganar! O diagnóstico não estará confirmado quando houver cicatriz/memória sorológica, ou seja, tratamento anterior com documentação da queda da titulação em pelo menos duas diluições (ex.: uma titulação de 1:16 antes do tratamento que se torna menor ou igual a 1:4 após o tratamento) e afasta a possibilidade de reinfecção.</Parag>
                    <Parag>• Nos casos em que testes treponêmicos e não-treponêmicos não reagentes, mas existe suspeita clínica e/ou epidemiológica:</Parag>
                    
                    <Parag>POSSÍVEIS INTERPRETAÇÕES</Parag>
                        <Parag>• Ausência de infecção</Parag>
                        <Parag>• Período de incubação (janela imunológica)</Parag>

                    <Parag>CONDUTA</Parag>
                        <Parag>• Solicitar nova coleta em 30 dias</Parag>
                        <Parag>• Caso o diagnóstico seja mais provável (ex.: visualização de úlcera anogenital) ou retorno da pessoa ao serviço não possa ser garantido, é recomendado iniciar o tratamento.</Parag>
                </View>
            </ScrollView>
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
        
    },
    texto: {
        marginBottom: 10,

    },

    containerImage: {
        justifyContent  : 'center', 
        alignItems      : 'center', 
        flexDirection   : 'column'
    },
    image: {
        height: 200,
        width: 380,
        resizeMode: 'contain'
    }
});