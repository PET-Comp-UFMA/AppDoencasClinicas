import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Botao from '../components/Botao';
import { useTheme } from '@react-navigation/native';


export default function T003({ navigation })  {
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
                        <Text>Agora você poderá escolher uma opção que mais se aproxima daquilo que precisará manejar conforme as queixas do seu paciente e o que está sendo coletado na anamnese e exame físico. Escolha uma opção:</Text>
                    </View>

                </ScrollView>

                <View style = {styles.containerBotao}>
                    <Botao
                        title = "CORRIMENTO VAGINAL OU URETRAL"
                        onPress = { () => navigation.navigate('004-Corrimento Vaginal ou Uretral') }
                    />
                    <Botao
                        title = "ÚLCERA"
                        onPress = { () => navigation.navigate('025-UlceraAnogenital') }
                    />
                    <Botao
                        title = "VERRUGA ANOGENITAL"
                        onPress = { () => navigation.navigate('039-VerrugaAnogenital') }
                    />
                    <Botao
                        title = "SÍFILIS"
                        onPress = { () => navigation.navigate('045-Sifilis') }
                    />
                    <Botao
                        title = "HIV"
                        onPress = { () => navigation.navigate('054-HIV') }
                    />
                    <Botao
                        title = "HEPATITES B E C"
                        onPress = { () => navigation.navigate('060-HepatiteBeC') }
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
        marginTop       : 30,
        width           : '100%'
    },
});