import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Bold from 'src/components/Bold';
import Imagem from 'src/components/Imagem';
import Parag from 'src/components/Parag';
import Botao from 'src/components/Botao';
import Tabela from 'src/components/Tabela';
import { useTheme } from '@react-navigation/native';

export default function T112({ navigation }) {
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
                    <Parag><Bold>Agente causador:</Bold> bactéria Treponema pallidum.</Parag>
                    <Parag><Bold>Diagnóstico diferencial:</Bold> sífilis, cancroide, tuberculose cutânea, amebíase cutânea, neoplasias ulceradas, leishmaniose tegumentar americana e outras doenças cutâneas ulcerativas e granulomatosas.</Parag>
                </View>

                <View>
                    <Tabela tableData={tableData} tableHead={tableHead}></Tabela>
                </View>

                <View>
                    <Imagem source={require("src/assets/images/F030.png")} title={""} number={"F030"} />
                    <Imagem source={require("src/assets/images/F031.png")} title={""} number={"F031"} />
                    <Imagem source={require("src/assets/images/F032.png")} title={""} number={"F032"} />
                </View>

                <View>
                    <Parag>Caso tenha concluído, clique em <Bold>FINALIZAR</Bold>, e será direcionado ao menu principal.</Parag>
                    <Parag>Ou, se preferir, clique na seta para a <Bold>ESQUERDA</Bold> para relembrar algumas informações.</Parag>
                </View>



            </ScrollView>

            <View style={styles.containerBotao}>
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
    <Text style={styles.textHead}>Classificação</Text>,
    <Text style={styles.textHead}>Subclassificação</Text>,
    <Text style={styles.textHead}>Manifestações Clínicas</Text>
]
const tableData = [
    [
        <Text style={styles.textTitle}>
            <Bold>Sífilis recente (até 1 ano de evolução)</Bold>
        </Text>,

        <Text style={styles.textData}>
            Primária (10-90 dias)
        </Text>,

        <Text style={styles.textData}>
            Úlcera rica em treponemas, geralmente única e indolor, com borda bem definida e regular, base endurecida e fundo limpo, que ocorre no local de entrada da bactéria.
        </Text>,
    ],

    [

        <Text style={styles.textData}>
            Secundária (6 semanas a 6 meses)
        </Text>,

        <Text style={styles.textData}>
            Erupção macular eritematosa pouco visível (roséola), principalmente no tronco e raiz dos membros. Habitualmente, atingem a região plantar e palmar.
        </Text>,
    ],

    [

        <Text style={styles.textData}>
            Latente recente
        </Text>,

        <Text style={styles.textData}>
            Período em que não se observa nenhum sinal ou sintoma. O diagnóstico faz-se exclusivamente pela reatividade dos testes treponêmicos e não treponêmico.
        </Text>,
    ],

    [
        <Text style={styles.textTitle}>
            <Bold>Sífilis tardia (mais de 1 ano de evolução)</Bold>
        </Text>,

        <Text style={styles.textData}>
            Latente tardia
        </Text>,

        <Text style={styles.textData}>
            Período em que não se observa nenhum sinal ou sintoma. O diagnóstico faz-se exclusivamente pela reatividade dos testes treponêmicos e não treponêmico.
        </Text>,
    ],

    [

        <Text style={styles.textData}>
            Terciária (1-40 anos)
        </Text>,

        <Text style={styles.textData}>
            É comum o acometimento do sistema nervoso e do sistema cardiovascular. Além disso, verifica-se a formação de gomas sifilíticas (tumorações com tendência a liquefação) na pele, mucosas, ossos ou qualquer tecido. As lesões podem causar desfiguração, incapacidade e até morte.
        </Text>,
    ],

];
