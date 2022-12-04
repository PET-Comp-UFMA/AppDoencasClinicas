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

export default function T310({ navigation }) {
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
                    <Parag>ROTEIRO PARA ABORDAGEM INICIAL PARA PVHIV</Parag>
                </View>

                <View>
                    <DataTable flex={1}>
                    <DataTable.Header style={styles.header}>
                            <Text style={styles.tableHeadText}>
                                SITUAÇÃO
                            </Text>
                            <Text style={styles.tableHeadText}>
                                INTERVALO DE RETORNO
                            </Text>
                            <Text style={styles.tableHeadText}>
                                OBJETIVOS PRINCIPAIS
                            </Text>
                        </DataTable.Header>

                        <DataTable.Row>
                            <View flex={2}>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                Após introdução ou alteração da TARV
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Entre 7 e 15 dias
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Observar e manejar eventos adversos imediatos e dificuldades relacionadas à adesão{'\n'}Fortalecer vínculo com equipe e serviço de saúde
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                Até adaptação à TARV
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Mensal/bimestral
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Observar e manejar eventos adversos tardios e dificuldades relacionadas à adesão em longo prazo{'\n'}Fortalecer vínculo com equipe e serviço de saúde
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                PVHIV em TARV com supressão viral e assintomática
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Até 6 meses
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                        Observar e manejar eventos adversos tardios e dificuldades relacionadas à adesão em longo prazo{'\n'}Avaliar manutenção da supressão viral e eventual falha virológica{'\n'}Manejar comorbidades
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                PVHIV em TARV sem supressão viral, sintomática ou com comorbidades não controladas
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Individualizar
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Avaliar falhas na adesão e seus motivos{'\n'}Verificar possibilidade de resistência(s) viral(is) à TARV e necessidade de troca{'\n'}Avaliar e investigar sintomas{'\n'}Manejar comorbidades não controladas
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                PVHIV que ainda não iniciou TARV
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Individualizar
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Avaliar motivos de recusa da TARV e abordar benefícios do uso{'\n'}Avaliar e investigar sintomas{'\n'}Fortalecer vínculo com equipe e serviço de saúde
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
                    title="MENU ANTERIOR"
                    onPress={() => navigation.navigate('310-HIV')}
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



