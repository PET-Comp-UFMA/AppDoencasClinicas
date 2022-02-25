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
import Bold from '@components/Bold';
import Botao from '@components/Botao';
import Imagem from '@components/Imagem';
import Tabela from '@components/Tabela';


export default function T011({ navigation })  {
        return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>
                    <View>
                        <Text>Então você deve considerar tratamento medicamentoso para vaginose bacteriana recorrente</Text>
                        <Tabela tableData={tableData}></Tabela>
                        <Text><Bold>OBSERVAÇÕES:</Bold></Text>
                        <Text>Se houver fitas para verificar pH vaginal, considere PH normal maior que 4.5.</Text>
                        <Text>Não é necessário tratar parcerias sexuais, exceto as assintomáticas.</Text>
                        <Text>Tratamento para gestantes e lactantes apenas via terminal.</Text>
                        <Text>Realizar aconselhamento sobre prevenção combinada e higiene.</Text>
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

const tableData = [[<Text style={styles.textTitle}><Bold>Recorrente</Bold></Text>,
    <Text style={styles.textData}><Bold>Metronidazol</Bold> 250mg, 2 comprimidos, VO, 2x/dia, por 10-14 dias{"\n"}
    <Bold>OU{"\n"}</Bold>
    <Bold>Metronidazol</Bold> gel vaginal 100mg/g, um aplicador cheio, via vaginal, 1x/dia, por 10 dias, seguido de tratamento supressivo com óvulo de ácido bórico intravaginal de 600mg ao dia por 21 dias e metronidazol gel vaginal 100mg/g, 2x/semana, por 4-6 meses{"\n"}
    </Text>]];
