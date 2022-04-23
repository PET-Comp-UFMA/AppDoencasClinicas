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
import Parag from '@components/Parag';
import { useTheme } from '@react-navigation/native';

export default function T086({ navigation }) {
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
                    <Parag>Repita o procedimento para realizar o teste novamente. Conforme o resultado, escolha uma opção. <Bold>OBS.:</Bold> Caso o resultado seja <Bold>INVÁLIDO</Bold>, repita e notifique.</Parag>
                </View>



            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="RETESTE REAGENTE"
                    onPress={() => navigation.navigate('087-RetesteHepatiteB')}
                />
                <Botao
                    title="RETESTE NÃO REAGENTE"
                    onPress={() => navigation.navigate('091-RetesteHepatiteB')}
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