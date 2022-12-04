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

export default function T317({ navigation }) {
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
                    <Parag>Esquema de TARV inicial preferencial para adultos</Parag>
                </View>

                <View>
                    <DataTable flex={1}>
                    <DataTable.Header style={styles.header}>
                            <Text style={styles.tableHeadText}>
                                SITUAÇÃO
                            </Text>
                            <Text style={styles.tableHeadText}>
                                TERAPIA ANTIRRETROVIRAL
                            </Text>
                            <Text style={styles.tableHeadText}>
                                DOSE DIÁRIA
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
                                                Adultos em início de tratamento
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            TDF/3TC + DTG
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            (300mg/300mg) “2 x 1” + 50mg 1x/dia
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            ------
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                Coinfecção TB-HIV sem critérios de gravidade
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            TDF/3TC/EFV
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            (300mg/300mg/600mg) – DFC 1x/dia
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            Concluído o tratamento completo para TB, poderá ser feita a mudança (switch) do EFV para DTG.
                                        </Text>
                                    </View>

                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData, styles.borderBottomLeft]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                Coinfecção TB-HIV com um ou mais dos critérios de gravidade{'\n'}
                                                LT-CD4+ {'<'}100 céls/mm³{'\n'}
                                                Presença de outra infecção oportunista{'\n'}
                                                Necessidade de internação hospitalar/ doença grave{'\n'}
                                                Tuberculose disseminada
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            TDF/3TC + RAL
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            (300mg/300mg) “2 x 1” 1x/dia + 400mg 12/12h
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData, styles.borderBottomRight]} flex={1}>
                                        <Text style={style}>
                                            Concluído o tratamento completo de TB, deverá ser feita a mudança (switch) do RAL para DTG em até 3 meses
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
                    onPress={() => navigation.navigate('318-HIV')}
                />
                <Botao
                    title="MENU ANTERIOR"
                    onPress={() => navigation.navigate('316-HIV')}
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



