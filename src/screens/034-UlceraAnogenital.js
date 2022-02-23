import React from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";

import Botao from "../components/Botao";
import Imagem from "../components/Imagem";


export default function T034({navigation}) {


    return (
        <SafeAreaView style={styles.container}>
           
                <Text>
                Como seu paciente não apresenta nenhua dessas queixas, clique em MENU PRINCIPAL e você será direcionado ao iínicio, ou em ANAMNESE E EXAME FÍSICO para voltar para o menu dessa seção.
                </Text>


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
        justifyContent  : 'center',
        flexDirection   : 'column',
        backgroundColor : 'white',
        paddingTop      : 15,
    },

    containerBotao: {
        marginTop:  60,     
        marginBottom       :  100,     
        width           : '100%'
    },
});
