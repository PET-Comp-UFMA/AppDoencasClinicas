import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TelaPrincipal({ navigation })  {
    
        return(
            <View style = {styles.container}>
                <Text>
                    Tela Principal
                </Text>
                <Button 
                    title='Tela de Teste'
                    onPress={ () => navigation.navigate('Teste')}
                />
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});