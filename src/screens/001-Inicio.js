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

// Configuração de texto para as próximas telas
Text.defaultProps       = Text.defaultProps || {}
Text.defaultProps.style =  { 
  color             : '#00172E',
  fontFamily        : 'Mulish-Regular',
  fontSize          : 21,
  marginHorizontal  : 20,
  textAlign         : 'center'
}

export default function T1({ navigation })  {
        return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>   
                    <View>
                        <Image 
                            source={require("@images/Logo.png")}
                            style={styles.imagem}
                        />
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
                            onPress = { () => navigation.navigate('102-Tira Duvidas') }
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
    },
    imagem: {
        alignSelf       : 'center',
        marginTop       : 30,
        width           : 300,
        height          : 300
    }
});