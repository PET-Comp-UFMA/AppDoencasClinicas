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

export default function T106({ navigation }) {
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
                    <Parag><Bold>Agente causador:</Bold> Chlamydia trachomatis (clamídia).</Parag>
                    <Parag><Bold>Período de incubação:</Bold> clamídia (aproximadamente 15 dias) e gonorreia (2 a 5 dias, podendo variar de 1 a 10 dias).</Parag>
                    <Parag><Bold>Manifestações clínicas:</Bold> na grande maioria das vezes são cervicites assintomáticas, mas quando existem sintomas podem ser disúria, sangramento intermenstrual, dispareunia, podendo estar associado a corrimento vaginal, polaciúria, dor pélvica e/ou corimento uretral. Dor à manipulação do colo, muco cervical turvo ou amarelado e friabilidade cervical.</Parag>
                    <Parag><Bold>Diagnóstico diferencial:</Bold> para clamídia (gonorreia, tricomoniase) e para gonorreia (clamídia, tricomoníase, vaginose bacteriana).</Parag>
                </View>

                <View>
                    <Imagem source={require("src/assets/images/F010.png")} title={""} number={"F010"} />
                    <Imagem source={require("src/assets/images/F011.png")} title={""} number={"F011"} />
                    <Imagem source={require("src/assets/images/F012.png")} title={""} number={"F012"} />
                </View>

                <View>
                    <Parag>Caso tenha concluído, clique em <Bold>FINALIZAR</Bold>, e será direcionado ao menu principal.</Parag>
                    <Parag>Ou, se preferir, clique na seta para a <Bold>ESQUERDA</Bold> para relembrar algumas informações.</Parag>
                    <Parag>Ou ainda você poderá clicar em <Bold>TIRA DÚVIDAS</Bold> para ir ao menu dessa seção.</Parag>
                </View>



            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="Tira Dúvidas"
                    onPress={() => navigation.navigate('102-TiraDuvidas')}
                />
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