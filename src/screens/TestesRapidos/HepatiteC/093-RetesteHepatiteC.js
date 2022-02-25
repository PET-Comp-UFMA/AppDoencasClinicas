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

export default function T093({ navigation }) {
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