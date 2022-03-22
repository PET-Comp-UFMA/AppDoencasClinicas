import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';

import Botao from './src/components/Botao';
import Bold from './src/components/Bold';
import { useTheme } from '@react-navigation/native';

export default function T054({ navigation }) {
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

            <Text>
                Se você chegou aqui, seu paciente apresentou teste rápido reagente para HIV. {"\n"}{"\n"}

                Caso não tenha realizado os outros testes rápidos, pode oferecer. E para isso, clique em <Bold>
                TESTES RÁPIDOS</Bold> para acessar a seção Testes Rápidos.{"\n"}{"\n"}

                Caso contrário, clique em <Bold>PRÓXIMA</Bold>.{"\n"}
            </Text>

            <View style={styles.containerBotao}>
                <Botao 
                    title="TESTES RÁPIDOS"
                    onPress={() => {navigation.navigate("063-TestesRapidos")}}
                />
                <Botao 
                    title="PRÓXIMA"
                    onPress={() => {navigation.navigate("055-HIV")}}
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