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

export default function T125({ navigation }) {
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
                    <Parag>O exposto e a fonte (se conhecida) devem passar por uma abordagem quanto à necessidade de realização dos testes sorológicos e informações sobre a natureza dos exames, suas implicações e resultados.</Parag>
                    <Parag>• O aconselhador deve ser um profissional de saúde de nível superior.</Parag>
                    <Parag>• O aconselhador deve conversar com a fonte e o acidentado em lugar reservado, explicando a necessidade de conduzir a exposição a material biológico como urgência médica e as implicações da testagem sorológica</Parag>
                    <Parag>• Se a fonte for bem orientada sobre a importância destes exames para o acidentado, bem como da garantia do sigilo dos resultados, dificilmente haverá recusa para a realização destes exames. Entretanto, no caso de recusa, o acidente deverá ser tratado como de “fonte desconhecida”.</Parag>  
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



