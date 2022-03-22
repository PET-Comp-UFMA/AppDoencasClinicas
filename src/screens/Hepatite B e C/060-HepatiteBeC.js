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
                    <Parag>Se você chegou aqui, o seu paciente apresentou teste rápido para Hepatite B ou C reagente.</Parag>
                    <Parag>Caso não tenha realizado os outros testes rápidos, pode oferecer. E para isso, clique em <Bold>TESTES RÁPIDOS</Bold> para acessar a seção Testes Rápidos.</Parag>
                    <Parag>Se já tenha oferecido e realizado os outros testes, desconsidere o comando anterior.</Parag>
                    <Parag>Então, se o teste reagente foi para Hepatite B, clique em <Bold>HEPATITE B.</Bold></Parag>
                    <Parag>Mas, se o teste reagente foi para Hepatite C, clique em <Bold>HEPATITE C.</Bold></Parag>
                </View>

            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="Testes rápidos"
                    onPress={() => navigation.navigate('063-TestesRapidos')}
                />

                <Botao
                    title="Hepatite b"
                    onPress={() => navigation.navigate('061-HepatiteBeC')}
                />

                <Botao
                    title="Hepatite c"
                    onPress={() => navigation.navigate('062-HepatiteBeC')}
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