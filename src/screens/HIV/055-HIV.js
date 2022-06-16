import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';

import Botao from '../../components/Botao';
import Bold from '../../components/Bold';
import { useTheme } from '@react-navigation/native';
import Tabela from "../../components/Tabela";

export default function T055({ navigation }) {
    // Atualiza as cores se o modo noturno estiver ligado
    const { colors } = useTheme();

    // Configuração de texto para as próximas telas
    Text.defaultProps = Text.defaultProps || {}
    Text.defaultProps.style = {
        color: colors.text,
        fontFamily: 'Mulish_Regular',
        fontSize: 20,
        marginHorizontal: 20,
        textAlign: 'center',
        lineHeight: 35
    }
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                    
                <Text>
                    Considerar consulta médica para diagnóstico diferencial para HIV.{"\n"}{"\n"}
                    Solicitar exames laboratoriais.{"\n"}{"\n"}
                    Realizar aconselhamento sobre prevenção combinada.{"\n"}{"\n"}
                    Iniciar a cascata de cuidado contínuo do HIV.{"\n"}{"\n"}
                </Text>

                <Tabela tableStyle={styles.tabela} customStyle={styles.textTitle} tableData={tableData}/>

                <Text>
                    Após diagnóstico, realizar notificação. Registre tudo!{"\n"}{"\n"}

                    Pronto?{"\n"}
                    Se sim, é so clicar em <Bold>FINALIZAR</Bold> e será direcionado para o <Bold>MENU PRINCIPAL</Bold>    
                </Text>
            
            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao 
                    title="PRÓXIMA"
                    onPress={() => {navigation.navigate("059-TesteNaoReagente")}}
                />
                <Botao 
                    title="FINALIZAR"
                    onPress={() => {navigation.navigate("001-Inicio")}}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',

        paddingTop: 15,
        width: '100%'
    },

    containerBotao: {
        marginTop: 30,
        width: '100%'
    },

    tabela: {
        marginTop: -5,
        marginBottom: 50
    },
    
    textTitle: { 
        fontSize: 18, 
        margin: 6,
        marginLeft: 20,
        textAlign: "left",
        fontFamily: "Mulish_Regular",
    },

    texto: {
        marginBottom: 10,

    },

    containerBotao: {
        marginTop       :  30,
    }
})

const tableData = [
    [   <Text>
            1) <Bold>Diagnóstico</Bold> oportuno
        </Text>],
    
    [   <Text>
            2) <Bold>Vinculação</Bold> do indivíduo HIV positivo a um serviço de saúde
        </Text>],
    
    [   <Text>
            3) Sua <Bold>retenção</Bold> no segmento, por meio de acompanhamento e realização de exames periódicos
        </Text>],
    
    [   <Text>
            4) Início da TARV e sua promoção para uma boa <Bold>adesão ao tratamento</Bold>, a fim de alcançar os objetivos finais do cuidado
        </Text>],

    [   <Text>
            5) A <Bold>supressão da carga viral</Bold> e o alcance de uma qualidade de vida comparável a das pessoas que não possuem o HIV
        </Text>]   
];