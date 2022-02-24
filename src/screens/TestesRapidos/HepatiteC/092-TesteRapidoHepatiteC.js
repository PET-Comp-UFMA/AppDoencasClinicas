import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Botao from '@components/Botao';
import Bold from '@components/Bold';
import Parag from '@components/Parag';


export default function T092({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                   <Parag>Qual foi o resultado?</Parag>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="Reagente"
                        onPress={() => navigation.navigate('093-RetesteHepatiteC')}
                    />
                    <Botao
                        title="NÃO REAGENTE"
                        onPress={() => navigation.navigate('074-TesteNaoReagente')}
                    />
                    <Botao
                        title="INVÁLIDO"
                        onPress={() => navigation.navigate('093-RetesteHepatiteC')}
                    />
                    <Botao
                        title="INDISPONÍVEL"
                        onPress={() => navigation.navigate('073-Indisponivel')}
                    />
                    <Botao
                        title="RECUSOU FAZER"
                        onPress={() => navigation.navigate('072-Aconselhamento')}
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