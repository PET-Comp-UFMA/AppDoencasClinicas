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
import Botao from '@components/Botao';
import Imagem from '@components/Imagem';


export default function T023({ navigation })  {
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
        backgroundColor : 'white',
        paddingTop      : 15
    },
    containerBotao: {
        marginTop       : 0,
        width           : '100%'
    },
});