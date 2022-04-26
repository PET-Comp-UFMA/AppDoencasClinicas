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

export default function T109({ navigation }) {
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
                    <Parag><Bold>Agente causador:</Bold> Os HSV tipos 1 e 2 pertencem à família Herpesviridae, da qual fazem parte o citomegalovírus (CMV), o vírus da varicela zoster, o vírus Epstein-Barr e o vírus do herpes humano.</Parag>
                    <Parag><Bold>Período de incubação:</Bold> 10 a 15 dias.</Parag>
                    <Parag><Bold>Manifestações clínicas:</Bold> lesões eritemato-papulosas de um a três milímetros de diâmetro, que rapidamente evoluem para vesículas sobre base eritematosa, muito dolorosas e de localização variável na região genital. O conteúdo dessas vesículas é geralmente citrino, raramente turvo.</Parag>
                    <Parag><Bold>Diagnóstico diferencial:</Bold> cancroide, a sífilis, o LGV, a donovanose e as ulcerações traumáticas.</Parag>
                </View>

                <View>
                    <Imagem source={require("../../assets/images/F019.png")} title={""} number={"F019"} />
                    <Imagem source={require("../../assets/images/F020.png")} title={""} number={"F020"} />
                    <Imagem source={require("../../assets/images/F021.png")} title={""} number={"F021"} />
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