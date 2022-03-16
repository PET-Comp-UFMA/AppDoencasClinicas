import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';

import Botao from '@components/Botao';
import Bold from '@components/Bold';
import { useTheme } from '@react-navigation/native';

export default function T058({ navigation }) {
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
                    
                {/* TABELA AQUI */}
                
                <Text>
                    Pronto?{"\n\n"}
                    Se sim, é só clicar em FINALIZAR.
                </Text>

            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao 
                    title="Finalizar"
                    onPress={() => {navigation.navigate("001-Inicio.js")}}
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