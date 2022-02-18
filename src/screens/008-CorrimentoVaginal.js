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


export default function T008({ navigation })  {
        return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>
                    <View>
                        <Text>Então você deve considerar tratamento medicamentoso para candidíase volvovaginal</Text>
                        <Tabela tableData={tableData}></Tabela>
                        <Text></Text>
                        <Text><Bold>OBSERVAÇÕES:</Bold></Text>
                        <Text>Se houver fitas para verificar pH vaginal, considere PH normal (4.5).</Text>
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
        backgroundColor : 'white',
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
        fontFamily: "Mulish-Regular",
    },
    textTitle: { 
        fontSize: 16, 
        margin: 6,
        alignSelf: 'center',
        color: 'black',
        fontFamily: "Mulish-Regular",
    },
});

const tableData = [[<Text style={styles.textTitle}><Bold>Primeira Opção</Bold></Text>,
    <Text style={styles.textData}><Bold>Miconazol</Bold> creme a 2% ou outro imidazólicos, via vaginal, um aplicador cheio, à noite ao deitar-se, por 7 dias    {"\n"}
    <Bold>OU{"\n"}</Bold>
    <Bold>Nistatina</Bold> 100.000 UI, uma aplicação, via vaginal, à noite ao deitar-se, por 14 dias{"\n"}
    </Text>],
    [<Text style={styles.textTitle}><Bold>Segunda Opção</Bold></Text>,
    <Text style={styles.textData}><Bold>Fluconazol</Bold> 150mg, VO, dose única {"\n"}
    <Bold>OU{"\n"}</Bold>
    <Bold>Itraconazol</Bold> 100mg, 2 comprimidos, VO, 2x/dia, por dia
    </Text>]];
