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
                    <Parag><Bold>Agente causador:</Bold> protozoário Trichomanus vaginalis.</Parag>
                    <Parag><Bold>Período de incubação:</Bold> 4 a 28 dias.</Parag>
                    <Parag><Bold>Manifestações clínicas:</Bold> corrimento vaginal intenso, amarelo-esverdeado, por vezes acinzentado, bolhoso e espumoso, acompanhado de odor fétido (na maioria dos casos lembrando peixe) e prurido eventual, que pode constituir reação alérgica à afecção. No exame especular, percebem-se microulcerações no colo uterino, que dão um aspecto de morango ou framboesa.</Parag>
                    <Parag><Bold>Diagnóstico diferencial:</Bold> vaginose bacteriana.</Parag>
                </View>

                <View>
                    <Imagem source={require("../../assets/images/F007.png")} title={"Acompanhamento"} number={"F007"} />
                    <Imagem source={require("../../assets/images/F008.png")} title={"Acompanhamento"} number={"F008"} />
                    <Imagem source={require("../../assets/images/F009.png")} title={"Acompanhamento"} number={"F009"} />
                </View>

                <View>
                    <Parag><Bold>A parceira sexual deve ser investigada e tratada.</Bold></Parag>
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