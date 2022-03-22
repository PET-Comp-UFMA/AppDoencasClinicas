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

export default function T039({ navigation }) {
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
                    <Parag>Seu paciente está apresenta verrugas na vulva, genitália e/ou região perianal?</Parag>
                </View>
                <Imagem source={require("../../assets/images/F025.png")} title={"Acompanhamento"} number={"F025"} />
                <Imagem source={require("../../assets/images/F026.png")} title={"Acompanhamento"} number={"F026"} />
                <Imagem source={require("../../assets/images/F027.png")} title={"Acompanhamento"} number={"F027"} />
                <View style={styles.containerBotao}>
                    <Botao
                        title="SIM"
                        onPress={() => navigation.navigate('040-VerrugaAnogenital')}
                    />
                    <Botao
                        title="NÃO"
                        onPress={() => navigation.navigate('042-VerrugaAnogenital')}
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