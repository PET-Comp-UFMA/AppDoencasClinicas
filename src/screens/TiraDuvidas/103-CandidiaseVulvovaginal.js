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
import Botao from '@components/Botao';
import { useTheme } from '@react-navigation/native';

export default function T103({ navigation }) {
    // Atualiza as cores se o modo noturno estiver ligado
    const { colors } = useTheme();

    // Configuração de texto para as próximas telas
    Text.defaultProps = Text.defaultProps || {}
    Text.defaultProps.style = {
        color: colors.text,
        fontFamily: 'Mulish_Regular',
        fontSize: 20,
        marginHorizontal: 20,
        textAlign: 'center',
        lineHeight: 35
    }
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
                    <Imagem source={require("@images/F003.png")} title={"Acompanhamento"} number={"F003"} />
                </View>

                <View>
                    <Parag><Bold>Por se tratar de uma infecção endógena do trato reprodutivo, não é considerada uma IST.</Bold></Parag>
                </View>


            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="Próximo"
                    onPress={() => navigation.navigate('104-VaginoseBacteriana')}
                />
            </View>


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