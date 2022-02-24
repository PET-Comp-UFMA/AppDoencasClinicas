import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Botao from '@components/Botao';

import Seta from './../assets/icons/left.svg';

export default function T002({ navigation })  {

    console.log(<Seta width={120} height={40} />)
    return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>


                <View>
                    <Text>Aqui você irá reconhecer os sinais e sintomas apresentados pelo paciente ou colhidos durante o exame físico, além de poder integrar a oferta dos testes rápidos ao seu atendimento. Escolha uma opção:</Text>
                </View>

                </ScrollView>

                <View style = {styles.containerBotao}>
                    <Botao
                        title = "ANAMNESE E EXAME FÍSICO"
                        onPress = { () => navigation.navigate('003-Anamnese e Exame Fisico') }
                    />
                    <Botao
                        title = "TESTES RÁPIDOS"
                        onPress = { () => navigation.navigate('') }
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
        paddingTop      : 10
    },
    containerBotao: {
        marginTop       : 30,
        width           : '100%'
    },
});