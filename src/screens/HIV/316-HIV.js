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

export default function T316({ navigation }) {
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
                    <Parag>Frequência de realização de exames complementares no seguimento clínico</Parag>
                </View>

                <View>
                    <DataTable flex={1}>
                    <DataTable.Header style={styles.header}>
                            <Text style={styles.tableHeadText}>
                                EXAME
                            </Text>
                            <Text style={styles.tableHeadText}>
                                SEGUIMENTO
                            </Text>
                            <Text style={styles.tableHeadText}>
                                OBSERVAÇÃO
                            </Text>
                        </DataTable.Header>

                        <DataTable.Row>
                            <View flex={2}>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                Hemograma
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            6-12 meses
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Repetir em 2-8 semanas se início ou troca de TARV com AZT{'\n'}
                                            Intervalo de 3-6 meses se em uso de AZT ou outras drogas mielotóxicas
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                Creatinina sérica e Taxa de Filtração{'\n'}
                                                Glomerular estimada (TFGe)
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            ANUAL
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Intervalo de 3-6 meses se em uso de TDF ou outras drogas nefrotóxicas, TFGe {'<'}60 mL/min ou risco aumentado para doença renal (ex.: diabetes, hipertensão)
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                Exame básico de urina
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            ANUAL
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Intervalo de 3-6 meses se em uso de TDF ou outras drogas nefrotóxicas, TFGe {'<'}60 mL/min, proteinúria ou risco aumentado para doença renal (ex.: diabetes, hipertensão)
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                AST, ALT, FA, BT e frações
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            3-12 meses
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Intervalos mais frequentes em caso de uso de drogas hepatotóxicas, doença hepática ou coinfecções com HCV ou HBV
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                CT, LDL, HDL e TGL
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            ANUAL
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Intervalo de 6 meses em caso de alteração na última análise
                                        </Text>
                                    </View>
                                </View>        
                                <View flex={1} flexDirection={'row'}>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        <Bold>
                                            Glicemia de jejum
                                        </Bold>
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        ANUAL
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        Considerar teste de tolerância à glicose caso o resultado da glicemia de jejum esteja entre 100 e 125mg/dL
                                    </Text>
                                </View> 
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        <Bold>
                                            PT
                                        </Bold>
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        Anual, se exame inicial {'<'}5mm
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        Iniciar tratamento para infecção latente quando PT ≥5mm e excluída TB ativa 
                                    </Text>
                                </View> 
                                </View> 
                                <View flex={1} flexDirection={'row'}>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        <Bold>
                                            Teste imunológico para sífilis
                                        </Bold>
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        Semestral/conforme indicação
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        Considerar maior frequência de triagem em caso de risco ou exposição
                                    </Text>
                                </View> 
                                </View> 
                                <View flex={1} flexDirection={'row'}>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        <Bold>
                                            Anti-HCV
                                        </Bold>
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        ANUAL/conforme indicação
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        Considerar maior frequência de triagem em caso de risco ou exposição{'\n'}
                                        Solicitar carga viral de HCV se anti-HCV positivo ou em caso de suspeita de infecção agud
                                    </Text>
                                </View> 
                                </View> 
                                <View flex={1} flexDirection={'row'}>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        <Bold>
                                            Triagem HBV(HBsAg e anti-HBc total)
                                        </Bold>
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        ANUAL/conforme indicação
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        Considerar maior frequência de triagem em caso de risco ou exposição{'\n'}
                                        Vacinar pacientes não imunizados{'\n'}
                                        Pacientes imunizados (anti-HBs positivos) não necessitam nova triagem para HBV
                                    </Text>
                                </View> 
                                </View> 
                                <View flex={1} flexDirection={'row'}>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        <Bold>
                                            Rastreamento das alterações ósseas
                                        </Bold>
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        2-3 ANOS
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        Mulheres após 40 anos(pré-menopausa){'\n'}
                                        Homens após 40 anos
                                    </Text>
                                </View> 
                                </View> 
                                <View flex={1} flexDirection={'row'}>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        <Bold>
                                            Investigação de TB
                                        </Bold>
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        Em todas as consultas
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        Fazer rastreamento clínico, com busca ativa de sinais e sintomas sugestivos de TB – tosse há mais de três semanas, sudorese noturna, febre, perda de peso
                                    </Text>
                                </View> 
                                </View> 
                                <View flex={1} flexDirection={'row'}>
                                <View style={[styles.tableData, styles.borderBottomLeft]} flex={1}>
                                    <Text style={style}>
                                        <Bold>
                                            Avaliação cardiovascular (escala de risco de Framingham)
                                        </Bold>
                                    </Text>
                                </View>
                                <View style={[styles.tableData]} flex={1}>
                                    <Text style={style}>
                                        ANUAL
                                    </Text>
                                </View>
                                <View style={[styles.tableData, styles.borderBottomRight]} flex={1}>
                                    <Text style={style}>
                                        Frequências maiores conforme risco inicial e TARV em uso
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
                    onPress={() => navigation.navigate('317-HIV')}
                />
                <Botao
                    title="MENU ANTERIOR"
                    onPress={() => navigation.navigate('315-HIV')}
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



