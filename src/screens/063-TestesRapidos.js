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


export default function T063({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                   <Parag>Escolha uma opção, sabendo que cada teste será registrado individualmente. Em caso de dúvidas clique em <Bold>INTERPRETAÇÃO DOS RESULTADOS.</Bold> Em caso de não realização do(s) teste(s), clique em <Bold>RECUSOU FAZER O TESTE.</Bold></Parag>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="SÍFILIS"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="HIV"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="HEPATITE C"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="HEPATITE C"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="INTERPRETAÇÃO DOS RESULTADOS"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="RECUSOU FAZER O TESTE"
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