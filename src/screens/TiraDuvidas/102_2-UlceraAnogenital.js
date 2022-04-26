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

export default function T102_2({ navigation }) {
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
                    <Text>Acerca do <Bold>Úlcera Anogenital</Bold>, escolha uma das opções:</Text>
                </View>

            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="Linfogranulama Venéreo (LGV)"
                    onPress={() => navigation.navigate('107-LinfogranulamaVenereo')}
                />

                <Botao
                    title="Cancróide"
                    onPress={() => navigation.navigate('108-Cancroide')}
                />

                <Botao
                    title="Herpes Genital"
                    onPress={() => navigation.navigate('109-HerpesGenital')}
                />

                <Botao
                    title="Danovanose"
                    onPress={() => navigation.navigate('110-Donovanose')}
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