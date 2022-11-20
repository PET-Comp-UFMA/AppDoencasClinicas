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

export default function T126({ navigation }) {
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
                    <Parag>Os testes rápidos estão disponíveis nos serviços de saúde e podem ser empregados no diagnóstico das infecções pelo HIV, HBV e HCV, sendo de grande utilidade no caso de acidentes com material biológico, pois permitem conhecer rapidamente o estado sorológico do acidentado e da fonte, auxiliando na análise de indicação de profilaxia para HIV e hepatite B.</Parag>
                    <Parag>• O aconselhador solicitará os testes rápidos para HIV, hepatite B e hepatite C da fonte e do acidentado, hoje disponíveis nos serviços de saúde.</Parag>
                    <Parag>• Para os expostos com anti-HBs desconhecido e com fonte HBsAg + ou desconhecida, solicitar anti-HBc-total e anti-HBs, com urgência nos resultados.</Parag>
                    <Parag>• Caso o exposto ou a fonte tenha resultado reagente, deverá ser acolhido na unidade de origem e encaminhado para serviço especializado de infectologia.</Parag>
                    <Parag>• Os resultados dos testes rápidos deverão ser disponibilizados para os usuários em formulário próprio.</Parag>
                    <Parag>• O profissional que executar o teste rápido deverá registrar no prontuário eletrônico o resultado, para que possa ser acessado nas unidades de acompanhamento.</Parag>
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



