import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TelaPrincipal({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View >

                    <Text>Em desenvolvimento</Text>


                </View>
            </ScrollView>
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    containerBotao: {
        width: '100%'
    },
    
});