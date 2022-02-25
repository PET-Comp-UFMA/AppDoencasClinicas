import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Botao from '@components/Botao';
import Tabela from '@components/Tabela';

export default function TelaPrincipal({ navigation }) {
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

                    <Tabela />
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>


                </View>


                <View style={styles.containerBotao}>
                    <Botao
                        title="Tela de Teste"
                        onPress={() => navigation.navigate('Teste')}
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
        
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    containerBotao: {
        width: '100%'
    },
    
});