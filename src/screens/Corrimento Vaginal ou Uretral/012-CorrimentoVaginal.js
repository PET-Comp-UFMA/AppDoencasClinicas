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

export default function T012({ navigation })  {
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
                        <Text>Então você deve considerar tratamento para vaginose bacteriana</Text>
                        <Tabela tableData={tableData}></Tabela>
                        <Text><Bold>OBSERVAÇÕES:</Bold></Text>
                        <Text>• Se a microscopia estiver disponível, o diagnóstico é realizado na presença de pelo menos três critérios de Amsel: {'\n'}</Text>
                        <Text style={styles.littleTextTitle}>✓ Corrimento vaginal homogêneo;</Text>
                        <Text style={styles.littleTextTitle}>✓ pH {'>'} 4,5;</Text>
                        <Text style={styles.littleTextTitle}>✓ Presença de clue cells no exame de lâmina a fresco;</Text>
                        <Text style={styles.littleTextTitle}>✓ Teste de Whiff positivo (odor fétido das aminas com adição de hidróxido de potássio a 10%).</Text>
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
});

const tableData = [[<Text style={styles.textTitle}><Bold>Primeira Opção (incluindo gestantes e lactantes)</Bold></Text>,
    <Text style={styles.textData}><Bold>Metronidazol</Bold> 250mg, 2 comprimidos, VO, 2x/dia, por 7 dias{"\n"}
    <Bold>OU{"\n"}</Bold>
    <Bold>Metronidazol</Bold> gel vaginal 100mg/g, um aplicador cheio via vaginal, à noite ao deitar-se, por 5 dias{"\n"}
    </Text>],
    [<Text style={styles.textTitle}><Bold>Segunda Opção</Bold></Text>,
    <Text style={styles.textData}><Bold>Clindamicina</Bold> 300mg, VO, 2x/dia, por 7 dias {"\n"}
    </Text>]];
