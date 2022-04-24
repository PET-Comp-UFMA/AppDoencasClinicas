import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Botao from '../../components/Botao';
import Parag from '../../components/Parag';
import { useTheme } from '@react-navigation/native';
import Imagem from '../../components/Imagem';
import Tabela from "../../components/Tabela";
import Bold from '../../components/Bold';

export default function T041({ navigation }) {
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
                    <Text>Ofereça ao seu paciente os testes rápidos e para mulheres oferte também o citológico de colo uterino.{'\n'}</Text>
                    <Text>Se seu paciente aceitou realizar os testes. Clique em ACEITOU REALIZAR OS TESTES. {'\n'}Caso contrário, clique em NÃO ACEITOU REALIZAR OS TESTES.</Text>
                </View>
            </ScrollView>
            
            <View style={styles.containerBotao}>
                    <Botao
                        title="ACEITOU FAZER OS TESTES"
                        onPress={() => navigation.navigate('063-TestesRapidos')}
                    />
                    <Botao
                        title="NÃO ACEITOU FAZER OS TESTES"
                        onPress={() => navigation.navigate('043-VerrugaAnogenital')}
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
