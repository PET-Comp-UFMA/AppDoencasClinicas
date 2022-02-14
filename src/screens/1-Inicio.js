import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Botao from '@components/Botao';
import Titulo from '@components/Titulo';


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
                        <Titulo>Bem Vindo</Titulo>
                        <Text>Colega enfermeiro, escolha uma das opções abaixo:</Text>
                    </View>

                    <View style = {styles.containerBotao}>
                        <Botao
                            title = "Manejo Clínico"
                            onPress = { () => navigation.navigate('') }
                        />
                        <Botao
                            title = "Tira Dúvidas"
                            onPress = { () => navigation.navigate('') }
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    containerBotao: {
        width: '100%'
    },

    telaPrincipal: {
        marginTop: 22.5
    },
    imagem: {
        alignSelf: 'center',
        width: 200,
        height: 200
    }
});