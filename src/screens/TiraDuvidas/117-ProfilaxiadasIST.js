import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import Bold from '@components/Bold';
import Parag from '@components/Parag';
import Botao from '@components/Botao';

export default function T117 ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View>
                    <Parag>A profilaxia das IST não virais está indicada nas situações de exposição com risco de transmissão, independentemente da presença ou gravidade das lesões físicas e idade.</Parag>
                    <Parag>Gonorreia, sífilis, infecção por clamídia, tricomoníase e cancroide podem ser prevenidos com o uso de medicamentos de reconhecida eficácia.</Parag>
                    <Parag>Algumas IST virais, como as infecções por HSV e HPV, ainda não possuem profilaxias específicas.</Parag>
                    <Parag>Diferentemente do que ocorre na profilaxia pós-exposição (PEP) da infecção pelo HIV, a prevenção das IST não virais pode ser eventualmente postergada, em função das condições de adesão, mas se recomenda a sua realização imediata, sempre que possível. </Parag>
                    <Parag>Você poderá escolher uma das opções abaixo. E ainda, clicar em <Bold>TIRA DÚVIDAS</Bold> para ir ao menu dessa seção, ou em <Bold>FINALIZAR</Bold> e ser direcionado ao <Bold>MENU PRINCIPAL</Bold>.</Parag>
                </View>
                

                <View style={styles.containerBotao}>
                    <Botao
                        title="PROFILAXIA DAS IST EM SITUAÇÃO DE VIOLÊNCIA SEXUAL"
                        onPress={() => navigation.navigate('118-ProfilaxiadasIST    ')}
                    />
                    <Botao
                        title="PROFILAXIA DA HEPATITE B EM SITUAÇÃO DE VIOLÊNCIA SEXUAL"
                        onPress={() => navigation.navigate('119-ProfilaxiadasHepatiteB')}
                    />
                    <Botao
                        title="PROFILAXIA DA INFECÇÃO PELO HIV EM SITUAÇÃO DE VIOLÊNCIA SEXUAL"
                        onPress={() => navigation.navigate('120-ProfilaxiadainfecçãoporHIV')}
                    />
                    <Botao
                        title="PREVENÇÃO DA GRAVIDEZ EM SITUAÇÃO DE VIOLÊNCIA SEXUAL"
                        onPress={() => navigation.navigate('121-PrevencaodaGravidez')}
                    />
                    <Botao
                        title="NOTIFICANDO A VIOLÊNCIA SEXUAL"
                        onPress={() => navigation.navigate('122-NotificandoaViolenciaSexual')}
                    />
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



