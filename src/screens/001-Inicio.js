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

import Logo from 'icons/Logo.svg';

// Configuração de texto para as próximas telas
Text.defaultProps       = Text.defaultProps || {}
Text.defaultProps.style =  { 
  color             : '#00172E',
  fontFamily        : 'Mulish-Regular',
  fontSize          : 21,
  marginHorizontal  : 20,
  textAlign         : 'center',
  lineHeight        : 35       
}

export default function T001({ navigation })  {
        return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>   
                    <View>
                        <Logo height={300} stroke={''} />
                    </View>

                    <View>
                        <Text style={styles.titulo}>Bem Vindo</Text>
                        <Text>Colega enfermeiro, escolha uma das opções abaixo:</Text>
                    </View>

                    <View style = {styles.containerBotao}>
                        <Botao
                            title = "Manejo Clínico"
                            onPress = { () => navigation.navigate('002-Manejo Clinico') }
                        />
                        <Botao
                            title = "Tira Dúvidas"
                            onPress = { () => navigation.navigate('102-TiraDuvidas') }
                        />
                        <Botao
                            title = "Sobre"
                            onPress = { () => navigation.navigate('') }
                        />
                    </View>
                </ScrollView>
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
    },
    containerBotao: {
        marginTop       : 30,
        width           : '100%'
    },
    titulo: {
        color           : '#111F4A',
        fontFamily      : 'Mulish-Bold',
        fontSize        : 30,
        marginHorizontal: 20,
        textAlign       : 'center'
    }
});