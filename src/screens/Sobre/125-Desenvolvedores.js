import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    Linking
} from 'react-native';
import Botao from './src/components/Botao';
import Imagem from './src/components/Imagem';
import Bold from './src/components/Bold';

import { useTheme } from '@react-navigation/native';
import { TouchableRipple } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';

export default function T125({ navigation })  {

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
                        <Imagem source={require("./src/assets/images/F045.png")} title={"Ismael Moreira de Sousa"} number={"F007"}/>
                        <Text><Bold>Luis Jorge Enrique Rivero Cabrejos</Bold></Text>
                        <Text>Doutor em Informática pela Universidade Federal do Amazonas (UFAM).</Text>
                        <Text>Professor Adjunto A do Departamento de Informática da Universidade Federal do Maranhão, onde atua em cursos de graduação.</Text>
                        <Text style={styles.hiperlink}onPress={() => {Linking.openURL('http://lattes.cnpq.br/8534667641706692')}}>Lattes: Aperte aqui</Text>
                    </View>

                    <View>
                        <Imagem source={require("./src/assets/images/F044.png")} title={"Leilane Barbosa de Sousa"} number={"F007"}/>
                        <Text>Leilane Barbosa de Sousa</Text>
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