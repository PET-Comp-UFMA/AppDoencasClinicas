import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Bold from '@components/Bold';
import Imagem from '@components/Imagem';
import Parag from '@components/Parag';


export default function T103({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Parag><Bold>Agente causador:</Bold> fungo Candida albicans é o agente etiológico em 80% a 92% dos casos, podendo o restante ser devido às espécies não albicans (glabarta, tropicalis, krusei, parapsilosis) e Saccharomyces ceravisae.</Parag>
                    <Parag><Bold>Período de incubação:</Bold> desconhecido.</Parag>
                    <Parag><Bold>Manifestações clínicas:</Bold> prurido, ardência, corrimento geralmente grumoso, sem odor, dispareunia de introito vaginal e disúria externa.</Parag>
                    <Parag><Bold>Diagnóstico diferencial:</Bold> líquen escleroso, vulvovestibulite, dermatite vulvar, vulvodínea, vaginite citolítica, vaginite inflamatória descamativa, formas atípicas de herpes genital e reações de hipersensibilidade.</Parag>
                </View>

                <View>
                    <Imagem source={require("@images/F003.png")} title={"Acompanhamento"} />
                </View>

                <View>
                    <Parag><Bold>Por se tratar de uma infecção endógena do trato reprodutivo, não é considerada uma IST.</Bold></Parag>
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
    texto: {
        marginBottom: 10,
        
    },
});