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


export default function T103({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Parag><Bold>Agente causador:</Bold> protozoário Trichomanus vaginalis.</Parag>
                    <Parag><Bold>Período de incubação:</Bold> 4 a 28 dias.</Parag>
                    <Parag><Bold>Manifestações clínicas:</Bold> corrimento vaginal intenso, amarelo-esverdeado, por vezes acinzentado, bolhoso e espumoso, acompanhado de odor fétido (na maioria dos casos lembrando peixe) e prurido eventual, que pode constituir reação alérgica à afecção. No exame especular, percebem-se microulcerações no colo uterino, que dão um aspecto de morango ou framboesa.</Parag>
                    <Parag><Bold>Diagnóstico diferencial:</Bold> vaginose bacteriana.</Parag>
                </View>

                <View>
                    <Imagem source={require("@images/F007.png")} title={"Acompanhamento"} number={"F007"}/>
                    <Imagem source={require("@images/F008.png")} title={"Acompanhamento"} number={"F008"}/>
                    <Imagem source={require("@images/F009.png")} title={"Acompanhamento"} number={"F009"}/>
                </View>

                <View>
                    <Parag><Bold>Por se tratar de uma infecção endógena do trato reprodutivo, não é considerada uma IST.</Bold></Parag>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="Próximo"
                        onPress={() => navigation.navigate('106-ClamidiaeGonorreia')}
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