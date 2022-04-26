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

export default function T102_1({ navigation }) {
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
                    <Text>Acerca do <Bold>Corrimento Vaginal ou Uretal</Bold>, escolha uma das opções:</Text>
                </View>

            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="Candidíase Vulvovaginal"
                    onPress={() => navigation.navigate('103-CandidiaseVulvovaginal')}
                />

                <Botao
                    title="Vaginose Bacteriana"
                    onPress={() => navigation.navigate('104-VaginoseBacteriana')}
                />

                <Botao
                    title="Tricomaníase"
                    onPress={() => navigation.navigate('105-Tricomoniase')}
                />

                <Botao
                    title="Clamídia e Gonorreia"
                    onPress={() => navigation.navigate('106-ClamidiaeGonorreia')}
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