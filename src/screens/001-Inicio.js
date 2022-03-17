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

import Logo from '@icons/Logo.svg';

import { useTheme } from '@react-navigation/native';
import Bold from '@components/Bold'





export default function T001({ navigation })  {  
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

    // Título da tela
    const titulo = StyleSheet.create({
        titulo: {
            fontSize        : 35,
            marginHorizontal: 20,
            textAlign       : 'center',
            color           : colors.text
        }});
    
    
        return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>   
                    <View>
                        <Logo height={300} stroke={''} />
                    </View>

                    <View>
                        <Text style={titulo.titulo}><Bold>Bem Vindo</Bold></Text>
                        <Text>Colega enfermeiro, escolha uma das opções  abaixo:</Text>
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
                            onPress = { () => navigation.navigate('123-Sobre') }
                        />
                        <Botao
                            title = "(Debug) hepatite b e c"
                            onPress = { () => navigation.navigate('060-HepatiteBeC') }
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
    },
    containerBotao: {
        marginTop       : 30,
        width           : '100%'
    }
});