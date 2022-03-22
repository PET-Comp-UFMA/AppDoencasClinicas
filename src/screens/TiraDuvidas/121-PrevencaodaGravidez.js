import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Bold from 'src/components/Bold';
import Parag from 'src/components/Parag';
import Botao from 'src/components/Botao';
import Tabela from 'src/components/Tabela';
import { useTheme } from '@react-navigation/native';

export default function T121({ navigation }) {
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
                    <Parag>De acordo com o Decreto-Lei nº 2.848, de 7 de dezembro de 1940, artigo 128, inciso II do Código Penal brasileiro314, o abortamento é permitido quando a gravidez resulta de estupro, risco de morte da gestante ou anencefalia.</Parag>
                    <Parag>O método mais adequado para a anticoncepção de emergência consiste na utilização de levonorgestrel.</Parag>
                </View>

                <View>
                    <Tabela tableData={tableData} tableHead={tableHead}></Tabela>
                </View>

                <View>
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

const tableHead = [
    <Text style={styles.textHead}>Apresentação</Text>,
    <Text style={styles.textHead}>Posologia</Text>,
]
const tableData = [
    [
        <Text style={styles.textTitle}>
            Comprimidos de 0,75mg (cartela com 2 comprimidos) e 1,5mg de levornogestrel (cartela com 1 comprimido)
        </Text>,

        <Text style={styles.textData}>
            <Bold>1ª opção:</Bold> comprimido de 1,5mg VO ou 2 comprimidos de 0,75mg, dose única, até 5 dias após a relação sexual
        </Text>,
    ],

    [

        <Text style={styles.textData}>
            <Bold>2ª opção:</Bold> 1 comprimido de 0,75mg, VO de 12/12 horas, no total de 2 comprimidos, até 5 dias após a relação sexual
        </Text>,
    ],


];


