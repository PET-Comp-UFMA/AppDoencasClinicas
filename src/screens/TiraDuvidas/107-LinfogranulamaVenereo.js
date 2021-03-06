import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
import Bold from '../../components/Bold';
import Imagem from '../../components/Imagem';
import Parag from '../../components/Parag';
import Botao from '../../components/Botao';
import { useTheme } from '@react-navigation/native';

export default function T107({ navigation }) {
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
                    <Parag><Bold>Agente causador:</Bold> Chlamydia trachomatis, sorotipos L1, L2 e L3.</Parag>
                    <Parag><Bold>Período de incubação:</Bold> 3 a 30 dias.  </Parag>
                    <Parag><Bold>Manifestações clínicas:</Bold> a mais comum é a linfadenopatia inguinal e/ou femoral.</Parag>
                    <Parag><Bold>Evolução da doença:</Bold> inoculação, disseminação linfática regional e sequelas.</Parag>
                    <Parag><Bold>Diagnóstico diferencial:</Bold> adenite inguinal, elefantíase genital e estenose uretral ou retal.</Parag>
                </View>

                <View>
                    <Imagem source={require("../../assets/images/F013.png")} title={""} number={"F013"} />
                    <Imagem source={require("../../assets/images/F014.png")} title={""} number={"F014"} />
                    <Imagem source={require("../../assets/images/F015.png")} title={""} number={"F015"} />
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