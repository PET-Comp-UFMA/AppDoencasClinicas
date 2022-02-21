import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Bold from '@components/Bold';
import Imagem from '@components/Imagem';
import Parag from '@components/Parag';
import Botao from '@components/Botao';

export default function T119 ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View>
                    <Parag>Se a vítima não for vacinada ou estiver com vacinação incompleta contra hepatite B, deve-se vacinar ou completar a vacinação.</Parag>
                    <Parag>Não se recomenda o uso rotineiro de IGHAHB, exceto se a vítima for suscetível e o responsável pela violência seja HBsAg reagente ou pertencente a um grupo de risco (pessoas que usam drogas, por exemplo).</Parag>
                    <Parag>Quando indicada, a IGHAHB deve ser aplicada o mais precocemente possível – até, no máximo, 14 dias após a exposição.</Parag>
                    <Parag>Você poderá escolher uma das opções abaixo. E ainda, clicar em <Bold>TIRA DÚVIDAS</Bold> para ir ao menu dessa seção, ou em <Bold>FINALIZAR</Bold> e ser direcionado ao <Bold>MENU PRINCIPAL</Bold>.</Parag>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="Tira Dúvidas"
                        onPress={() => navigation.navigate('102-TiraDuvidas')}
                    />
                    <Botao
                        title="Finalizar"
                        onPress={() => navigation.navigate('001-Inicio')}
                    />
                </View>

            </ScrollView>


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
        backgroundColor: 'white',
        paddingTop: 15,
        width: '100%'
    },
    containerBotao: {
        marginTop: 30,
        width: '100%'
    },
    texto: {
        marginBottom: 10,
        
    },
    textTitle: { 
    
        margin: 6,
        alignSelf: 'center',
        color: 'black',
        fontFamily: "Mulish-Regular",
    },

    tabela: {
        marginTop: -20
    },

    textData: { 
        fontSize: 16, 
        margin: 6,
        textAlign: 'left',
        color: 'black',
        fontFamily: "Mulish-Regular",
    },

    textHead: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18
    }
});



