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

export default function T313({ navigation }) {
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
                    <Parag>Frequência de solicitação de exame de LT-CD4+ para monitoramento laboratorial de PVHIV, de acordo com a situação clínica</Parag>
                </View>

                <View>
                    <DataTable flex={1}>
                    <DataTable.Header style={styles.header}>
                            <Text style={styles.tableHeadText}>
                                SITUAÇÃO CLÍNICA
                            </Text>
                            <Text style={styles.tableHeadText}>
                                CONTAGEM DE LT-CD4+
                            </Text>
                            <Text style={styles.tableHeadText}>
                                FREQUÊNCIA DE SOLICITAÇÃO
                            </Text>
                        </DataTable.Header>

                        <DataTable.Row>
                            <View flex={2}>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                PVHIV com:{'\n'}
                                                • Em uso de TARV; e{'\n'}
                                                • Assintomática; e{'\n'}
                                                • Com carga viral indetectável
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>  
                                            CD4 {'<'}350 céls/mm³{'\n'}
                                            CD4 {'>'}350 céls/mm³ em dois exames consecutivos, com pelo menos 6 meses de intervalo
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            A CADA 6 MESES{'\n'}
                                            NÃO SOLICITAR
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData, styles.borderBottomLeft]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                            PVHIV que NÃO apresentem as condições acima, tais como:{'\n'}
                                            • Sem uso de TARV; ou{'\n'}
                                            • Evento clínico(a); ou{'\n'}
                                            • Em falha virológica
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Qualquer valor de LT-CD4+
                                        </Text> 
                                    </View>
                                    <View style={[styles.tableData, styles.borderBottomRight]} flex={1}>
                                        <Text style={style}>
                                            A CADA 6 MESES
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </DataTable.Row>
                    </DataTable>
                </View>

            </ScrollView>

            <View style={styles.containerBotao}>
            <Botao
                    title="PRÓXIMO"
                    onPress={() => navigation.navigate('315-HIV')}
                />
            <Botao
                    title="MENU ANTERIOR"
                    onPress={() => navigation.navigate('313-HIV')}
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



