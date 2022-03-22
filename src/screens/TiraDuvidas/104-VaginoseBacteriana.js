import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
import Bold from 'src/components/Bold';
import Imagem from 'src/components/Imagem';
import Parag from 'src/components/Parag';
import Botao from 'src/components/Botao';
import { useTheme } from '@react-navigation/native';

export default function T103({ navigation }) {
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
                    <Parag><Bold>Agente causador:</Bold> múltiplos agentes, com predomínio de Gardnerella vaginalis.</Parag>
                    <Parag><Bold>Período de incubação:</Bold> 2 a 21 dias.</Parag>
                    <Parag><Bold>Manifestações clínicas:</Bold> corrimento vaginal fétido, branco-acinzentado, de aspecto fluido ou cremoso, algumoas vezes brilhoso.</Parag>
                    <Parag><Bold>Diagnóstico diferencial:</Bold> tricomoníase.</Parag>
                </View>

                <View>
                    <Imagem source={require("src/assets/images/F004.png")} title={"Acompanhamento"} number={"F004"} />
                    <Imagem source={require("src/assets/images/F005.png")} title={"Acompanhamento"} number={"F005"} />
                    <Imagem source={require("src/assets/images/F006.png")} title={"Acompanhamento"} number={"F006"} />
                </View>

                <View>
                    <Parag><Bold>Por se tratar de uma infecção endógena do trato reprodutivo, não é considerada uma IST.</Bold></Parag>
                </View>



            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="Próximo"
                    onPress={() => navigation.navigate('105-Tricomoniase')}
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