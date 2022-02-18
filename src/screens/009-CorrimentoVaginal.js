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


export default function T009({ navigation })  {
        return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>
                    <View>
                        <Text>Esse corrimento vaginal apresenta as seguintes características:{"\n"}</Text>
                        <Text>Corrimento vaginal fétido, branco-acinzentado, de aspecto fluido ou cremoso, algumas vezes bolhoso{"\n"}</Text>
                        <Text>Podendo haver:</Text>
                        <Text>Dispareunia não muito frequente.</Text>
                        
                        <Imagem source={require("@images/F004.png")} title={"Corrimento Vaginal"} number={"F004"}/>
                        <Imagem source={require("@images/F005.png")} title={"Corrimento Vaginal"} number={"F005"}/>
                        <Imagem source={require("@images/F006.png")} title={"Corrimento Vaginal"} number={"F006"}/>
                    </View>

                </ScrollView>

                <View style = {styles.containerBotao}>
                    <Botao
                        title = "SIM"
                        onPress = { () => navigation.navigate('010-Corrimento Vaginal') }
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