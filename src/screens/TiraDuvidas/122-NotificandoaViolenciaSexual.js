import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Bold from '@components/Bold';
import Parag from '@components/Parag';
import Botao from '@components/Botao';

export default function T120 ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View>
                    <Parag>Em casos de violência doméstica, sexual e/ou outras violências interpessoais é necessário realizar a notificação para alimentação do Sistema de Informação de Agravos de Notificação.</Parag>
                    <Parag>Desde 2011, com a publicação da Portaria nº 104, de 25 de janeiro de 2011, as notificações de violência doméstica, sexual e outras violências tornaram-se compulsórias para todos os serviços de saúde, públicos ou privados, do Brasil. Em 2014, a Portaria MS/GM nº 1.271, de 06 de junho de 2014, atualizou a lista de doenças e agravos de notificação compulsória atribuindo caráter imediato (em até 24 horas pelo meio de comunicação mais rápido) à notificação de casos de violência sexual e tentativa de suicídio para as Secretarias Municipais de Saúde.</Parag>
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



