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

export default function T116({ navigation }) {
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
                    <Parag><Bold>ESQUEMA PREFERENCIAL PARA PEP HIV</Bold></Parag>
                    <Parag>Tenofovir/Lamivudina 300/300 mg - 1 comprimido 1 x ao dia + Dolutegravir 50 mg – 1 comprimido 1 x ao dia * Duração = 28 dias</Parag>
                    <Parag><Bold>ESQUEMA ALTERNATIVO PEP HIV</Bold></Parag>
                    <Parag>Tenofovir/Lamivudina 300/300 mg - 1 comprimido 1 x ao dia + Atazanavir 300 mg – 1 comprimido 1 x ao dia + Ritonavir 100 mg – 1 comprimido 1 x ao dia * Duração = 28 dias</Parag>
                </View>

            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="PRÓXIMO"
                    onPress={() => navigation.navigate('130-IndicacaoPepB')}
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



