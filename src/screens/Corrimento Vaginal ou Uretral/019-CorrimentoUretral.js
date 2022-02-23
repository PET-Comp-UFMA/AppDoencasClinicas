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
import Bold from '@components/Bold';
import Botao from '@components/Botao';
import Imagem from '@components/Imagem';
import Tabela from '@components/Tabela';


export default function T019({ navigation })  {
        return(
            <SafeAreaView style = {styles.container}> 
                <ScrollView>
                    <View>
                        <Text>Tratar gonorreia e clamídia. Considerar consulta médica para diagnóstico direferencial.</Text>
                        
                        <Tabela tableHead={tableHead_Chlamydia} tableData={tableData_Chlamydia}></Tabela>
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
        backgroundColor : 'white',
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
        fontFamily: "Mulish-Regular",
    },
    textTitle: { 
        fontSize: 16, 
        margin: 6,
        alignSelf: 'center',
        color: 'black',
        fontFamily: "Mulish-Regular",
    },
});

const tableHead_Chlamydia = ['Chlamydia trachomatis (clamídia)']
const tableData_Chlamydia = [[<Text style={styles.textTitle}><Bold>Infecção por clamídia</Bold></Text>,
    <Text style={styles.textData}><Bold>Azitromicina</Bold> 500mg, 2 comprimidos, VO, dose única{"\n"}
    <Bold>OU{"\n"}</Bold>
    <Bold>Doxiciclina</Bold> 100mg, VO, 2x/dia, por 7 dias (exceto gestantes){"\n"}
    </Text>]];

const tableHead_Neisseria = ['Neisseria gonorrhoeae']
const tableData_Neisseria = [[<Text style={styles.textTitle}><Bold>Infecção gonocócica NÃO complicada (uretra, colo de útero, reto e faringe)</Bold></Text>,
    <Text style={styles.textData}><Bold>Ceftriaxoma</Bold> 500mg, IM, dose única{"\n"}
    <Bold>MAIS{"\n"}</Bold>
    <Bold>Azitromicina</Bold> 500mg, 2 comprimidos, VO, dose única{"\n"}
    </Text>],
    [<Text style={styles.textTitle}><Bold>Infecção gonocócida disseminada</Bold></Text>,
        <Text style={styles.textData}><Bold>Ceftriaxona</Bold> 1g IM ou IV ao dia, complementando ao menos 7 dias{"\n"}
        <Bold>MAIS{"\n"}</Bold>
        <Bold>Azitromicina</Bold> 500mg, 2 comprimidos, VO, dose única{"\n"}
        </Text>]    
    ];  