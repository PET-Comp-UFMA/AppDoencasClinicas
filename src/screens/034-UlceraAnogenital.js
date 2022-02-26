import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import Botao from "../components/Botao";
import Bold from "../components/Bold";
import { useTheme } from '@react-navigation/native';

export default function T034({navigation}) {
    // Atualiza as cores se o modo noturno estiver ligado
    const { colors } = useTheme();

	// Configuração de texto para as próximas telas
	Text.defaultProps       = Text.defaultProps || {}
	Text.defaultProps.style =  { 
  		color             : colors.text,
  		fontFamily        : 'Mulish_Regular',
  		fontSize          : 20,
  		marginHorizontal  : 20,
  		textAlign         : 'center',
  		lineHeight        : 35
	}


    return (
        <SafeAreaView style={styles.container}>
            
            <View  style={{marginTop: 20}}>
                <Text>
                Como seu paciente não apresenta nenhuma dessas queixas, clique em <Bold>MENU PRINCIPAL</Bold> e você será direcionado ao início, ou em <Bold>ANAMNESE E EXAME FÍSICO</Bold> para voltar para o menu dessa seção.
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
