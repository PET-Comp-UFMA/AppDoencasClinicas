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
import { useTheme } from '@react-navigation/native';
import Parag from 'src/components/Parag';
import Bold from 'src/components/Bold';
import Botao from 'src/components/Botao';

export default function T083({ navigation }) {
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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View >
                    <Parag>O primeiro teste foi <Bold>REAGENTE</Bold> e o reteste foi <Bold>NÃO REAGENTE</Bold>, avalie a situação e escolha uma opção.</Parag>
                </View>
                
            </ScrollView>
            <View style={styles.containerBotao}>

                    <Botao
                        title="NÃO REAGENTE, MAS APRESENTA MANIFESTAÇÕES CLÍNICAS"
                        onPress={() => navigation.navigate('074-TesteNaoReagente')}
                    />
                    <Botao
                        title="NÃO REAGENTE, E NÃO APRESENTA MANIFESTAÇÕES CLÍNICAS"
                        onPress={() => navigation.navigate('074-TesteNaoReagente')}
                    />
                    
                </View>
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
        
        paddingTop: 15,
        width: '100%'
    },
    containerBotao: {
        marginTop: 30,
        width: '100%'
    },
    texto: {
        marginBottom: 10,
        
    },
});