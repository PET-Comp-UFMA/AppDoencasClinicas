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

import { useTheme } from '@react-navigation/native';
import { TouchableRipple } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';

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
                        <Text style={styles.hiperlink}onPress={() => {Linking.openURL('http://lattes.cnpq.br/9080502953872172')}}>Lattes: Aperte aqui</Text>
                    </View>

                    <View>
                        <Imagem source={require("../../assets/images/F044.png")} title={"Leilane Barbosa de Sousa"} number={"F007"}/>
                        <Text><Bold>Leilane Barbosa de Sousa</Bold></Text>
                        <Text>Atualmente é professora adjunta do Curso de Graduação em Enfermagem e docente do quadro permamente do Mestrado Acadêmico em Enfermagem, ambos da Universidade da Integração Internacional da Lusofonia Afro-Brasileira (UNILAB).</Text>
                        <Text style={styles.hiperlink}onPress={() => {Linking.openURL('http://lattes.cnpq.br/8829820331920241')}}>Lattes: Aperte aqui</Text>
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