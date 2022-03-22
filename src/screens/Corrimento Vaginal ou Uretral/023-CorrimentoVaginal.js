import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    ColorPropType,
} from 'react-native';
import Botao from './src/components/Botao';
import Imagem from './src/components/Imagem';
import { useTheme } from '@react-navigation/native';

export default function T023({ navigation })  {
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
                        <Text>Como seu paciente não apresenta nenhuma das queixas, aperte em MENU PRINCIPAL e você será direcionado para o início, ou em ANAMNESE E EXAME FÍSICO para voltar para o menu dessa seção{"\n"}</Text>
                    </View>

                </ScrollView>

                <View style = {styles.containerBotao}>
                    <Botao
                        title = "MENU PRINCIPAL"
                        onPress = { () => navigation.popToTop() }
                    />
                    <Botao
                        title = "ANAMNESE E EXAME FÍSICO"
                        onPress = { () => navigation.navigate('003-Anamnese e Exame Fisico') }
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
        paddingTop      : 15
    },
    containerBotao: {
        marginTop       : 0,
        width           : '100%'
    },
});