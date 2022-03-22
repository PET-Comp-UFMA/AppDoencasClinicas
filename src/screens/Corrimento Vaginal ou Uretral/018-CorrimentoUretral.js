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

export default function T018({ navigation })  {
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
                        <Text>Se você chegou aqui, é porque é possível coletar matrial para microscopia.</Text>
                        <Text>Coletar material para microscopia. Saindo do resultado, tratar conforme conclusão diagnóstica. Considerar consulta médica para diagnóstico diferencial.{"\n"}</Text>
                        <Text>Na ausência de diplococos gramnegativos intracelulares, tratar Chlamydia trachomatis (clamídia). Na presença de diplococos gramnegativos intracelulares, tratr Chlamydia trachomatis (clamídia) e Neisseria gonorrhoeae (gonorréia) </Text>
                        
                        <Tabela tableHead={tableHead_Chlamydia} tableData={tableData_Chlamydia}></Tabela>
                        <Text>{}</Text>
                        <Tabela tableHead={tableHead_Neisseria} tableData={tableData_Neisseria}></Tabela>
                        
                        <Text><Bold>Buscar parceira sexual.</Bold></Text>
                        <Text>Se você já alcançou seu objetivo, clique em <Bold>FINALIZAR</Bold> e retornará para o início.</Text>
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

const tableHead_Chlamydia = [<Text>Chlamydia trachomatis (clamídia)</Text>]
const tableData_Chlamydia = [[<Text style={styles.textTitle}><Bold>Infecção por clamídia</Bold></Text>,
    <Text style={styles.textData}><Bold>Azitromicina</Bold> 500mg, 2 comprimidos, VO, dose única{"\n"}
    <Bold>OU{"\n"}</Bold>
    <Bold>Doxiciclina</Bold> 100mg, VO, 2x/dia, por 7 dias (exceto gestantes){"\n"}
    </Text>]];

const tableHead_Neisseria = [<Text>Neisseria gonorrhoeae</Text>]
const tableData_Neisseria = [[<Text style={styles.textTitle}><Bold>Infecção gonocócica NÃO complicada (uretra, colo de útero, reto e faringe)</Bold></Text>,
    <Text style={styles.textData}><Bold>Ceftriaxoma</Bold> 500mg, dose única{"\n"}
    <Bold>MAIS{"\n"}</Bold>
    <Bold>Azitromicina</Bold> 500mg, 2 comprimidos, VO, dose única{"\n"}
    </Text>],
    [<Text style={styles.textTitle}><Bold>Infecção gonocócida disseminada</Bold></Text>,
        <Text style={styles.textData}><Bold>Ceftriaxona</Bold> 1g IM ou IV ao dia, complementando ao menos 7 dias{"\n"}
        <Bold>MAIS{"\n"}</Bold>
        <Bold>Azitromicina</Bold> 500mg, 2 comprimidos, VO, dose única{"\n"}
        </Text>]    
    ];  