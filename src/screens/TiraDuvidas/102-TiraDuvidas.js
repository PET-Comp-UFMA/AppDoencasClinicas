import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Botao from '../../components/Botao';
import Bold from '../../components/Bold';
import { useTheme } from '@react-navigation/native';

export default function T102({ navigation }) {
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
                        title="ÚLCERA ANOGENITAL"
                        onPress={() => navigation.navigate('107-LinfogranulamaVenereo')}
                    />
                    <Botao
                        title="VERRUGA ANOGENITAL"
                        onPress={() => navigation.navigate('111-CondilomaAcuminado')}
                    />
                    <Botao
                        title="SÍFILIS"
                        onPress={() => navigation.navigate('112-Sifilis')}
                    />
                    <Botao
                        title="HIV"
                        onPress={() => navigation.navigate('113-HIV')}
                    />
                    <Botao
                        title="HEPATITE B E C"
                        onPress={() => navigation.navigate('114-HepatiteBeC')}
                    />
                    <Botao
                        title="USO DE PRESERVARTIVOS"
                        onPress={() => navigation.navigate('115-Preservativos')}
                    />
                    <Botao
                        title="VIOLÊNCIA SEXUAL"
                        onPress={() => navigation.navigate('116-EntendendoViolenciaSexual')}
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