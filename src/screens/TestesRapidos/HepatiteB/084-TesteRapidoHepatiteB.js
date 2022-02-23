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


export default function T084({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                   <Parag>Qual foi o resultado?</Parag>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="Reagente"
                        onPress={() => navigation.navigate('085-RetesteHepatiteB')}
                    />
                    <Botao
                        title="NÃO REAGENTE"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="INVÁLIDO"
                        onPress={() => navigation.navigate('085-RetesteHepatiteB')}
                    />
                    <Botao
                        title="INDISPONÍVEL"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="RECUSOU FAZER"
                        onPress={() => navigation.navigate('')}
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