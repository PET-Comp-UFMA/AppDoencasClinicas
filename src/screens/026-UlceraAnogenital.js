import React from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";

import Botao from "../components/Botao";
import Imagem from "../components/Imagem";


export default function T026({navigation}) {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={true}>
                <Text>
                Os seguintes sintomas estão{"\n"}
                associados?{"\n\n"}

                pápula, pústula ou exulceração indolor,{"\n"}
                que desaparece sem deixar sequela.{"\n"}

                Homem: sulco coronal, frênulo e{"\n"}
                prepúcio{"\n"}

                Mulher: parede vaginal posterior, colo{"\n"}
                uterino, fúrcula e outras partes da{"\n"}
                genitália externa{"\n\n"}


                Comprometimento ganglionar evolui{"\n"}
                com supuração e fistulização por{"\n"}
                orifícios múltiplos, que correspondem a{"\n"}
                linfonodos individualizados,{"\n"}
                parcialmente fundidos em uma grande{"\n"}
                massa.{"\n\n"}
            

                Podem ocorrer sintomas gerais, como{"\n"}
                febre, mal-estar, anorexia,{"\n"}
                emagrecimento, artralgia, sudorese{"\n"}
                noturna e meningismo.{"\n"}

                </Text>

               
                <Imagem source={require("@images/F013.png")} title={"Acompanhamento"} number={"F013"}/>
                <Imagem source={require("@images/F014.png")} title={"Acompanhamento"} number={"F014"}/>
                <Imagem source={require("@images/F015.png")} title={"Acompanhamento"} number={"F015"}/>

                <Text>
                Considerar consulta médica para{"\n"}
                diagnóstico diferencial para{"\n"}
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
                    onPress={() => navigation.navigate()}
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
        backgroundColor : 'white',
        paddingTop      : 15,
    },

    containerBotao: {
        marginTop       :  30,
        width           : '100%'
    },
});
