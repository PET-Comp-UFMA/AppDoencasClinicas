import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Botao from '../../../components/Botao';
import Bold from '../../../components/Bold';
import Parag from '../../../components/Parag';
import { useTheme } from '@react-navigation/native';

export default function T089({ navigation }) {
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
                    <Parag>Caso não considere realizar o <Bold>RETESTE</Bold>, e o paciente concorde em prosseguir, clique em <Bold>MANEJO CLÍNICO </Bold>para prosseguir e será direcionado para as possíveis soluções.</Parag>
                </View>



            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="MANEJO CLÍNICO"
                    onPress={() => navigation.navigate('060-HepatiteBeC')}
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