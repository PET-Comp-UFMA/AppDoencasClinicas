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
import Botao from '@components/Botao';
import Imagem from '@components/Imagem';


export default function T5({ navigation })  {
        return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>
                    <View>
                        <Text>Esse corrimento vaginal apresenta as seguintes características:{"\n"}</Text>
                        <Text>Corrimento branco, grumoso e com aspecto de leite talhado</Text>
                        <Text>Pluorido vulvovaginal{"\n"}</Text>
                        <Text>Podendo ou não haver:</Text>
                        <Text>Disuria, dispareunia, hiperenia, edema, vulvar, fissuras e maceração da vulva, placas brancas ou braço-acinzentadas, recobrindo a vagina e o colo uterino(quando realizado exame especular)</Text>
                        
                        <Imagem source={require("@images/F002.png")} title={"F002 - Corrimento Vaginal"}/>
                        <Imagem source={require("@images/F003.png")} title={"F003 - Corrimento Vaginal"}/>
                    </View>

                </ScrollView>

                <View style = {styles.containerBotao}>
                    <Botao
                        title = "SIM"
                        onPress = { () => navigation.navigate('') }
                    />
                    <Botao
                        title = "NÃO"
                        onPress = { () => navigation.navigate('') }
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
        backgroundColor : 'white',
        paddingTop      : 15
    },
    containerBotao: {
        marginTop       : 0,
        width           : '100%'
    },
});