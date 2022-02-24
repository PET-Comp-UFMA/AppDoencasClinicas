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


export default function T093({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                   <Parag>Nesta etapa o teste teve resultado: <Bold>REAGENTE</Bold> ou <Bold>INVÁLIDO</Bold>. Considere realizar um <Bold>RETESTE</Bold>.</Parag>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="RETESTE"
                        onPress={() => navigation.navigate('094-RetesteHepatiteC')}
                    />
                    <Botao
                        title="NÃO REALIZAR RETESTE"
                        onPress={() => navigation.navigate('097-RetesteHepatiteC')}
                    />
                    <Botao
                        title="PACIENTE RECUSOU RETESTE"
                        onPress={() => navigation.navigate('096-RetesteHepatiteC')}
                    />
                    <Botao
                        title="INDISPONÍVEL"
                        onPress={() => navigation.navigate('098-RetesteHepatiteC')}
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