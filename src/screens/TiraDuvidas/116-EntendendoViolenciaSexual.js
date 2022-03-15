import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
import Bold from '@components/Bold';
import Parag from '@components/Parag';
import Botao from '@components/Botao';
import { useTheme } from '@react-navigation/native';

export default function T116({ navigation }) {
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
                    <Parag>A violência sexual pode acontecer em espaços públicos e privados, causar traumas e ferimentos visíveis e invisíveis, e, em algumas situações, levar à morte.</Parag>
                    <Parag><Bold>Pode ser entendida como:</Bold> um ato sexual ou tentativa indesejada; <Bold>OU</Bold> um comentário, um contato (toque) ou qualquer interação sexual indesejada, assim como qualquer tentativa relacionada.</Parag>
                    <Parag>Em âmbito nacional, destacam-se a Lei nº 12.845/2013308, que dispõe sobre o atendimento obrigatório e integral de pessoas em situação de violência sexual na rede do SUS e o Decreto nº 7.958/2013309, que estabelece diretrizes para o atendimento humanizado às vítimas de violência sexual pelos profissionais da área de segurança pública e da rede de atendimento do SUS.</Parag>
                    <Parag>No caso de violência sexual e tentativas de suicídio, a notificação deve ser realizada de forma imediata (em até 24 horas) na esfera municipal, com o propósito de garantir a intervenção oportuna nos casos (Portaria MS/GM nº 204/2016).</Parag>
                    <Parag>Nos casos de violência contra criança, adolescente e pessoa idosa, os órgãos de proteção devem ser comunicados imediatamente, a exemplo do conselho tutelar, vara da infância, conselho da pessoa idosa ou outros órgãos referentes a essas competências.</Parag>
                    <Parag>Cabe à equipe de saúde acolher e fornecer orientações às pessoas quanto aos seus direitos e à importância de buscar proteção e demais providências legais.</Parag>
                    <Parag>A profilaxia das IST não virais está indicada nas situações de exposição com risco de transmissão, independentemente da presença ou gravidade das lesões físicas e idade.</Parag>
                    <Parag>Gonorreia, sífilis, infecção por clamídia, tricomoníase e cancroide podem ser prevenidos com o uso de medicamentos de reconhecida eficácia.</Parag>
                    <Parag>Algumas IST virais, como as infecções por HSV e HPV, ainda não possuem profilaxias específicas.</Parag>
                    <Parag>Diferentemente do que ocorre na profilaxia pós-exposição (PEP) da infecção pelo HIV, a prevenção das IST não virais pode ser eventualmente postergada, em função das condições de adesão, mas se recomenda a sua realização imediata, sempre que possível.</Parag>
                </View>




            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="profilaxia das ist"
                    onPress={() => navigation.navigate('117-ProfilaxiadasIST')}
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



