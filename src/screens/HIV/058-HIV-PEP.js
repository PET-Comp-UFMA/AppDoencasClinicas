import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';

import Botao from '../../components/Botao';
import Bold from '../../components/Bold';
import { useTheme } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';

export default function T058({ navigation }) {
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
                    
                {/* TABELA AQUI */}
                <View>
                    <DataTable flex={1}>
                        <DataTable.Header style={styles.header}>
                            <Text style={styles.tableHeadText}>
                                Segmentos Populacionais Prioritários
                            </Text>
                        </DataTable.Header>
                        
                        <DataTable.Row>
                        <View flex={2}>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={[styles.tableData, styles.borderBottomLeft, styles.borderBottomRight]} flex={1}>
                                            <Text style={style}><Bold>A duração da PEP é de 28 dias.</Bold></Text>
                                        </View>
                                </View>
                            </View>
                        </DataTable.Row>
                    </DataTable>
                </View>

                <View>
                    <DataTable flex={1}>
                        <DataTable.Header style={styles.header}>
                            <Text style={styles.tableHeadText}>
                                Medicamento
                            </Text>
                            <Text style={styles.tableHeadText}>
                                Apresentação
                            </Text>
                            <Text style={styles.tableHeadText}>
                                Posologia
                            </Text>
                        </DataTable.Header>
                        
                        <DataTable.Row>

                        <View flex={2}>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}><Bold>F⁽ᵃ⁾ + 3TC</Bold></Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}>
                                                Comprimido coformulado(TDF 300mg + 3TC 300mg)
                                                {'\n\n'}
                                                <Bold>Na indisponibilidade da apresentação coformulada:</Bold>
                                                {'\n\n'}
                                                Comprimido TDF 300mg
                                                {'\n'}
                                                +
                                                {'\n'}
                                                Comprimido 3TC 150mg {'\n'}
                                            </Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}>
                                                1 comprimido VO 1x/dia
                                                {'\n\n'}
                                                <Bold>Na indisponibilidade da apresentação coformulada:</Bold>
                                                {'\n\n'}
                                                1 comprimido VO 1x/dia
                                                {'\n'}
                                                +
                                                {'\n'}
                                                2 comprimidos VO 1x/dia
                                                </Text>
                                        </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={[styles.tableData, styles.borderBottomLeft]} flex={1}>
                                            <Text style={style}><Bold>G⁽ᵃ⁾</Bold></Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}><Bold>Comprimido DTG 300mg</Bold></Text>
                                        </View>
                                        <View style={[styles.tableData, styles.borderBottomRight]} flex={1}>
                                            <Text style={style}><Bold>1 Comprimido VO 1x/dia</Bold></Text>
                                        </View>
                                </View>
                            </View>        

                        </DataTable.Row>
                    </DataTable>
                </View>

                <Text>
                    <Bold>Esquemas Alternativos</Bold>
                </Text>

                <View>
                    <DataTable flex={1}>

                        <DataTable.Row>
                        <View flex={2}>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={[styles.tableData, styles.borderTopLeft, styles.borderTopRight]} flex={1}>
                                            <Text style={style}>Impossibilidade de TDF: AZT/3TC + DTG</Text>
                                        </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}>Impossibilidade de DTG: TDF/3TC + ATV + RTV</Text>
                                        </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}>Impossibilidade de ATV + RTV: TDF/3TC + DRV + RTV</Text>
                                        </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={[styles.tableData, styles.borderBottomLeft, styles.borderBottomRight]} flex={1}>
                                            <Text style={style}><Bold>A duração da PEP é de 28 dias.</Bold></Text>
                                        </View>
                                </View>
                            </View>        
                        </DataTable.Row>
                    </DataTable>
                </View>

                <View>
                    <DataTable flex={1}>
                        <DataTable.Header style={styles.header}>
                            <Text style={styles.tableHeadText}>
                                Medicamento
                            </Text>
                            <Text style={styles.tableHeadText}>
                                Apresentação
                            </Text>
                            <Text style={styles.tableHeadText}>
                                Posologia
                            </Text>
                        </DataTable.Header>
                        
                        <DataTable.Row>

                        <View flex={2}>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}><Bold>AZT/3TC</Bold></Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}>
                                                Comprimido coformulado (AZT 300mg + 3TC 150mg)
                                            </Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}>
                                                1 comprimido VO 2x/dia
                                            </Text>
                                        </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={[styles.tableData]} flex={1}>
                                            <Text style={style}><Bold>TDF</Bold></Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}>Comprimido 300mg</Text>
                                        </View>
                                        <View style={[styles.tableData]} flex={1}>
                                            <Text style={style}>1 Comprimido VO 2x/dia</Text>
                                        </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={[styles.tableData]} flex={1}>
                                            <Text style={style}><Bold>ATV+RTV</Bold></Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}>
                                                ATV: Comprimido 300mg{'\n'}
                                                RTV: Comprimido 100mg{'\n'}{'\n'}
                                            </Text>
                                        </View>
                                        <View style={[styles.tableData]} flex={1}>
                                            <Text style={style}>1 Comprimido VO 1x/dia{'\n'}1 Comprimido VO 1x/dia</Text>
                                        </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={[styles.tableData, styles.borderBottomLeft]} flex={1}>
                                            <Text style={style}><Bold>DRV+RTV</Bold></Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}>
                                                DRV: Comprimido 600mg{'\n'}
                                                RTV: Comprimido 100mg{'\n'}{'\n'}
                                            </Text>
                                        </View>
                                        <View style={[styles.tableData, styles.borderBottomRight]} flex={1}>
                                            <Text style={style}>1 Comprimido VO 2x/dia{'\n'}1 Comprimido VO 2x/dia</Text>
                                        </View>
                                </View>
                            </View>        

                        </DataTable.Row>
                    </DataTable>
                </View>

                
                <Text>
                    Pronto?{"\n\n"}
                    Se sim, é só clicar em FINALIZAR.
                </Text>

            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao 
                    title="Finalizar"
                    onPress={() => {navigation.navigate("001-Inicio")}}
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