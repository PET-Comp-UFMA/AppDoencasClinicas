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

export default function T057({ navigation }) {
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
                    <DataTable flex={1}>
                        <DataTable.Header style={styles.header}>
                            <Text style={styles.tableHeadText}>
                                Segmentos Populacionais Prioritários
                            </Text>
                            <Text style={styles.tableHeadText}>
                                Definição
                            </Text>
                            <Text style={styles.tableHeadText}>
                                Critério de indicação de PREP
                            </Text>
                        </DataTable.Header>
                        
                        <DataTable.Row>

                        <View flex={2}>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}><Bold>Gays e outros homens que fazem sexo com homens(HSH)</Bold></Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}>Homens que se relacionam sexualmente e/ou afetivamente com outros homens</Text>
                                        </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}><Bold>Pessoas Trans</Bold></Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}>Pessoas que expressam um gênero diferente do sexo definido ao nascimento. Nesta definição são incluídos: homens e mulheres transexuais, transgêneros, travestis e outras pessoas com gêneros não binários</Text>
                                        </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}><Bold>Profissionais do sexo</Bold></Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}>Homens, Mulheres e pessoas trans que recebem dinheiro ou benefícios em troca de serviços sexuais, regular ou ocasionalmente</Text>
                                        </View>
                                </View>
                            </View>        
                            <View style={styles.tableData} flex={1}>
                                <Text style={style}>Relação sexual anal(receptiva ou insertiva) ou vaginal, sem uso de preservativo, nos últimos seis meses 
                                {'\n\n'} 
                                E/OU
                                {'\n\n'}
                                Episódios recorrentes de Infecções Sexualmente Transmissíveis(IST)
                                {'\n\n'}
                                E/OU
                                {'\n\n'}
                                Uso repetitivo de Profilaxia Pós-Exposição(PEP)</Text>
                            </View>


                        </DataTable.Row>
                        <DataTable.Row>
                            <View style={[styles.tableData, styles.borderBottomLeft]} flex={1}>
                                <Text style={style}><Bold>Parceiras sorodiscordantes para o HIV</Bold></Text>
                            </View>

                            <View flex={2}>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}>Parceria Heterossexual ou homossexual na qual uma das pessoas é infectada pelo HIV e outra não</Text>
                                        </View>
                                        <View style={[styles.tableData, styles.borderBottomRight]} flex={1}>
                                            <Text style={style}>Relação sexual anal ou vaginal com uma pessoa infectada pelo HIV sem preservativo</Text>
                                        </View>
                                </View>
                            </View>
                        </DataTable.Row>
                    </DataTable>
                </View>
                
                <Text>
                    Indica-se para a PrEP a combinação de tenofovir associado a entricitabina, em dose fixa combinada TDF/FTC 300/200mg, um comprimido por dia, via oral, em uso contínuo.{"\n"}{"\n"}

                    Para relações anais, são necessários cerca de 7 (sete) dias de uso de PrEP para alcançar a proteção. Para relações vaginais, são necessários aproximadamente 20 (vinte) dias de uso. 
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