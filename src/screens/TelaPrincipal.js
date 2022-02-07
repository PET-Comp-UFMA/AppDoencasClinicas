import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function alerta(){
    alert('oii');
}

export default function TelaPrincipal({ navigation })  {
    
        return(
            <View style = {styles.container}>
                <Text>
                    Tela Principal
                </Text>
                <TouchableOpacity 
                    style = {styles.botao}
                    onPress = { () => navigation.navigate('Teste') }
                >
                    <Text>Tela de Teste</Text>
                </TouchableOpacity>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        backgroundColor: '#CCC',
        padding: 10,
    }
});