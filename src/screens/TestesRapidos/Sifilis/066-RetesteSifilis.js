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
import Parag from '../../../components/Parag';
import Bold from '../../../components/Bold';
import Botao from '../../../components/Botao';

export default function T066({ navigation }) {
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
                <View>
                    <Parag>Repita o procedimento para realizar o teste novamente.</Parag>
                    <Parag> Conforme o resultado, escolha uma opção.</Parag>
                    <Parag><Bold>Atenção</Bold>.: Se o resultado do reteste for <Bold>INVÁLIDO</Bold>, considere realizar novamente. Pode ter sido um erro em alguma etapa do procedimento.</Parag>
                    <Parag>Se for REAGENTE, não esqueça de notificar.</Parag>
                </View>
                
            </ScrollView>
            <View style={styles.containerBotao}>

                    <Botao
                        title="RETESTE REAGENTE"
                        onPress={() => navigation.navigate('067-RetesteSifilis')}
                    />
                    <Botao
                        title="RETESTE NÃO REAGENTE"
                        onPress={() => navigation.navigate('071-RetesteSifilis')}
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