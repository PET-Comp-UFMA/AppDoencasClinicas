import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Bold from './src/components/Bold';
import Imagem from './src/components/Imagem';
import Parag from './src/components/Parag';
import Botao from './src/components/Botao';
import Tabela from './src/components/Tabela';
import { useTheme } from '@react-navigation/native';

export default function T114({ navigation }) {
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
                    <Parag>A hepatite viral B é causada por um vírus DNA pertencente à família Hepadnaviridae.</Parag>
                    <Parag>A hepatite C é causada pelo HCV. Esse vírus foi o primeiro membro do gênero Hepacivirus, da família Flaviridae.</Parag>
                    <Parag>As hepatites virais são doenças de notificação obrigatória.</Parag>
                    <Parag>A maioria dos casos subclínicos cursam com predominância de fadiga, anorexia, náuseas e mal-estar geral.</Parag>
                    <Parag>Nos pacientes sintomáticos, o período de doença aguda pode se caracterizar pela presença de urina escura (colúria), fezes esbranquiçadas e icterícia. </Parag>
                    <Parag><Bold>Uso dos Testes Rápidos</Bold></Parag>
                    <Parag>Critérios de desempenho para testes rápidos aceitos pela Organização Mundial da Saúde (OMS).</Parag>
                </View>

                <View>
                    <Tabela tableData={tableData} tableHead={tableHead}></Tabela>
                </View>

                <View>
                    <Parag>Investigação inicial da infecção pelo HBV utilizando TR-HBsAg.</Parag>
                </View>
                <View>
                    <Imagem source={require("./src/assets/images/F037.png")} title={""} number={"F036"} />
                </View>

                <View>
                    <Parag>Investigação o inicial da infecção pelo vírus da hepatite C (HCV) utilizando testes rápidos.</Parag>
                </View>
                <View>
                    <Imagem source={require("./src/assets/images/F038.png")} title={""} number={"F037"} />
                </View>

                <View>
                    <Parag>Caso tenha concluído, clique em <Bold>FINALIZAR</Bold>, e será direcionado ao menu principal.</Parag>
                    <Parag>Ou, se preferir, clique na seta para a <Bold>ESQUERDA</Bold> para relembrar algumas informações.</Parag>
                    <Parag>Ou ainda você poderá clicar em <Bold>TIRA DÚVIDAS</Bold> para ir ao menu dessa seção.</Parag>
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
        fontSize: 16,
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
    <Text style={styles.textHead}>Analito</Text>,
    <Text style={styles.textHead}>Testes Rápidos</Text>,
]
const tableData = [
    [
        <Text style={styles.textTitle}>
            <Bold>HBsAg¹</Bold>
        </Text>,

        <Text style={styles.textData}>
            Sensibilidade: 100%{"\n\n"}

            Especificidade: ≥ 98%{"\n\n"}

            Variabilidade entre leituras: ≤5%{"\n\n"}

            Taxa de inválidos: ≤5%
        </Text>,
    ],

    [

        <Text style={styles.textTitle}>
            <Bold>Anti-HCV²</Bold>
        </Text>,

        <Text style={styles.textData}>
            Sensibilidade: 98%{"\n\n"}

            Especificidade: ≥ 97%{"\n\n"}

            Variabilidade entre leituras: ≤5%{"\n\n"}

            Taxa de inválidos: ≤5%
        </Text>,
    ],


];
