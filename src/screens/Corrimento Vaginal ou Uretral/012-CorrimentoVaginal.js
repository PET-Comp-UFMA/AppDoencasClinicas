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
import Bold from 'src/components/Bold';
import Botao from 'src/components/Botao';
import Imagem from 'src/components/Imagem';
import Tabela from 'src/components/Tabela';
import { useTheme } from '@react-navigation/native';

export default function T012({ navigation })  {
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
                        <Text>Então você deve considerar tratamento para vaginose bacteriana</Text>
                        <Tabela tableData={tableData}></Tabela>
                        <Text><Bold>OBSERVAÇÕES:</Bold></Text>
                        <Text>Se houver fitas para verificar pH vaginal, considere PH normal maior que 4.5.</Text>
                        <Text>Não é necessário tratar parcerias sexuais, exceto as assintomáticas.</Text>
                        <Text>A 1ª opção inclui gestantes e lactantes</Text>
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

const tableData = [[<Text style={styles.textTitle}><Bold>Primeira Opção (incluindo gestantes e lactantes)</Bold></Text>,
    <Text style={styles.textData}><Bold>Metronidazol</Bold> 250mg, 2 comprimidos, VO, 2x/dia, por 7 dias{"\n"}
    <Bold>OU{"\n"}</Bold>
    <Bold>Metronidazol</Bold> gel vaginal 100mg/g, um aplicador cheio via vaginal, à noite ao deitar-se, por 5 dias{"\n"}
    </Text>],
    [<Text style={styles.textTitle}><Bold>Segunda Opção</Bold></Text>,
    <Text style={styles.textData}><Bold>Clindamicina</Bold> 300mg, VO, 2x/dia, por 7 dias {"\n"}
    </Text>]];
