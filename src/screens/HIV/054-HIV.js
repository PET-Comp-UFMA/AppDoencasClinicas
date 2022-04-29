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

export default function T054({ navigation }) {
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
                <Text>
                    Se você chegou aqui, está refletindo sobre o que o paciente apresenta (na anamnese, apresentando exames laboratoriais) e associando com a possibilidade de HIV +. {"\n"}{"\n"}

                    Ou ainda, pode ter chegado aqui após o teste rápido ter se apresentado reagente.


                    Caso não tenha realizados os outros testes rápidos, ofereça-os ao paciente.
                    {'\n'} Para isso, clique em <Bold>TESTES RÁPIDOS</Bold> para acessar essa seção. {"\n"}{"\n"}

                    Caso contrário, clique em <Bold>PRÓXIMA</Bold>.{"\n"}
                </Text>

                
            </ScrollView>

            <View style={styles.containerBotao}>
                    <Botao
                        title="TESTES RÁPIDOS"
                        onPress={() => { navigation.navigate("063-TestesRapidos") }}
                    />
                    <Botao
                        title="PRÓXIMA"
                        onPress={() => { navigation.navigate("055-HIV") }}
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