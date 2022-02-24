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


export default function T088({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                   <Parag>Se seu paciente não concordou realizar o <Bold>RETESTE</Bold> após teste reagente, aconselhe-o. E se ele aceitar após aconselhamento, clique em <Bold>REALIZAR RETESTE</Bold>.</Parag>
                    <Parag>Se não for esse o caso, clique em <Bold>FINALIZAR</Bold> e será direcionado ao <Bold>MENU PRINCIPAL</Bold>.</Parag>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="ACONSELHAMENTO"
                        onPress={() => navigation.navigate('072-Aconselhamento')}
                    />
                    <Botao
                        title="REALIZAR RETESTE"
                        onPress={() => navigation.navigate('086-RetesteHepatiteB')}
                    />
                    <Botao
                        title="FINALIZAR"
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