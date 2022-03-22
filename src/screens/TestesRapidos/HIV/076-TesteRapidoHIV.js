import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Botao from './src/components/Botao';
import Parag from './src/components/Parag';
import { useTheme } from '@react-navigation/native';

export default function T076({ navigation }) {
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
                    <Parag>Qual foi o resultado?</Parag>
                </View>



            </ScrollView>
            <View style={styles.containerBotao}>
                <Botao
                    title="REAGENTE"
                    onPress={() => navigation.navigate('077-TesteRapidoHIV')}
                />
                <Botao
                    title="NÃO REAGENTE"
                    onPress={() => navigation.navigate('056-HIV')}
                />
                <Botao
                    title="INVÁLIDO"
                    onPress={() => navigation.navigate('077-TesteRapidoHIV')}
                />
                <Botao
                    title="INDISPONÍVEL"
                    onPress={() => navigation.navigate('073-Indisponivel')}
                />
                <Botao
                    title="RECUSOU FAZER"
                    onPress={() => navigation.navigate('072-Aconselhamento')}
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