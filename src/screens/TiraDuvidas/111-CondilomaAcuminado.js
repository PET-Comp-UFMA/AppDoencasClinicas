import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
import Bold from './src/components/Bold';
import Imagem from './src/components/Imagem';
import Parag from './src/components/Parag';
import Botao from './src/components/Botao';
import { useTheme } from '@react-navigation/native';

export default function T110({ navigation }) {
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
                    <Parag><Bold>Agente causador:</Bold> HPV (sigla em inglês para papilomavírus humano).</Parag>
                    <Parag><Bold>Período de incubação:</Bold> aproximadamente entre 2 e 8 meses, mas pode demorar até 20 anos.</Parag>
                    <Parag><Bold>Manifestações clínicas:</Bold> lesões polimórficas, sendo as lesões pontiagudas denominadas condiloma acuminado. Costumam ser únicas ou múltiplas, achatadas ou papulosas, mas sempre papilomatosas. Superfície apresenta-se fosca, aveludada ou semelhante à da couve-flor. Apresentam-se da cor da pele, eritematosas ou hiperpigmentadas. Em geral são assintomáticas, mas podem ser pruriginosas, dolorosas, friáveis ou sangrantes.</Parag>
                </View>

                <View>
                    <Imagem source={require("./src/assets/images/F025.png")} title={""} number={"F025"} />
                    <Imagem source={require("./src/assets/images/F026.png")} title={""} number={"F026"} />
                    <Imagem source={require("./src/assets/images/F027.png")} title={""} number={"F027"} />
                </View>

                <View>
                    <Parag>Caso tenha concluído, clique em <Bold>FINALIZAR</Bold>, e será direcionado ao menu principal.</Parag>
                    <Parag>Ou, se preferir, clique na seta para a <Bold>ESQUERDA</Bold> para relembrar algumas informações.</Parag>
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