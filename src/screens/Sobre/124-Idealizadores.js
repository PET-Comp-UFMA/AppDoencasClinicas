import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    Linking
} from 'react-native';
import Botao from '../../components/Botao';
import Imagem from '../../components/Imagem';
import Bold from '../../components/Bold';
import Underline from '../../components/Underline';

import { useTheme } from '@react-navigation/native';
export default function T124({ navigation })  {

    // Atualiza as cores se o modo noturno estiver ligado
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

    return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>

                    <View>
                        <Imagem source={require("../../assets/images/F043.png")} title={"Ismael Moreira de Sousa"} number={"F007"}/>
                        <Text><Bold>Ismael Moreira de Sousa</Bold></Text>
                        <Text>Graduado em Enfermagem pela Faculdade de Ensino e Cultura do Ceará (FAECE).</Text>
                        <Text>Especialista em Saúde da Família pelo Centro Universitário Ateneu.</Text>
                        <Text>Mestrando em Enfermagem pela Universidade da Integração Internacional da Lusofonia Afro-Brasileira (UNILAB).</Text>
                        <Text style={[styles.hiperlink, {color: colors.notification}]} onPress={() => {Linking.openURL('http://lattes.cnpq.br/9080502953872172')}}><Underline>Lattes: Aperte aqui</Underline></Text>
                    </View>

                </ScrollView>

                <View style = {styles.containerBotao}>
                    <Botao
                        title = "FINALIZAR"
                        onPress = { () => navigation.popToTop() }/>
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
        paddingTop      : 10
    },
    containerBotao: {
        marginTop       : 30,
        width           : '100%'
    },
    hiperlink: {
        color: "blue",
        fontFamily        : 'Mulish_Regular',
        fontSize          : 20,
        marginHorizontal  : 20,
        textAlign         : 'center',
        lineHeight        : 35
    }
});