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

export default function T016({ navigation })  {
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
                        <Text>Se não é corrimento vaginal, pode ser uretral.</Text>
                        <Text>Existe corrimento uretral mucopurulento, com volume variável, associado a dor uretral (independenteda micção), disúria, estrangúria, plurido uretral e eritema de meato uretral?</Text>
                        
                        <Imagem source={require("../../assets/images/F010.png")} title={"Corrimento Uretral"} number={"F010"}/>
                        <Imagem source={require("../../assets/images/F011.png")} title={"Corrimento Uretral"} number={"F011"}/>
                        <Imagem source={require("../../assets/images/F012.png")} title={"Corrimento Uretral"} number={"F012"}/>
                    </View>

                </ScrollView>

                <View style = {styles.containerBotao}>
                    <Botao
                        title = "SIM"
                        onPress = { () => navigation.navigate('017-Corrimento Uretral') }
                    />
                    <Botao
                        title = "NÃO"
                        onPress = { () => navigation.navigate('024-Corrimento Uretral') }
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