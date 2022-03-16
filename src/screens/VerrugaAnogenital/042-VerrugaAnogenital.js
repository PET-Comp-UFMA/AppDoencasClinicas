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
import Botao from '@components/Botao';
import Parag from '@components/Parag';
import Bold from '@components/Bold';
import { useTheme } from '@react-navigation/native';

export default function T042({ navigation }) {
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
                   <Parag>Ofereça ao seu paciente os testes rápidos e para mulheres oferte também o citológico de colo uterino.</Parag>
                   <Parag>Se seu paciente aceitou realizar os testes. clique em <Bold>ACEITOU REALIZAR OS TESTES</Bold>.</Parag>
                   <Parag>Caso contrário, clique em <Bold>NÃO ACEITOU REALIZAR OS TESTES</Bold>.</Parag>
                </View>

            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="ACEITOU fazer testes rápidos"
                    onPress={() => navigation.navigate('063-TestesRapidos')}
                />

                <Botao
                    title="não aceitou fazer os testes rápidos"
                    onPress={() => navigation.navigate('043-VerrugaAnogenital')}
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