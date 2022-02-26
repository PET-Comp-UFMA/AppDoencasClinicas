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
                Os seguintes sintomas estão
                associados?{"\n\n"}

                pápula, pústula ou exulceração indolor,
                que desaparece sem deixar sequela.{"\n"}

                Homem: sulco coronal, frênulo e
                prepúcio{"\n"}

                Mulher: parede vaginal posterior, colo
                uterino, fúrcula e outras partes da
                genitália externa{"\n\n"}


                Comprometimento ganglionar evolui
                com supuração e fistulização por
                orifícios múltiplos, que correspondem a
                linfonodos individualizados,
                parcialmente fundidos em uma grande
                massa.{"\n\n"}
            

                Podem ocorrer sintomas gerais, como
                febre, mal-estar, anorexia,
                emagrecimento, artralgia, sudorese
                noturna e meningismo.{"\n"}

                </Text>

               
                <Imagem source={require("@images/F013.png")} title={"Acompanhamento"} number={"F013"}/>
                <Imagem source={require("@images/F014.png")} title={"Acompanhamento"} number={"F014"}/>
                <Imagem source={require("@images/F015.png")} title={"Acompanhamento"} number={"F015"}/>

                <Text>
                Considerar consulta médica para
                diagnóstico diferencial para
                linfogranuloma venéreo.{"\n\n"}


                Então, os sintomas coincidem e o médico concorda?
                </Text>
            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="SIM"
                    onPress={() => navigation.navigate("027-UlceraAnogenital")}
                />
                
                <Botao
                    title="NÃO"
                    onPress={() => navigation.navigate("028-UlceraAnogenital")}
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
