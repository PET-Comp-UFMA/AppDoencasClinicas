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

export default function T127({ navigation }) {
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
                    <Text>Em casos de acidentes com material biológico que oferecem riscos de exposição ao HIV, hepatite B e hepatite C.</Text>
                    <Text>Tendo em vista isso, selecione uma opção:</Text>
                </View>


                <View style={styles.containerBotao}>
                    <Botao
                        title="CUIDADOS LOCAIS"
                        onPress={() => navigation.navigate('128-CuidadosLocais')}
                    />
                    <Botao
                        title="ACOLHIMENTO/ACONSELHAMENTO"
                        onPress={() => navigation.navigate('129-Acolhimento')}
                    />
                    <Botao
                        title="TESTAGEM"
                        onPress={() => navigation.navigate('130-Testagem')}
                    />
                    <Botao
                        title="CONDUTA APÓS TESTAGEM"
                        onPress={() => navigation.navigate('131-CondutaAposTestagem')}
                    />
                    <Botao
                        title="INDICAÇÃO DE PROFILAXIA"
                        onPress={() => navigation.navigate('132-IndicacaoProfilaxia')}
                    />
                    <Botao
                        title="FINALIZAR"
                        onPress={() => navigation.navigate('001-Inicio')}
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