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
import Tabela from '../../components/Tabela';
import { useTheme } from '@react-navigation/native';

export default function T118({ navigation }) {
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
    <Text style={styles.textHead}>IST</Text>,
    <Text style={styles.textHead}>Medicação</Text>,
    <Text style={styles.textHead}>Adultos e adolescentes com mais de 45 kg, incluindo gestantes</Text>,
    <Text style={styles.textHead}>Crianças e adolescentes com menos de 45 kg</Text>,
]
const tableData = [
    [
        <Text style={styles.textData}>
            Sífilis
        </Text>,

        <Text style={styles.textData}>
            Benzilpenicilina benzatina
        </Text>,

        <Text style={styles.textData}>
            2,4 milhões UI, IM (1,2 milhão UI em cada glúteo) em dose única
        </Text>,

        <Text style={styles.textData}>
            50.000 UI/kg, IM, dose única (dose máxima total: 2,4 milhões UI)
        </Text>,
    ],

    [
        <Text style={styles.textData}>
            Gonorreia
        </Text>,

        <Text style={styles.textData}>
            Ceftriaxona + azitromicina
        </Text>,

        <Text style={styles.textData}>
            Ceftriaxona: 500mg, 1 ampola, IM, dose única + Azitromicina: 500mg, 2 comprimidos, VO, dose única (total dose: 1g)
        </Text>,

        <Text style={styles.textData}>
            Ceftriaxona: 125mg, IM, dose única + Azitromicina: 20mg/kg de peso, VO, dose única (dose máxima total: 1g)
        </Text>,
    ],

    [
        <Text style={styles.textData}>
            Infecção por clamídia
        </Text>,

        <Text style={styles.textData}>
            Azitromicina
        </Text>,

        <Text style={styles.textData}>
            500mg, 2 comprimidos, VO, dose única (dose total: 1g)
        </Text>,

        <Text style={styles.textData}>
            20mg/kg de peso, VO, dose única (dose máxima total: 1g)
        </Text>,
    ],

    [
        <Text style={styles.textData}>
            Tricomoníase
        </Text>,

        <Text style={styles.textData}>
            Metronidazol
        </Text>,

        <Text style={styles.textData}>
            500mg, 4 comprimidos VO, dose única (dose total: 2g)
        </Text>,

        <Text style={styles.textData}>
            5 mg/kg/dia, divididos em 3 doses/dia, por 7 dias (dose diária máxima: 2g)
        </Text>,
    ],


];


