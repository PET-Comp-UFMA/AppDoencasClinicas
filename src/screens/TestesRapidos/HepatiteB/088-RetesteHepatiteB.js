import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Botao from './src/components/Botao';
import Bold from './src/components/Bold';
import Parag from './src/components/Parag';
import { useTheme } from '@react-navigation/native';

export default function T088({ navigation }) {
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
                    <Parag>Se seu paciente não concordou realizar o <Bold>RETESTE</Bold> após teste reagente, aconselhe-o. E se ele aceitar após aconselhamento, clique em <Bold>REALIZAR RETESTE</Bold>.</Parag>
                    <Parag>Se não for esse o caso, clique em <Bold>FINALIZAR</Bold> e será direcionado ao <Bold>MENU PRINCIPAL</Bold>.</Parag>
                </View>

            </ScrollView>

            <View style={styles.containerBotao}>
                
                <Botao
                    title="REALIZAR RETESTE"
                    onPress={() => navigation.navigate('086-RetesteHepatiteB')}
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