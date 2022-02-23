import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import Botao from "../components/Botao";
import Bold from "../components/Bold";


export default function T034({navigation}) {


    return (
        <SafeAreaView style={styles.container}>
            
            <View  style={{marginTop: 20}}>
                <Text>
                Como seu paciente não apresenta nenhuma dessas queixas, clique em <Bold>MENU PRINCIPAL</Bold> e você será direcionado ao iínicio, ou em <Bold>ANAMNESE E EXAME FÍSICO</Bold> para voltar para o menu dessa seção.
                </Text>
            </View>


            <View style={styles.containerBotao}>
                <Botao
                    title="MENU PRINCIPAL"
                    onPress={() => navigation.navigate("001-Inicio")}
                />
                
                <Botao
                    title="ANAMNESE E EXAME FÍSICO"
                    onPress={() => navigation.navigate("003-Anamnese e Exame Fisico")}
                />  
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex            : 1,
        alignItems      : 'center',
        justifyContent  : 'space-between',
        flexDirection   : 'column',
        backgroundColor : 'white'
    },

    containerBotao: {   
        width           : '100%'
    },
});
