import React from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";

import Botao from "../components/Botao";
import Imagem from "../components/Imagem";
import { useTheme } from '@react-navigation/native';

export default function T026({navigation}) {
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
            <ScrollView showsVerticalScrollIndicator={true}>
                <Text>
                Seu paciente apresenta ulceração de borda plana ou hipertrófica, bem delimitada, com fundo granuloso, de aspecto vermelho vivo e de sangramento fácil nas regiões de dobras e região perianal?
                </Text>

               
                <Imagem source={require("@images/F016.png")} title={"Acompanhamento"} number={"F016"}/>
                <Imagem source={require("@images/F017.png")} title={"Acompanhamento"} number={"F017"}/>
                <Imagem source={require("@images/F018.png")} title={"Acompanhamento"} number={"F018"}/>

            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="SIM"
                    onPress={() => navigation.navigate("030-UlceraAnogenital")}
                />
                
                <Botao
                    title="NÃO"
                    onPress={() => navigation.navigate("029-UlceraAnogenital")}
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
        justifyContent  : 'space-between',
        paddingTop      : 15,
    },

    containerBotao: {
        marginTop       :  30,
        width           : '100%'
    },
});
