import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    Linking
} from 'react-native';
import Bold from '../../components/Bold';
import Parag from '../../components/Parag';
import Botao from '../../components/Botao';
import Imagem from '../../components/Imagem';
import { useTheme } from '@react-navigation/native';

export default function T309({ navigation }) {
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
                        <Parag>Os pacientes devem realizar hemograma, teste de creatinina (ou clearance de creatinina estimado) e exame de função hepática ao início de tratamento e, sempre que clinicamente indicado, devem repetir esses exames durante o tratamento.</Parag>
                        <Parag>Pacientes em uso de ribavirina devem realizar hemograma e teste de creatinina nas semanas 4, 8 e 12 para avaliar anemia, ou com maior frequência, caso necessário.</Parag>
                        <Parag>Os medicamentos utilizados para o tratamento da hepatite C aguda e crônica são teratogênicos ou não possuem dados que comprovem segurança na gestação; por isso, são contraindicados durante esse período.</Parag>
                        <Parag><Text onPress={() => {Linking.openURL('https://www.gov.br/aids/pt-br/centrais-de-conteudo/pcdts/2017/hepatites-virais/pcdt_hepatite_c_06_2019_isbn.pdf/@@download/file/pcdt_hepatite_c_06_2019_isbn.pdf')}}>
                        Mais informações, acesse:{'\n'} https://www.gov.br/aids/pt-br/centrais-de-conteudo/pcdts/2017/hepatites-virais/pcdt_hepatite_c_06_2019_isbn.pdf/@@download/file/pcdt_hepatite_c_06_2019_isbn.pdf
                    </Text></Parag>
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
    },
    hiperlink: {
        color: "blue",
        fontFamily        : 'Mulish_Regular',
        fontSize          : 20,
        marginHorizontal  : 20,
        textAlign         : 'center',
        lineHeight        : 35
    }
});



