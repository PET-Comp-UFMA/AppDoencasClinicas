import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
import Bold from '../../components/Bold';
import Parag from '../../components/Parag';
import Botao from '../../components/Botao';
import { useTheme } from '@react-navigation/native';

export default function T130({ navigation }) {
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
                    <Parag><Bold>INDICAÇÃO PEP HEPATITE B</Bold></Parag>
                    <Parag>As recomendações vão depender do status sorológico da fonte e dos níveis de anti-HBs do acidentado.</Parag>
                    <Parag>Caso ocorra exposição aos materiais biológicos com risco conhecido ou provável de infecção pelo HBV, o indivíduo não imunizado ou não-respondedor à vacina deve utilizar a imunoglobulina hiperimune anti-hepatite B (IGHAHB).</Parag>
                    <Parag>Existe maior eficácia na profilaxia pós-exposição quando a imunoglobulina e a vacina são utilizadas dentro das primeiras 24 a 72 horas após o acidente. Não existe benefício comprovado após uma semana de exposição.</Parag>
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
    textTitle: {

        margin: 6,
        alignSelf: 'center',
        color: 'black',
        fontFamily: "Mulish_Regular",
    },

    tabela: {
        marginTop: -20
    },

    textData: {
        fontSize: 16,
        margin: 6,
        textAlign: 'left',
        color: 'black',
        fontFamily: "Mulish_Regular",
    },

    textHead: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18
    }
});



