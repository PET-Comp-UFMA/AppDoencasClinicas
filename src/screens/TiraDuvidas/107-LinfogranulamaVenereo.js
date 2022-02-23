import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import Bold from '@components/Bold';
import Imagem from '@components/Imagem';
import Parag from '@components/Parag';
import Botao from '@components/Botao';


export default function T107({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Parag><Bold>Agente causador:</Bold> Chlamydia trachomatis, sorotipos L1, L2 e L3.</Parag>
                    <Parag><Bold>Período de incubação:</Bold> 3 a 30 dias.  </Parag>
                    <Parag><Bold>Manifestações clínicas:</Bold> a mais comum é a linfadenopatia inguinal e/ou femoral.</Parag>
                    <Parag><Bold>Evolução da doença:</Bold> inoculação, disseminação linfática regional e sequelas.</Parag>
                    <Parag><Bold>Diagnóstico diferencial:</Bold> adenite inguinal, elefantíase genital e estenose uretral ou retal.</Parag>
                </View>

                <View>
                    <Imagem source={require("@images/F013.png")} title={""} number={"F013"}/>
                    <Imagem source={require("@images/F014.png")} title={""} number={"F014"}/>
                    <Imagem source={require("@images/F015.png")} title={""} number={"F015"}/>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="Próximo"
                        onPress={() => navigation.navigate('108-Cancroide')}
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