import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

import Tabela from "./src/components/Tabela";
import Bold from "./src/components/Bold";
import Botao from './src/components/Botao';
import { useTheme } from '@react-navigation/native';

export default function T30({navigation}) {
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
                <Text>
                    Considere consulta médica para diagnóstico diferencial para donovanose.
                </Text>
               
                <Text>
                    Caso haja o diagnóstico para donovanose, você poderá considerar o tratamento medicamentoso indicado abaixo.
                </Text>
            </View>
            
            <Tabela tableHead={tableHead} tableData={tableData}/>
            
            <Text>
                Não havendo resposta na aparência da lesão nos primeiros dias de tratamento com ciprofloxacino, recomenda-se adicionar um aminoglicosídeo, como gentamicina 1mg/kg/dia, EV, 3x/dia, por pelo menos três semanas, ou até cicatrização das lesões.
            </Text>
            
            <Text>
                Em PVHIV, sugerem-se os mesmos esquemas terapêuticos; o uso de terapia parenteral com a gentamicina deve ser considerado nos casos mais graves.    
            </Text>
            
            <Text>
                O critério de cura é o desaparecimento da lesão, não tendo sido relatada infecção congênita. As sequelas da destruição tecidual ou obstrução linfática podem exigir correção cirúrgica.    
            </Text>
            
            <Text>
                Devido à baixa infectividade, não é necessário tratar as parcerias sexuais
            </Text>
            
            <Text>• Buscar parceria sexual para orientações{"\n"}</Text>

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
        justifyContent  : 'center',
        flexDirection   : 'column',
        justifyContent  : 'space-between',
        alignItems      : "center",
        paddingTop      : 15,
        paddingHorizontal: 8,
    },

    textPreTable:{
        marginBottom: 15
    },

    textFonte: {
        color: 'black',
        fontFamily: "Mulish_Regular",
        fontSize: 20,
        color: "#000",
        lineHeight: 35,
        textAlign: "center",
        paddingHorizontal: 8
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
    },

    comentarios: {
        marginBottom: 10
    }
})

const tableHead = [
    <Text style={styles.textHead}>IST</Text>,
    <Text style={styles.textHead}>Primeira Opção</Text>,
    <Text style={styles.textHead}>Alternativa</Text>
]
const tableData = [[
    <Text style={styles.textTitle}>
        <Bold>Donovanose</Bold>
    </Text> ,
    
    <Text style={styles.textData}>
       <Bold>Azitromicina</Bold> 500mg, 2 comprimidos, VO, 1x/semana, por pelo menos três semanas, ou até a cicatrização das lesões
    </Text>,

    <Text style={styles.textData}>
        <Bold>Doxiclina</Bold>ᵇ 100mg, 1 comprimido, VO, 2x/dia, por pelo menos 21 dias ou até o desaparecimento completo das lesões {"\n\n"}
        
        <Bold>OU{"\n\n"}</Bold>
        
        <Bold>Ciprofloxacino</Bold>ᵃ 500mg, ¹/₂ comprimido, VO, 2x/dia, por pelo menos 21 dias, ou até a cicatrização das lesões (dose total: 750mg) {"\n\n"}
        
        <Bold>OU{"\n\n"}</Bold>

        <Bold>Sulfametoxazol-trimetoprima</Bold> (400/80mg), 2 comprimidos, VO, 2x/dia, por no mínimo 3 semanas, ou até a cicatrização das lesões
    </Text>
]];
