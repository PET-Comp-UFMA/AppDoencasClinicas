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


export default function T099({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                   <Parag>O primeiro teste foi <Bold>REAGENTE</Bold> e o reteste foi <Bold>NÃO REAGENTE</Bold>, avalie a situação e escolha uma opçã</Parag>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="NÃO REAGENTE, MAS APRESENTA MANIFESTAÇÕES CLÍNICAS"
                        onPress={() => navigation.navigate('')}
                    />

                     <Botao
                        title="NÃO REAGENTE, E NÃO APRESENTA MANIFESTAÇÕES CLÍNICASS"
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