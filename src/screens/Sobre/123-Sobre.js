import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Botao from 'src/components/Botao';


import { useTheme } from '@react-navigation/native';

export default function T123({ navigation })  {

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
                    <Text>Nessa seção você poderá conhecer um pouco sobre os idealizadores e desenvolvedores desse aplicativo, assim como as referências utilizadas para o conteúdo apresentado. Escolha uma opção:</Text>
                </View>

                </ScrollView>

                <View style = {styles.containerBotao}>
                    <Botao
                        title = "IDEALIZADORES DO APLICATIVO"
                        onPress = { () => navigation.navigate('124-Idealizadores') }
                    />
                    <Botao
                        title = "DESENVOLVEDORES DO APLICATIVO"
                        onPress = { () => navigation.navigate('125-Desenvolvedores') }
                    />
                    <Botao
                        title = "REFERÊNCIAS"
                        onPress = { () => navigation.navigate('126-Referencias') }
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
        paddingTop      : 10
    },
    containerBotao: {
        marginTop       : 30,
        width           : '100%'
    },
});