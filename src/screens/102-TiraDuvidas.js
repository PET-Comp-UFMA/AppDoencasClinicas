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


export default function T102({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text>Você <Bold>está na </Bold>seção de Tira Dúvidas.</Text>
                    <Text>Aqui você encontrará informações mais objetivas acercas das IST.</Text>
                    <Text>Escolha uma opção:</Text>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="CORRIMENTO VAGINAL OU URETRAL"
                        onPress={() => navigation.navigate('103-CandidiaseVulvovaginal')}
                    />
                    <Botao
                        title="VERRUGA ANOGENITAL"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="SÍFILIS"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="HIV"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="HEPATITE B E C"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="USO DE PRESERVARTIVOS"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="VIOLÊNCIA SEXUAL"
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