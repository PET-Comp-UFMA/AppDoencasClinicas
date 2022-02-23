import React from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";

import Botao from "../components/Botao";
import Imagem from "../components/Imagem";
import Bold from "../components/Bold";
import Tabela from "../components/Tabela";

export default function T033({navigation}) {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                
            <View>
                <Text style={[styles.textFonte]}>
                    Considere consulta médica para diagnóstico diferencial para cancroide (cancro mole, cancro venéreo ou cancro de Durcrey).{"\n"}
                </Text>

               <Text style={[styles.textFonte]}>
                    Caso haja o diagnóstico para cancroide, você poderá considerar o tratamento medicamentoso indicado abaixo.
               </Text>
            </View>
               
            <Tabela tableHead={tableHead} tableData={tableData}/>
            
            <Text style={[styles.comentarios, styles.textFonte]}>
                O tratamento sistêmico deve ser acompanhado de
                medidas locais de higiene.
                O tratamento das parcerias sexuais é recomendado,
                mesmo quando assintomáticas. 
            </Text>
            <Text style={[styles.comentarios, styles.textFonte]}>• Buscar parceria sexual para orientações{"\n"}</Text>
            <Text>Se você já alcançou seu objetivo, clique em <Bold>FINALIZAR</Bold> e retornará para o início.</Text>
            
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
        alignItems      : 'center',
        justifyContent  : 'center',
        flexDirection   : 'column',
        justifyContent  : 'space-between',
        backgroundColor : 'white',
        paddingTop      : 15,
        paddingHorizontal: 8
    },

    containerBotao: {
        marginTop       :  30,
        width           : '100%'
    },

    textHead: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18
    },
    
    comentarios: {
        marginBottom: 10
    },

    textFonte: {
        color: 'black',
        fontFamily: "Mulish-Regular",
        fontSize: 22,
        color: "#000",
        lineHeight: 35,
        textAlign: "center",
        paddingHorizontal: 8
    },

    textData: { 
        fontSize: 16, 
        margin: 6,
        textAlign: 'left',
        color: 'black',
        fontFamily: "Mulish-Regular",
    },
});

const tableHead = [
    <Text style={styles.textHead}>IST</Text>,
    <Text style={styles.textHead}>Primeira Opção</Text>,
    <Text style={styles.textHead}>Alternativa</Text>
]

const tableData = [[
    <Text style={styles.textData}><Bold>Cancroide</Bold></Text>,
    <Text style={styles.textData}>
        <Bold>Azitromicina</Bold> 500mg, 2
        comprimidos,
        VO, dose
        única
    </Text>,
    <Text style={styles.textData}>
        <Bold>Ceftriaxona</Bold> 250mg, IM,
        dose única
        <Bold>{"\n\n"}OU{"\n\n"}</Bold>
       <Bold> Ciprofloxacinoa</Bold> 500mg, 1
        comprimido, VO, 2x/ dia,
        por 3 dias
    </Text>
]]