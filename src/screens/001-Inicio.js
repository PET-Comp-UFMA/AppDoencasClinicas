import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';

import { useTheme } from '@react-navigation/native';
import Bold from '../components/Bold'
import Botao from '../components/Botao'

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
                       
                    <View style={styles.containerImage}>
                        <Image style={styles.image} source={require('../assets/icons/Logo.png')} />
                    </View>
                    <View style={{marginTop: 50}}>
                        <Text style={titulo.titulo}><Bold>Bem Vindo (a)</Bold></Text>
                        <Text>Enfermeiro (a), escolha uma das opções abaixo:</Text>
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
                        
                    </View>
                    <View style={styles.container}>
                        <Image style={styles.image2} source={require('../assets/icons/Logo2.png')} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex            : 1,
        alignItems      : 'center',
        flexDirection   : 'column',
        justifyContent  : 'space-between',
        marginTop: 20
    },
    containerImage: {
        justifyContent  : 'center', 
        alignItems      : 'center', 
        flexDirection   : 'column'
    },
    containerBotao: {
        marginTop       : 30,
        width           : '100%'
    },
    image: {
        height: 160,
        width: 300,
        resizeMode: 'contain',
    },
    image2: {
        height: 70,
        width: 120,
        resizeMode: 'contain',
    }
});