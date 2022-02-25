import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import Bold from '@components/Bold';
import Imagem from '@components/Imagem';
import Parag from '@components/Parag';
import Botao from '@components/Botao';
import { useTheme } from '@react-navigation/native';

export default function T110 ({ navigation }) {
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
                    <Parag><Bold>Agente causador:</Bold> bactéria Klebsiella granulomatis.</Parag>
                    <Parag><Bold>Período de incubação:</Bold> 3 dias a 6 meses.</Parag>
                    <Parag><Bold>Manifestações clínicas:</Bold> ulceração de borda plana ou hipertrófica, bem delimitada, com fundo granuloso, de aspecto vermelho vivo e de sangramento fácil. Acomete preferencialmente pele e mucosas das regiões genitais, perianais e inguinais.</Parag>
                    <Parag><Bold>Diagnóstico diferencial:</Bold> sífilis, cancroide, tuberculose cutânea, amebíase cutânea, neoplasias ulceradas, leishmaniose tegumentar americana e outras doenças cutâneas ulcerativas e granulomatosas.</Parag>
                </View>

                <View>
                    <Imagem source={require("@images/F016.png")} title={""} number={"F016"}/>
                    <Imagem source={require("@images/F017.png")} title={""} number={"F017"}/>
                    <Imagem source={require("@images/F018.png")} title={""} number={"F018"}/>
                </View>

                <View>
                    <Parag>Caso tenha concluído, clique em <Bold>FINALIZAR</Bold>, e será direcionado ao menu principal.</Parag>
                    <Parag>Ou, se preferir, clique na seta para a <Bold>ESQUERDA</Bold> para relembrar algumas informações.</Parag>
                    <Parag>Ou ainda você poderá clicar em <Bold>TIRA DÚVIDAS</Bold> para ir ao menu dessa seção.</Parag>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="Tira Dúvidas"
                        onPress={() => navigation.navigate('102-TiraDuvidas')}
                    />
                    <Botao
                        title="Finalizar"
                        onPress={() => navigation.navigate('001-Inicio')}
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