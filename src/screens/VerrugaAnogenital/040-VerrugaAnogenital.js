import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Botao from '@components/Botao';
import Parag from '@components/Parag';
import { useTheme } from '@react-navigation/native';
import Imagem from '@components/Imagem';
import Tabela from "@components/Tabela";
import Bold from '@components/Bold';

export default function T040({ navigation }) {
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
                    <Parag>Considerar os seguintes achados: As lesões costumam ser únicas ou múltiplas, achatadas ou papulosas, mas sempre papilomatosas. Superfície apresenta-se fosca, aveludada ou semelhante à da couve-flor. Apresentam-se da cor da pele, eritematosas ou hiperpigmentadas. Em geral são assintomáticas, mas podem ser pruriginosas, dolorosas, friáveis ou sangrantes.</Parag>
                    <Parag>Caso não haja diagnóstico de HPV, considerar vacinação:</Parag>
                </View>
                <Tabela tableHead={tableHead} tableData={tableData} />
                <View>
                    <Parag>Considerar consulta médica para diagnóstico diferencial para HPV.</Parag>
                    <Parag>Considere seguir o fluxograma abaixo.</Parag>
                    <Imagem source={require("@images/F028.png")} title={"TITULO"} number={"F028"} />
                    <Parag>Buscar parceria sexual para investigação.</Parag>
                </View>
                <View style={styles.containerBotao}>
                    <Botao
                        title="FINALIZAR"
                        onPress={() => navigation.navigate('001-Inicio')}
                    />
                </View>

            </ScrollView>


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
});

const tableHead = [
    <Text style={styles.textHead}>Crianças e Adolescentes</Text>,
    <Text style={styles.textHead}>PVHIV, Transplantados de orgãos sólidos, de Medula Óssea ou Pacientes Oncológicos</Text>,
]
const tableData = [
    [
        <Text style={styles.textTitle}>
            <Bold>2 doses (0 e 6 meses)</Bold>

        </Text>,

        <Text style={styles.textData}>
            3 doses (0, 2 e 6 meses)
        </Text>,
    ],
    [
        <Text style={styles.textTitle}>
            <Bold>Meninas de 9 a 14 anos</Bold>
        </Text>,

        <Text style={styles.textData}>
            Mulheres de 9 a 26 anos
        </Text>,
    ],
    [
        <Text style={styles.textTitle}>
            <Bold>Meninos de 11 a 14 anos</Bold>
        </Text>,

        <Text style={styles.textData}>
            Homens de 9 a 26 anos
        </Text>,
    ]
];
