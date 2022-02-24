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


export default function T095({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                   <Parag>Reteste foi <Bold>REAGENTE</Bold>. Clique em <Bold>MANEJO CLÍNICO</Bold>, e você será direcionado para as possíveis soluções.</Parag>
                   <Parag> Se o paciente se recusar em prosseguir o manejo, aconselhe sobre a importância do tratamento, se ainda sim não concordar, clique em <Bold>FINALIZAR</Bold> e será direcionado ao <Bold>MENU PRINCIPAL</Bold>. Notifique todo o processo.</Parag>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="MANEJO CLÍNICO"
                        onPress={() => navigation.navigate('002-Manejo Clinico')}
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