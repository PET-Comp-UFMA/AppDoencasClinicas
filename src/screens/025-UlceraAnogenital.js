import React from "react";
import { View, Text, SafeAreaView, StyleSheet} from "react-native";

import Botao from '@components/Botao';
import { useTheme } from '@react-navigation/native';

export default function T025({navigation}) {
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

            <Text> 
                O paciente está apresentando {"\n"}
                linfadenopatia inguinal e/ou femoral?
            </Text>

            <View style={styles.containerBotao}>
                <Botao
                    title="SIM"
                    onPress={() => navigation.navigate("026-UlceraAnogenital")}
                />
                
                <Botao
                    title="NÃO"
                    onPress={() => navigation.navigate("028-UlceraAnogenital")}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex            : 1,
        alignItems      : 'center',
        justifyContent  : 'center',
        flexDirection   : 'column',
        justifyContent  : 'space-between',
        paddingTop      : 15,
    },

    containerBotao: {
        marginTop       :  30,
        width           : '100%'
    },
});
