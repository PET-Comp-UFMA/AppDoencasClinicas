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
import Imagem from "../../../components/Imagem";

export default function T071({ navigation }) {
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
                    <Parag>Realizar aconselhamento sobre prevenção combinada, e fale da importância do teste.</Parag>
                </View>
                <Imagem source={require("../../../assets/images/F029.png")} title={"Acompanhamento"} number={"F029"}/>
                <View >
                    <Parag>Mesmo <Bold>NÃO REAGENTE</Bold> e o paciente apresenta manifestações clínicas, é aconselhável soliciar o exame sorológico (VDRL) para maiores esclarecimentos, assim como conversar com profissional médico para decisão de conduta.</Parag>
                    <Parag>Se foi <Bold>NÃO REAGENTE</Bold> e não exista manifestações clínicas, e posteriomente surjam sintomas, oriente procurar o serviço de saúde. Notifique tudo.</Parag>
                    <Parag>Clique em <Bold>FINALIZAR</Bold> e será direcionado ao MENU PRINCIPAL.</Parag>
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