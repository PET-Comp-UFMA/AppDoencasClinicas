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
import { useTheme } from '@react-navigation/native';


export default function T063({ navigation }) {
        // Atualiza as cores se o modo noturno estiver ligado
        const { colors } = useTheme();

        // Configuração de texto para as próximas telas
        Text.defaultProps       = Text.defaultProps || {}
        Text.defaultProps.style =  { 
              color             : colors.text,
              fontFamily        : 'Mulish_Regular',
              fontSize          : 20,
              marginHorizontal  : 20,
              textAlign         : 'center',
              lineHeight        : 35
        }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                   <Parag>Escolha uma opção, sabendo que cada teste será registrado individualmente. Em caso de dúvidas clique em <Bold>INTERPRETAÇÃO DOS RESULTADOS.</Bold> Em caso de não realização do(s) teste(s), clique em <Bold>RECUSOU FAZER O TESTE.</Bold></Parag>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="SÍFILIS"
                        onPress={() => navigation.navigate('064-TesteRapidoSifilis')}
                    />
                    <Botao
                        title="HIV"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="HEPATITE B"
                        onPress={() => navigation.navigate('084-TesteRapidoHepatiteB')}
                    />
                    <Botao
                        title="HEPATITE C"
                        onPress={() => navigation.navigate('092-TesteRapidoHepatiteC')}
                    />
                    <Botao
                        title="INTERPRETAÇÃO DOS RESULTADOS"
                        onPress={() => navigation.navigate('')}
                    />
                    <Botao
                        title="RECUSOU FAZER O TESTE"
                        onPress={() => navigation.navigate('')}
                    />

                    <Botao
                        title="debug -> Interpretaca0"
                        onPress={() => navigation.navigate('100-InterpretacaodeResultados')}
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