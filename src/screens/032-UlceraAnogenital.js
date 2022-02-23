import React from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";

import Botao from "../components/Botao";
import Imagem from "../components/Imagem";


export default function T032({navigation}) {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={true}>
                <Text>
                O(a) usuário(a) apresenta lesões dolorosas, geralmente múltiplas, com borda irregular, apresentando contornos eritemato-edematosos e fundo heterogêneo, recoberto por exsudato necrótico, amarelado, com odor fétido?
                </Text>
                <Imagem source={require("@images/F022.png")} title={"Acompanhamento"} number={"F022"}/>
                <Imagem source={require("@images/F023.png")} title={"Acompanhamento"} number={"F023"}/>
                <Imagem source={require("@images/F024.png")} title={"Acompanhamento"} number={"F024"}/>
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
        backgroundColor : 'white',
        paddingTop      : 15,
    },

    containerBotao: {
        marginTop       :  30,
        width           : '100%'
    },
});
