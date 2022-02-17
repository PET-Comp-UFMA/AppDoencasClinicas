import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import Bold from '@components/Bold';
import Imagem from '@components/Imagem';
import Parag from '@components/Parag';
import Botao from '@components/Botao';


export default function T103({ navigation }) {
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
                    <Imagem source={require("@images/F004.png")} title={"Acompanhamento"} />
                    <Imagem source={require("@images/F005.png")} title={"Acompanhamento"} />
                    <Imagem source={require("@images/F006.png")} title={"Acompanhamento"} />
                </View>

                <View>
                    <Parag><Bold>Por se tratar de uma infecção endógena do trato reprodutivo, não é considerada uma IST.</Bold></Parag>
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
        backgroundColor: 'white',
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