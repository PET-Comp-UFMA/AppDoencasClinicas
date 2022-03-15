import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

import Tabela from "@components/Tabela";
import Bold from "@components/Bold";
import Botao from '@components/Botao';
import { useTheme } from '@react-navigation/native';

export default function T31({navigation}) {
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
                    Considere consulta médica para diagnóstico diferencial para herpes genital.
                </Text>
               
                <Text>
                    Caso haja o diagnóstico para herpes genital, você poderá considerar o tratamento medicamentoso indicado abaixo.
                </Text>
            </View>
            
            <Tabela tableHead={tableHead} tableData={tableData}/>
            
            <Text>
              • O tratamento com antivirais é eficaz para redução da intensidade e duração dos episódios, quando realizado precocemente
            </Text>
            
            <Text>
              • O tratamento local pode ser feito com compressas de solução fisiológica ou degermante em solução aquosa, para higienização das lesões
            </Text>
            
            <Text>
              • Analgésicos orais podem ser utilizados, se necessário
            </Text>
            
            <Text>
              • É recomendado retorno em uma semana para reavaliação das lesões
            </Text>
            

            <Text>
              • A forma de transmissão, a possibilidade de infecção assintomática, o medo de rejeição por parte das parcerias sexuais e as preocupações sobre a capacidade de ter filhos são aspectos que devem ser abordados
            </Text>

            <Text>
              • É importante mencionar que não há associação entre herpes simples genital e câncer
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
    <Text style={styles.textHead}>Condição clínica</Text>,
    <Text style={styles.textHead}>Tratamento</Text>,
    <Text style={styles.textHead}>Comentários</Text>
]
const tableData = [[
    <Text style={styles.textTitle}>
        <Bold>Primeiro Episódio</Bold>
    </Text> ,
    
    <Text style={styles.textData}>
       Aciclovir 200mg, 2 comprimidos, VO, 3x/dia, por 7-10 dias {"\n"}<Bold>OU</Bold>{"\n"} Aciclovir 200mg, 1 comprimido, VO, 5x/dia(7h, 11h, 15h, 19h, 23h, 7h...), por 7-10 dias
    </Text>,

    <Text style={styles.textData}>
       Iniciar o tratamento o mais precocemente possível. O tratamento pode ser prolongado se a cicatrização estiver incompleta após 10 dias de terapia
    </Text>
],
[
  <Text style={styles.textTitle}>
      <Bold>Recidiva</Bold>
  </Text> ,
  
  <Text style={styles.textData}>
     Aciclovir 200mg, 2 comprimidos, VO, 3x/dia, por 5 dias {"\n"}<Bold>OU</Bold>{"\n"} Aciclovir 200mg, 4 comprimidos, VO, 2x/dia, por 5 dias
  </Text>,

  <Text style={styles.textData}>
     O tratamento deve ser iniciado preferencialmente no período prodrômico (aumento de sensibilidade local, ardor, dor, prurido e hiperemia da região genital)
  </Text>
],
[
  <Text style={styles.textTitle}>
      <Bold>Supressão de herpes genital (6 ou mais episódios/ano)</Bold>
  </Text> ,
  
  <Text style={styles.textData}>
     Aciclovir 200mg, 2 comprimidos, VO, 2x/dia, por até seis meses, podendo o tratamento ser prolongado por até 2 anos
  </Text>,

  <Text style={styles.textData}>
    Consideram-se elegíveis para o tratamento supressivo pacientes com episódios repetidos de herpes genital(mais de 6 ao ano)
  </Text>
],
[
  <Text style={styles.textTitle}>
      <Bold>Herpes genital em imunossuprimidos</Bold>
  </Text>,
  
  <Text style={styles.textData}>
     Aciclovir endovenoso, 5-10 mg/kg de peso, EV, de 8/8h,por 5 a 7 dias, ou até resolução clínica
  </Text>,

  <Text style={styles.textData}>
    Em caso de lesões extensas em pacientes com imunossupressão (usuários crônicos de corticoide, pacientes em uso de imunomoduladores, transplantados de órgãos sólidos e PVHIV), pode-se optar pelo tratamento endovenoso
  </Text>
],
[
  <Text style={styles.textTitle}>
      <Bold>Gestação</Bold>
  </Text>,
  
  <Text style={styles.textData}>
     Tratar o primeiro episódio em qualquer trimestre da gestação, conforme o tratamento para o primeiro episódio. {"\n"}
     Se a primoinfecção ocorreu na gestação ou se recidivas foram frequentes no período gestacional, pode-se realizar terapia supressiva, a partir da 36ª semana, com aciclovir 400mg, 3x/dia.
  </Text>,
],
];
