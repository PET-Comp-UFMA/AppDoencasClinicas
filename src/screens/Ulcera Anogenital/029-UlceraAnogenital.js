import React from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";

import Botao from "../../components/Botao";
import Imagem from "../../components/Imagem";
import { useTheme } from '@react-navigation/native';

export default function T029({navigation}) {
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
                O(a) paciente(a) apresenta lesões eritemato-papulosas de um a três milímetros de diâmetro, que
                rapidamente evoluíram para vesículas sobre base eritematosa, muito dolorosas e de localização
                variável na região genital?
                </Text>

               
                <Imagem source={require("../../assets/images/F019.png")} title={"Acompanhamento"} number={"F019"}/>
                <Imagem source={require("../../assets/images/F020.png")} title={"Acompanhamento"} number={"F020"}/>
                <Imagem source={require("../../assets/images/F021.png")} title={"Acompanhamento"} number={"F021"}/>
            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="SIM"
                    onPress={() => navigation.navigate("031-UlceraAnogenital")}
                />
                
                <Botao
                    title="NÃO"
                    onPress={() => navigation.navigate("032-UlceraAnogenital")}
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
