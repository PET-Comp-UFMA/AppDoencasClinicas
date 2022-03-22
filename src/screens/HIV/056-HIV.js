import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';

import Botao from '../../components/Botao';
import Bold from '../../components/Bold';
import { useTheme } from '@react-navigation/native';

export default function T056({ navigation }) {
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
                    
                <Text>
                    Se seu paciente apresenta teste rápido para HIV não reagente, porém apresenta comportamentos de risco, considerar necessidade de PREP, PEP e outras opções.{"\n"}{"\n"}

                    Caso ele não apresente comportamentos de risco, pode clicar em <Bold>ACONSELHAMENTO</Bold>.
                </Text>

            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao 
                    title="PREP"
                    onPress={() => {navigation.navigate("057-HIV-PrEP")}}
                />
                <Botao 
                    title="PEP"
                    onPress={() => {navigation.navigate("058-HIV-PEP")}}
                />
                <Botao 
                    title="ACONSELHAMENTO"
                    onPress={() => {navigation.navigate("074-TesteNaoReagente")}}
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

    tabela: {
        marginTop: -5,
        marginBottom: 50
    },
    
    textTitle: { 
        fontSize: 18, 
        margin: 6,
        marginLeft: 20,
        textAlign: "left",
        fontFamily: "Mulish_Regular",
    },

    texto: {
        marginBottom: 10,

    },

    containerBotao: {
        marginTop       :  30,
    }
})