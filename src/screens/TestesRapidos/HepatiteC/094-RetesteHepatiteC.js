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


export default function T094({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                   <Parag>Repita o procedimento para realizar o teste novamente. Conforme o resultado, escolha uma opção. <Bold>OBS.:</Bold> Caso o resultado seja <Bold>INVÁLIDO</Bold>, repita e notifique.</Parag>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="RETESTE REAGENTE"
                        onPress={() => navigation.navigate('095-RetesteHepatiteC')}
                    />
                    <Botao
                        title="RETESTE NÃO REAGENTE"
                        onPress={() => navigation.navigate('099-RetesteHepatiteC')}
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