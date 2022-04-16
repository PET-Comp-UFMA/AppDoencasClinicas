import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

import Tabela from "../../components/Tabela";
import Bold from "../../components/Bold";
import Botao from '../../components/Botao';
import { useTheme } from '@react-navigation/native';

export default function T27({navigation}) {
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
        
        <ScrollView>
            <View style={{marginBottom: -25}}>
                <Text>Sendo assim, você poderá considerar o tratamento medicamentoso conforme ilustra abaixo.{"\n"}</Text>
            </View>
            
            <Tabela tableHead={tableHead} tableData={tableData}/>
            
            <Text>
                • As parcerias sexuais devem ser 
                tratadas.{"\n"}
                
                • Se a parceria for sintomática,
                o tratamento deve ser realizado com
                os mesmos medicamentos do
                casoíndice.{"\n"}
                
                • Se a parceria for
                assintomática, recomenda-se um dos
                tratamentos abaixo:{"\n\n"}

                ✓<Bold>Azitromicina</Bold> 500mg, 2 comprimidos,
                VO, dose única
                {"\n"}<Bold>OU</Bold>{"\n"}
                ✓<Bold>Doxiciclina</Bold> 100mg, 1 comprimido,
                VO, 2x/ dia, por 7 dias.{"\n\n"}
                
                • O prolongamento da terapia pode
                ser necessário até a resolução da
                sintomatologia.{"\n"}
                • A antibioticoterapia
                não tem efeito expressivo na duração da
                linfadenopatia inguinal, mas os
                sintomas agudos são
                frequentemente erradicados de modo rápido.{"\n"}
                • Os antibióticos não revertem sequelas
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
       <Bold>Doxiciclina</Bold> 100mg, VO, 1 comprimido, 2x/dia, por 21 dias
    </Text>,

    <Text style={styles.textData}>
        <Bold>Azitromicina</Bold> 500mg, 2 comprimidos, VO, 1x/semana, por 21 dias <Bold>(preferencial nas gestantes)</Bold>
    </Text>
]];
