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

export default function T303({ navigation }) {
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
                    <Parag>• Manifestações extra-hepáticas com acometimento motor incapacitante, artrite, vasculites, glomerulonefrite e poliarterite nodosa;</Parag>
                    <Parag>• Coinfecção HIV/HBV ou HCV/HBV;</Parag>
                    <Parag>• Hepatite aguda grave (coagulopatias ou icterícia por mais de 14 dias);</Parag>
                    <Parag>• Reativação de hepatite B crônica;</Parag>
                    <Parag>• Cirrose/insuficiência hepática;</Parag>
                    <Parag>• Biópsia hepática METAVIR ≥ A2F2 ou elastografia hepática {'>'} 7,0 kPa;</Parag>
                    <Parag>• Prevenção de reativação viral em pacientes que irão receber terapia imunossupressora (IMSS) ou quimioterapia (QT).</Parag>
                </View>

            </ScrollView>

            <View style={styles.containerBotao}>
            <Botao
                    title="PROXÍMO"
                    onPress={() => navigation.navigate('304-HepatiteB')}
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



