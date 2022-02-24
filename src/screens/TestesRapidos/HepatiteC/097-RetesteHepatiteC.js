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


export default function T097({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                   <Parag>Caso não considere realizar o <Bold>RETESTE</Bold>, e o paciente concorde em prosseguir, clique em <Bold>MANEJO CLÍNICO </Bold>para prosseguir e será direcionado para as possíveis soluções.</Parag>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="MANEJO CLÍNICO"
                        onPress={() => navigation.navigate('002-Manejo Clinico')}
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