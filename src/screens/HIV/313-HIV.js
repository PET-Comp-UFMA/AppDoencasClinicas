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
import Imagem from '../../components/Imagem';
import { useTheme } from '@react-navigation/native';

export default function T313({ navigation }) {
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
                    <Parag>EXAMES COMPLEMENTARES</Parag>
                    <Parag>Você pode solicitar os seguintes exames complementares para abordagem inicial:</Parag>
                    <Parag>• Contagem de LT-CD4+ e exame de CV-HIV</Parag>
                    <Parag>• Genotipagem pré-tratamento</Parag>
                    <Parag>• Hemograma completo</Parag>
                    <Parag>• Glicemia de jejum</Parag>
                    <Parag>• Dosagem de lipídios (colesterol total, HDL, LDL, triglicerídeos)</Parag>
                    <Parag>• Avaliação hepática e renal (AST, ALT, FA, BT e frações, Cr, exame básico de urina)</Parag>
                    <Parag>• Teste imunológico para sífilis</Parag>
                    <Parag>• Testes para hepatites virais (anti-HAV, anti-HCV, HBsAg, anti-HBc total e anti-HBs para verificação de imunização)</Parag>
                    <Parag>• IgG para toxoplasmose</Parag>
                    <Parag>• Sorologia para HTLV I e II e Chagas</Parag>
                    <Parag>• Prova tuberculínica (PT)</Parag>
                    <Parag>• Radiografia de tórax</Parag>
                </View>
            </ScrollView>

            <View style={styles.containerBotao}>
            <Botao
                    title="PRÓXIMO"
                    onPress={() => navigation.navigate('314-HIV')}
                />
            <Botao
                    title="MENU ANTERIOR"
                    onPress={() => navigation.navigate('055-HIV')}
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



