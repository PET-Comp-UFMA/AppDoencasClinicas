import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Bold from '../../components/Bold';
import Parag from '../../components/Parag';
import Botao from '../../components/Botao';
import { useTheme } from '@react-navigation/native';

export default function T120({ navigation }) {
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
                    <Parag>A Profilaxia Pós-Exposição (PEP) de risco à infecção pelo HIV consiste no uso de antirretrovirais, por 28 dias, para reduzir o risco de adquirir essa infecção</Parag>
                    <Parag>O atendimento após a exposição ao HIV é uma urgência. A PEP deve ser iniciada o mais precocemente possível, tendo como limite as 72 horas subsequentes à exposição.</Parag>
                    <Parag>Nos casos em que o atendimento ocorrer após 72 horas da exposição, a PEP não está mais indicada.</Parag>
                    <Parag>Mais informações sobre a Profilaxia Pós-Exposição ao HIV, <Bold>FINALIZAR</Bold> e será direcionado ao <Bold>MENU PRINCIPAL</Bold></Parag>
                    <Parag>Você poderá escolher uma das opções abaixo. E ainda, clicar em <Bold>TIRA DÚVIDAS</Bold> para ir ao menu dessa seção, ou em <Bold>FINALIZAR</Bold> e ser direcionado ao <Bold>MENU PRINCIPAL</Bold>.</Parag>
                </View>



            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="Tira Dúvidas"
                    onPress={() => navigation.navigate('102-TiraDuvidas')}
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



