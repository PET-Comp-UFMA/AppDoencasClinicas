import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    Text
} from 'react-native';
import Bold from '../../components/Bold';
import Parag from '../../components/Parag';
import Botao from '../../components/Botao';
import Imagem from '../../components/Imagem';
import { useTheme } from '@react-navigation/native';

export default function T311({ navigation }) {
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
                    <Parag>O EXAME FÍSICO DEVE SEGUIR A ROTINA PROPEDÊUTICA</Parag>
                    <Parag>Sinais clínicos que podem estar relacionados à infecção pelo HIV e que devem ser investigados no exame físico inicial</Parag>
                </View>
                <View style={styles.containerImage}>
                    <Imagem source={require("../../assets/images/F051.png")} title={""} number={"F051"} />
                </View>
            </ScrollView>

            <View style={styles.containerBotao}>
            <Botao
                    title="MENU ANTERIOR"
                    onPress={() => navigation.navigate('310-HIV')}
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
    containerImage: {
        justifyContent  : 'center', 
        alignItems      : 'center', 
        flexDirection   : 'column'
    },
    image: {
        height: 238,
        width: 415,
        resizeMode: 'contain'
    }
});



