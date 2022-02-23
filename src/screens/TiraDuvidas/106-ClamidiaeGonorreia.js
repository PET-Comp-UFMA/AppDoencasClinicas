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


export default function T106({ navigation }) {
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
                    <Imagem source={require("@images/F010.png")} title={""} number={"F010"}/>
                    <Imagem source={require("@images/F011.png")} title={""} number={"F011"}/>
                    <Imagem source={require("@images/F012.png")} title={""} number={"F012"}/>
                </View>

                <View>
                    <Parag>Caso tenha concluído, clique em <Bold>FINALIZAR</Bold>, e será direcionado ao menu principal.</Parag>
                    <Parag>Ou, se preferir, clique na seta para a <Bold>ESQUERDA</Bold> para relembrar algumas informações.</Parag>
                    <Parag>Ou ainda você poderá clicar em <Bold>TIRA DÚVIDAS</Bold> para ir ao menu dessa seção.</Parag>
                </View>

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