import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Botao from 'src/components/Botao';
import Tabela from 'src/components/Tabela';
import Tabela2 from 'src/components/Tabela2';
import Imagem from 'src/components/Imagem';

// Configuração de texto
Text.defaultProps       = Text.defaultProps || {}
Text.defaultProps.style =  { 
  color: '#00172E',
  fontFamily: 'Mulish_Regular',
  fontSize: 21,
  marginHorizontal: 20,
  textAlign: 'center'
}



export default function TelaPrincipal({ navigation })  {
    
        return(
            
            <SafeAreaView style = {styles.container}>
                
                <ScrollView>
                    <View style = {styles.containerBotao}>
                        <Botao
                            title = "Tela de Teste"
                            onPress = { () => navigation.navigate('Teste') }
                        />
                    </View>
                    <View>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                        <Imagem source={require("src/assets/images/F003.png")} title={"Sexo de cavalos"}/>
                        <Imagem source={require("src/assets/images/F039.png")} title={"DST 2.0"}/>
                        <Imagem source={require("src/assets/images/F040.png")} title={"Jumentos sexuais"}/>
                        <Imagem source={require("src/assets/images/F041.png")}/>
                        <Imagem source={require("src/assets/images/F042.png")}/>

                        <Text style={styles.telaPrincipal}>Tela Principal</Text>

                        <Tabela />
                    </View>
                    
                    
                   
                </ScrollView>

                
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    containerBotao: {
        width: '100%'
    },

    telaPrincipal: {
        marginTop: 22.5
    }
});