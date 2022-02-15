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


export default function T3({ navigation })  {
        return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>
                    <View>
                        <Text>Aqui você irá reconhecer os sinais e sintomas apresentados pelo paciente ou colhidos durante o exame físico, além de poder integrar a oferta dos testes rápidos ao seu atendimento. Escolha uma opção:</Text>
                    </View>

                </ScrollView>

                <View style = {styles.containerBotao}>
                    <Botao
                        title = "CORRIMENTO VAGINAL OU URETRAL"
                        onPress = { () => navigation.navigate('004-Corrimento Vaginal ou Uretral') }
                    />
                    <Botao
                        title = "ÚLCERA"
                        onPress = { () => navigation.navigate('025-UlceraAnogenital') }
                    />
                    <Botao
                        title = "VERRUGA ANOGENITAL"
                        onPress = { () => navigation.navigate('') }
                    />
                    <Botao
                        title = "SÍFILIS"
                        onPress = { () => navigation.navigate('') }
                    />
                    <Botao
                        title = "HIV"
                        onPress = { () => navigation.navigate('') }
                    />
                    <Botao
                        title = "HEPATITES B E C"
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
        paddingTop      : 15
    },
    containerBotao: {
        marginTop       : 30,
        width           : '100%'
    },
});