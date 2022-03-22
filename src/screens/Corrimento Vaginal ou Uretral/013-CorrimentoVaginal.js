import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    ColorPropType,
} from 'react-native';
import Botao from '../../components/Botao';
import Imagem from '../../components/Imagem';
import { useTheme } from '@react-navigation/native';

export default function T013({ navigation })  {
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
        return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>
                    <View>
                        <Text>Esse corrimento vaginal apresenta as seguintes características:{"\n"}</Text>
                        <Text>Corrimento abundante, amarelado ou amarelo esverdeado e por vezes acizentado, bolhoso{"\n"}</Text>
                        <Text>Podendo haver:</Text>
                        <Text>Plurido vulvar, disúria e hiperemia da mucosa</Text>
                        
                        <Imagem source={require("../../assets/images/F007.png")} title={"Corrimento Vaginal"} number={"F007"}/>
                        <Imagem source={require("../../assets/images/F008.png")} title={"Corrimento Vaginal"} number={"F008"}/>
                        <Imagem source={require("../../assets/images/F009.png")} title={"Corrimento Vaginal"} number={"F009"}/>
                    </View>

                </ScrollView>

                <View style = {styles.containerBotao}>
                    <Botao
                        title = "SIM"
                        onPress = { () => navigation.navigate('014-Corrimento Vaginal') }
                    />
                    <Botao
                        title = "NÃO"
                        onPress = { () => navigation.navigate('023-Corrimento Vaginal') }
                    />
                </View>
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex            : 1,
        alignItems      : 'center',
        justifyContent  : 'center',
        flexDirection   : 'column',
        justifyContent  : 'space-between',
        paddingTop      : 15
    },
    containerBotao: {
        marginTop       : 0,
        width           : '100%'
    },
});