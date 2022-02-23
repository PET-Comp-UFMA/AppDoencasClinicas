import React from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";

import Botao from "../components/Botao";
import Imagem from "../components/Imagem";


export default function T033({navigation}) {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={true}>
                <Text>
                O(a) usuário(a) apresenta lesões eritemato-papulosas de um a três milímetros de diâmetro, que
                rapidamente evoluíram para vesículas sobre base eritematosa, muito dolorosas e de localização
                variável na região genital?
                </Text>

               
                <Imagem source={require("@images/F019.png")} title={"Acompanhamento"} number={"F019"}/>
                <Imagem source={require("@images/F020.png")} title={"Acompanhamento"} number={"F020"}/>
                <Imagem source={require("@images/F021.png")} title={"Acompanhamento"} number={"F021"}/>
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
        backgroundColor : 'white',
        paddingTop      : 15,
    },

    containerBotao: {
        marginTop       :  30,
        width           : '100%'
    },
});
