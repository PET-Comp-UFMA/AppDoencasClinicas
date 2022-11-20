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

export default function T128({ navigation }) {
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
                    <Parag>Sabe-se que a PEP pode reduzir o risco de soroconversão para HIV, após exposição.</Parag>
                    <Parag>A indicação do uso de antirretrovirais requer a avaliação do risco da exposição e inclui:</Parag>
                    <Parag>• O tipo de material biológico envolvido.</Parag>
                    <Parag>• O tipo da exposição.</Parag>
                    <Parag>• O tempo decorrido entre exposição e atendimento.</Parag>
                    <Parag>• A condição sorológica do exposto.</Parag>
                    <Parag>• A identificação ou não da fonte e de sua condição sorológica.</Parag>
                    <Parag>• No caso de fonte com sorologia para HIV reagente, informações sobre as condições clínicas, imunológicas e laboratoriais também são importantes.</Parag>
                    <Parag>A quimioprofilaxia (PEP) deve ser recomendada aos acidentados que sofreram risco significativo de contaminação pelo HIV.</Parag>
                    <Parag>Quando indicada a PEP, o acidentado deverá ser encaminhado para Unidade de Avaliação de Risco, mediante encaminhamento responsável (contato telefônico e encaminhamento por escrito com resultado dos testes rápidos).</Parag>
                    <Parag>A quimioprofilaxia deverá ser iniciada o mais rápido possível, idealmente dentro das primeiras 2 horas, até o máximo de 72 horas após o acidente.</Parag>
                    <Parag>A duração da quimioprofilaxia é de 28 (vinte e oito) dias. Mesmo que a pessoa chegue ao serviço depois de 72h da exposição, recomenda-se a investigação inicial do status sorológico e a orientação para agendamento de atendimento em um dos Locais de Referência para Acompanhamento Clínico-Sorológico.</Parag>
                    <Parag>Exames adicionais: Para pacientes expostos com indicação de PEP que apresentem alto risco ou com história prévia de doença renal, solicitar creatinina; para diabéticos, solicitar glicemia; e para pacientes que farão uso de esquema profilático contendo zidovudina, solicitar hemograma. O betaHCG deve ser solicitado para mulheres com atraso menstrual / suspeita de gravidez.</Parag>
                    <Parag>É direito da pessoa recusar a PEP ou outros procedimentos indicados após a exposição. Nesses casos, sugere-se o registro em prontuário, documentando a recusa e explicitando que no atendimento foram fornecidas as informações sobre os riscos da exposição, assim como a relação entre o risco e o benefício das intervenções.</Parag>
                </View>

            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="PRÓXIMO"
                    onPress={() => navigation.navigate('133-IndicacaoPEP')}
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



