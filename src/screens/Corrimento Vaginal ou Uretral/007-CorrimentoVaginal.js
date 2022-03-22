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
import Bold from './src/components/Bold';
import Botao from './src/components/Botao';
import Imagem from './src/components/Imagem';
import Tabela from './src/components/Tabela';
import { useTheme } from '@react-navigation/native';

export default function T007({ navigation })  {
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
                        <Text>Então você deve considerar tratamento medicamentoso para candidíase volvovaginal recorrente e/ou complicada </Text>
                        <Tabela tableData={tableData}></Tabela>
                        <Text><Bold>OBSERVAÇÕES:</Bold></Text>
                        <Text>Se houver fitas para verificar pH vaginal, considere PH normal (4.5).</Text>
                        <Text>Não é necessário tratar parcerias sexuais, exceto as assintomáticas.</Text>
                        <Text>Tratamento para gestantes e lactantes apenas via terminal.</Text>
                        <Text>Realizar aconselhamento sobre prevenção combinada e higiene.</Text>
                    </View>

                </ScrollView>

                <View style = {styles.containerBotao}>
                    <Botao
                        title = "FINALIZAR"
                        onPress = { () => navigation.popToTop() }
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
    textData: { 
        fontSize: 12, 
        margin: 6,
        alignSelf: 'center',
        color: 'black',
        fontFamily: "Mulish_Regular",
    },
    textTitle: { 
        fontSize: 16, 
        margin: 6,
        alignSelf: 'center',
        color: 'black',
        fontFamily: "Mulish_Regular",
    },
});

const tableData = [[<Text style={styles.textTitle}><Bold>CVV Complicada e CVV recorrente</Bold></Text>,
    <Text style={styles.textData}><Bold>Indução: Fluconazol</Bold> 150mg, VO, 1x/dia, dias 1, 4 e 7{"\n"}
    <Bold>OU{"\n"}</Bold>
    <Bold>Itraconazol</Bold> 100mg, 2 comprimidos, VO, 2x/dia, por 1 dia{"\n"}
    <Bold>OU{"\n"}</Bold>
    <Bold>Miconazol</Bold> creme vaginal tópico diário por 10-14 dias.{"\n"}
    <Bold>Manutenção: Fluconazol</Bold> 150mg, VO, 1x/semana, por 6 meses{"\n"}
    <Bold>OU{"\n"}</Bold>
    <Bold>Miconazol</Bold> creme vaginal tópico, 2x/semana{"\n"}
    <Bold>OU{"\n"}</Bold>
    <Bold>Óvulo Vaginal</Bold>, 1x/semana, durante 6 meses
    </Text>]];
