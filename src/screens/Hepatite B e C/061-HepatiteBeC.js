import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    ColorPropType,
} from 'react-native';
import Botao from '../../components/Botao';
import Parag from '../../components/Parag';
import Bold from '../../components/Bold';
import { useTheme } from '@react-navigation/native';

export default function T015({ navigation }) {
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
                    <Parag>Se você chegou aqui, o seu paciente apresentou teste rápido para Hepatite B reagente.</Parag>
                    <Parag>• Considerar o cuidado articulado para o diagnóstico.</Parag>
                    <Parag>• Recomenda-se a realização dos testes para detecção de HBsAg e do anti-HBC.</Parag>
                    <Parag>• As consultas devem seguir uma rotina de no mínimo 2 a 4 vezes ao ano.</Parag>
                    <Parag>• O paciente portador de hepatite B deve ser imunizado para a hepatite A.</Parag>
                    <Parag>Após diagnóstico, realizar notificação.</Parag>
                </View>

            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="Exames"
                    onPress={() => navigation.navigate('301-HepatiteB')}
                />
                <Botao
                    title="Tratamento"
                    onPress={() => navigation.navigate('302-HepatiteB')}
                />
                <Botao
                    title="Finalizar"
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
        paddingTop: 15
    },
    containerBotao: {
        marginTop: 0,
        width: '100%'
    },
});