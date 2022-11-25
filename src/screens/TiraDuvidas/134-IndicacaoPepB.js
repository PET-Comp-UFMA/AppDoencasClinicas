import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
import Bold from '../../components/Bold';
import Parag from '../../components/Parag';
import Botao from '../../components/Botao';
import { useTheme } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';


export default function T130({ navigation }) {
    // Atualiza as cores se o modo noturno estiver ligado
    const { colors } = useTheme();

    // Configuração de texto para as próximas telas
    Text.defaultProps = Text.defaultProps || {}
    Text.defaultProps.style = {
        color: colors.text,
        fontFamily: 'Mulish_Regular',
        fontSize: 20,
        marginHorizontal: 20,
        textAlign: 'center',
        lineHeight: 35
    }

    var style = {
        fontSize: 11,
        margin: 6,
        alignSelf: 'center',
        color: colors.text,
        fontFamily: "Mulish_Regular"
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View>
                    <Parag><Bold>INDICAÇÃO PEP HEPATITE B</Bold></Parag>
                    <Parag>As recomendações vão depender do status sorológico da fonte e dos níveis de anti-HBs do acidentado.</Parag>
                    <Parag>Caso ocorra exposição aos materiais biológicos com risco conhecido ou provável de infecção pelo HBV, o indivíduo não imunizado ou não-respondedor à vacina deve utilizar a imunoglobulina hiperimune anti-hepatite B (IGHAHB).</Parag>
                    <Parag>Existe maior eficácia na profilaxia pós-exposição quando a imunoglobulina e a vacina são utilizadas dentro das primeiras 24 a 72 horas após o acidente. Não existe benefício comprovado após uma semana de exposição.</Parag>
                </View>

                <View>
                    <DataTable flex={1}>
                        <DataTable.Header style={styles.header}>
                            <Text style={styles.tableHeadText}>
                                Situação Vacinal e Sorologia do Profissional de Saúde Exposto
                            </Text>
                            <Text style={styles.tableHeadText}>
                                Pessoa-Fonte
                            </Text>
                        </DataTable.Header>

                        <DataTable.Header style={styles.headerInside}>
                            <Text style={styles.tableHeadText}>
                               
                            </Text>
                            <Text style={styles.tableHeadText}>
                                HBSAG Reagente
                            </Text>
                            <Text style={styles.tableHeadText}>
                                HBSAG Não reagente
                            </Text>
                            <Text style={styles.tableHeadText}>
                                HBSAG Desconhecido
                            </Text>
                        </DataTable.Header>
                        
                        <DataTable.Row>
                            <View flex={2}>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={[styles.tableData]} flex={1}>
                                            <Text style={style}><Bold>Não vacinado</Bold></Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                IGHAHB + iniciar vacinação
                                            </Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                Iniciar vacinação
                                            </Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                Iniciar vacinação
                                            </Text>
                                        </View>
                                </View>
                            <View flex={2}>
                                    <View flex={1} flexDirection={'row'}>
                                        <View style={[styles.tableData]} flex={1}>
                                            <Text style={style}><Bold>Vacinação incomplenta</Bold></Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                IGHAHB + completar vacinação
                                            </Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                Completar vacinação
                                            </Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                Completar vacinação
                                            </Text>
                                        </View>                                     
                                    </View>                                  
                            </View>
                                <View flex={2}>
                                    <View flex={1} flexDirection={'row'}>
                                        <View style={[styles.tableData]} flex={1}>
                                            <Text style={style}><Bold>Resposta vacinal conhecida e adequada (anti-HBs maior ou igual 10UI/ml)</Bold></Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                Nenhuma medida
                                            </Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                Nenhuma medida
                                            </Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                Nenhuma medida
                                            </Text>
                                        </View>                                     
                                    </View>
                                </View>
                                <View flex={2}>
                                    <View flex={1} flexDirection={'row'}>
                                        <View style={[styles.tableData]} flex={1}>
                                            <Text style={style}><Bold>Sem resposta vacinal após primeira série de doses (3 doses)</Bold></Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                IGHAHB + primeira dose da segunda série vacinal para hepatite B
                                            </Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                Iniciar nova série de vacina (três doses)
                                            </Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                Iniciar nova série de vacina (três doses)
                                            </Text>
                                        </View>                                     
                                    </View>
                                </View>

                                <View flex={2}>
                                    <View flex={1} flexDirection={'row'}>
                                        <View style={[styles.tableData]} flex={1}>
                                            <Text style={style}><Bold>Sem resposta vacinal após segunda série de doses (6 doses)</Bold></Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                IGHAHB (2x))
                                            </Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                Nenhuma medida específica
                                            </Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                IGHAHB (2x)
                                            </Text>
                                        </View>                                                                       
                                    </View>
                                </View>

                                <View flex={2}>
                                    <View flex={1} flexDirection={'row'}>
                                        <View style={[styles.tableData, styles.borderBottomRight, styles.borderBottomLeft]} flex={1}>
                                            <Text style={style}><Bold>Com resposta vacinal desconhecida</Bold></Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                Testar o(a) profissional de saúde{'\n\n'} 
                                                Se resposta vacinal adequada: nenhuma medida específica{'\n\n'}
                                                Se resposta vacinal inadequada: IGHAHB + primeira dose da vacina hepatite B ou IGHAHB (2x) se dois esquemas vacinais prévios
                                            </Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                Iniciar nova série de vacina (três doses)
                                            </Text>
                                        </View>
                                        <View style = {[styles.tableData]} flex={1}>
                                            <Text style={style}>
                                                Iniciar nova série de vacina (três doses)
                                            </Text>
                                        </View>                                                                         
                                    </View>
                                </View>

                        </View>
                        </DataTable.Row>
                    </DataTable>
                </View>

            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="FINALIZAR"
                    onPress={() => navigation.navigate('001-Inicio')}
                />
            </View>


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

    tabela: {
        marginTop: -20
    },

    textData: {
        fontSize: 16,
        margin: 6,
        textAlign: 'left',
        color: 'black',
        fontFamily: "Mulish_Regular",
    },

    textHead: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18
    },
    tableCell: {
        flex: 1
    },
    header: {
        backgroundColor: '#59998D',
        marginHorizontal:16,
        paddingHorizontal: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomColor: "#59998D"
    },
    headerInside: {
        backgroundColor: '#59998D',
        marginHorizontal:16,
        paddingHorizontal: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomColor: "#59998D"
    },
    tableHeadText: {
        fontSize: 12, 
        alignSelf: 'center',
        color: '#FFFFFF',
        fontFamily: "Mulish_Bold",
        flex:1,
        textAlignVertical:'center',
        textAlign: 'center'
    },
    tableData: {
        borderWidth: 1, 
        borderColor: '#59998D',
        
    },
    tableRow: {
        marginHorizontal:16,
        paddingHorizontal:0,
        borderWidth: 1, 
        borderColor: '#59998D',
    },
    borderTopLeft: {
        borderTopLeftRadius: 10
    },
    borderTopRight: {
        borderTopRightRadius: 10
    },
    borderBottomLeft: {
        borderBottomLeftRadius: 10
    },
    borderBottomRight: {
        borderBottomRightRadius: 10
    }
})



