import React from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";

import Botao from "./src/components/Botao";
import Imagem from "./src/components/Imagem";
import { useTheme } from '@react-navigation/native';


export default function T032({navigation}) {
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
                O(a) usuário(a) apresenta lesões dolorosas, geralmente múltiplas, com borda irregular, apresentando contornos eritemato-edematosos e fundo heterogêneo, recoberto por exsudato necrótico, amarelado, com odor fétido?
                </Text>
                <Imagem source={require("./src/assets/images/F022.png")} title={"Acompanhamento"} number={"F022"}/>
                <Imagem source={require("./src/assets/images/F023.png")} title={"Acompanhamento"} number={"F023"}/>
                <Imagem source={require("./src/assets/images/F024.png")} title={"Acompanhamento"} number={"F024"}/>
            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="SIM"
                    onPress={() => navigation.navigate("033-UlceraAnogenital")}
                />
                
                <Botao
                    title="NÃO"
                    onPress={() => navigation.navigate("034-UlceraAnogenital")}
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
