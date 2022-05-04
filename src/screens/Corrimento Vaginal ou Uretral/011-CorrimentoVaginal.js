import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    ColorPropType,
} from 'react-native';
import Bold from '../../components/Bold';
import Botao from '../../components/Botao';
import Imagem from '../../components/Imagem';
import Tabela from '../../components/Tabela';
import { useTheme } from '@react-navigation/native';

export default function T011({ navigation })  {
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
        return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>
                    <View>
                        <Text>Então você deve considerar tratamento medicamentoso para vaginose bacteriana recorrente</Text>
                        <Tabela tableData={tableData}></Tabela>
                        <Text><Bold>OBSERVAÇÕES:</Bold></Text>
                        <Text>• Se a microscopia estiver disponível, o diagnóstico é realizado na presença de pelo menos três critérios de Amsel: {'\n'}</Text>
                        <Text style={[styles.littleTextTitle, {color: colors.text}]}>✓ Corrimento vaginal homogêneo;</Text>
                        <Text style={[styles.littleTextTitle, {color: colors.text}]}>✓ pH {'>'} 4,5;</Text>
                        <Text style={[styles.littleTextTitle, {color: colors.text}]}>✓ Presença de clue cells no exame de lâmina a fresco;</Text>
                        <Text style={[styles.littleTextTitle, {color: colors.text}]}>✓ Teste de Whiff positivo (odor fétido das aminas com adição de hidróxido de potássio a 10%).</Text>
                        <Text>{'\n'}• Não é necessário tratar parcerias sexuais, exceto as assintomáticas.</Text>
                        <Text>• Tratamento para gestantes e lactantes apenas via terminal.</Text>
                        <Text>• Realizar aconselhamento sobre prevenção combinada e higiene.</Text>
                    </View>
                </ScrollView>

                <View style = {styles.containerBotao}>
                    <Botao
                        title = "FINALIZAR"
                        onPress = { () => navigation.popToTop() }
                    />
                </View>
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex            : 1,
        alignItems      : 'center',
        justifyContent  : 'center',
        flexDirection   : 'column',
        justifyContent  : 'space-between',
        paddingTop      : 15
    },
    containerBotao: {
        marginTop       : 0,
        width           : '100%'
    },
    textData: { 
        fontSize: 12, 
        margin: 6,
        alignSelf: 'center',
        color: 'black',
        fontFamily: "Mulish_Regular",
    },
    textTitle: { 
        fontSize: 16, 
        margin: 6,
        alignSelf: 'center',
        color: 'black',
        fontFamily: "Mulish_Regular",
    },
    littleTextTitle: {
        fontSize: 17,
        color: 'black',
        alignSelf: 'center',
        fontFamily: 'Mulish_Regular',
        textAlign: 'center'
    }
});

const tableData = [[<Text style={styles.textTitle}><Bold>Recorrente</Bold></Text>,
    <Text style={styles.textData}><Bold>Metronidazol</Bold> 250mg, 2 comprimidos, VO, 2x/dia, por 10-14 dias{"\n"}
    <Bold>OU{"\n"}</Bold>
    <Bold>Metronidazol</Bold> gel vaginal 100mg/g, um aplicador cheio, via vaginal, 1x/dia, por 10 dias, seguido de tratamento supressivo com óvulo de ácido bórico intravaginal de 600mg ao dia por 21 dias e metronidazol gel vaginal 100mg/g, 2x/semana, por 4-6 meses{"\n"}
    </Text>]];
