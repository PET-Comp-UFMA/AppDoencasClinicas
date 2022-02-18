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


export default function T013({ navigation })  {
        return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>
                    <View>
                        <Text>Esse corrimento vaginal apresenta as seguintes características:{"\n"}</Text>
                        <Text>Corrimento abundante, amarelado ou amarelo esverdeado e por vezes acizentado, bolhoso{"\n"}</Text>
                        <Text>Podendo haver:</Text>
                        <Text>Plurido vulvar, disúria e hiperemia da mucosa</Text>
                        
                        <Imagem source={require("@images/F007.png")} title={"Corrimento Vaginal"} number={"F007"}/>
                        <Imagem source={require("@images/F008.png")} title={"Corrimento Vaginal"} number={"F008"}/>
                        <Imagem source={require("@images/F009.png")} title={"Corrimento Vaginal"} number={"F009"}/>
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