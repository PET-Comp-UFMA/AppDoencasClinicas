import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    ColorPropType,
} from 'react-native';
import Botao from 'src/components/Botao';
import Parag from 'src/components/Parag';
import Bold from 'src/components/Bold';
import { useTheme } from '@react-navigation/native';

export default function T015({ navigation }) {
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
                    <Parag>Se você chegou aqui, o seu paciente apresentou teste rápido para Hepatite C reagente.</Parag>
                    <Parag>Considerar consulta médica para solicitação de exames laboratoriais e diagnóstico.</Parag>
                    <Parag>Realizar aconselhamento sobre prevenção combinada.</Parag>
                    <Parag>Após diagnóstico, realizar notificação.</Parag>
                    <Parag>Registre tudo!</Parag>
                    <Parag>Pronto? Se sim, é só clicar em <Bold>FINALIZAR</Bold> e será direcionado ao <Bold>MENU PRINCIPAL</Bold>.</Parag>
                </View>

            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="Finalizar"
                    onPress={() => navigation.navigate('001-Inicio')}
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
        paddingTop: 15
    },
    containerBotao: {
        marginTop: 0,
        width: '100%'
    },
});