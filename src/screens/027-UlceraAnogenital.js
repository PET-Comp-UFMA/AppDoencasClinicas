import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

import Tabela from "../components/Tabela";
import Bold from "../components/Bold";
import Botao from '../components/Botao';

export default function T27({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        
        <ScrollView>
            <View style={{marginBottom: -25}}>
                <Text style={[styles.textPreTable, styles.textFonte]}>Sendo assim, você poderá considerar o tratamento medicamentoso conforme ilustra abaixo.{"\n"}</Text>
            </View>
            
            <Tabela tableHead={tableHead} tableData={tableData}/>
            
            <Text style={styles.textFonte}>
                As parcerias sexuais devem ser 
                tratadas. Se a parceria for sintomática,
                o tratamento deve ser realizado com
                os mesmos medicamentos do
                casoíndice. Se a parceria for
                assintomática, recomenda-se um dos
                tratamentos abaixo:{"\n"}

                <Bold>Azitromicina</Bold> 500mg, 2 comprimidos,
                VO, dose única
                {"\n"}<Bold>OU</Bold>{"\n"}
                <Bold>Doxiciclinab</Bold> 100mg, 1 comprimido,
                VO, 2x/ dia, por 7 dias.
                O prolongamento da terapia pode ser
                necessário até
                a resolução da
                sintomatologia. A antibioticoterapia
            
                não tem efeito expressivo na duração
                da
                linfadenopatia inguinal, mas os
                sintomas agudos são
                frequentemente
                erradicados de modo rápido. Os
            
                antibióticos não revertem sequelas
                como estenose
                retal ou elefantíase
                genital. 
            </Text>
        </ScrollView>
        <View style={styles.containerBotao}>
            <Botao 
                title="Finalizar"
                onPress={() => navigation.navigate("001-Inicio")}
            />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex            : 1,
        justifyContent  : 'center',
        flexDirection   : 'column',
        justifyContent  : 'space-between',
        alignItems      : "center",
        backgroundColor : 'white',
        paddingTop      : 15,
        paddingHorizontal: 16,
    },

    textFonte: {
        color: 'black',
        fontFamily: "Mulish_Regular",
        fontSize: 20,
        color: "#000",
        lineHeight: 35,
        textAlign: "center"
    },

    textTitle: { 
        fontSize: 16, 
        margin: 6,
        alignSelf: 'center',
        color: 'black',
        fontFamily: "Mulish_Regular",
    },

    tabela: {
        marginTop: -20
    },

    textHead: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18
    },

    textData: { 
        fontSize: 16, 
        margin: 6,
        textAlign: 'left',
        color: 'black',
        fontFamily: "Mulish_Regular",
    },

    containerBotao: {
        marginTop       :  30,
    }
})

const tableHead = [
    <Text style={styles.textHead}>IST</Text>,
    <Text style={styles.textHead}>Primeira Opção</Text>,
    <Text style={styles.textHead}>Alternativa</Text>
]
const tableData = [[
    <Text style={styles.textTitle}>
        <Bold>Linfogra-nuloma venéreo(LGV)</Bold>
    </Text> ,
    
    <Text style={styles.textData}>
       <Bold>Doxiciclina</Bold>ᵇ 100mg, VO, 1 comprimido, 2x/dia, por 21 dias
    </Text>,

    <Text style={styles.textData}>
        <Bold>Azitromicina</Bold> 500mg, 2 comprimidos, VO, 1x/semana, por 21 dias <Bold>(preferencial nas gestantes)</Bold>
    </Text>
]];
