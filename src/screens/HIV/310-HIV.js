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
                        <DataTable.Row>
                            <View flex={2}>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData, styles.borderTopLeft]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                Informações específicas sobre a infecção pelo HIV
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData, styles.borderTopRight]} flex={1}>
                                        <Text style={style}>
                                            Explicar a doença: transmissão, história natural, signifi cado da contagem de LT-CD4+ e do exame de carga viral, impacto da terapia antirretroviral(TARV) na morbimortalidade{'\n'}{'\n'}
                                            • Discutir o tempo provável de soropositividade{'\n'}
                                            • Fazer revisão e documentação do primeiro exame anti-HIV{'\n'}
                                            • Checar se há contagens de LT-CD4+ e exames de CV-HIV anteriores{'\n'}
                                            • Discutir uso de ARV e se houve eventos adversos prévios (ex.: com uso de PEP e PrEP)
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                História médica atual e passada
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                        Avaliar:{'\n'}{'\n'}
                                        • História de tuberculose, prova tuberculínica, profilaxia e/ou tratamento prévio{'\n'}
                                        • História de doença mental{'\n'}
                                        • IO prévia ou atual e necessidade de profilaxia para IO{'\n'}
                                        • Outras infecções ou comorbidades atuais e/ou pregressas{'\n'}
                                        • Histórico de imunizações{'\n'}
                                        • Uso de medicamentos, práticas complementares e/ou alternativas
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                Riscos e vulnerabilidades
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                        Avaliar:{'\n'}{'\n'}
                                        • Parcerias e práticas sexuais{'\n'}
                                        • Utilização de preservativos e outros métodos de prevenção{'\n'}
                                        • História de sífilis e outras IST{'\n'}
                                        • Uso de tabaco, álcool e outras drogas{'\n'}
                                        • Interesse em reduzir os danos à saúde
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                História psicossocial
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                        Avaliar:{'\n'}{'\n'}
                                        • Reação emocional ao diagnóstico{'\n'}
                                        • Análise da rede de apoio social (família, amigos, organizações não governamentais){'\n'}
                                        • Nível educacional{'\n'}
                                        • Condições de trabalho, domicílio e alimentação
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                Saúde reprodutiva
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData]} flex={1}>
                                        <Text style={style}>
                                        Discutir/avaliar:{'\n'}{'\n'}
                                        • Desejo de ter filhos{'\n'}
                                        • Métodos contraceptivos{'\n'}
                                        • Estado sorológico da(s) parceria(s) e filho(s)
                                        </Text>
                                    </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                    <View style={[styles.tableData, styles.borderBottomLeft]} flex={1}>
                                        <Text style={style}>
                                            <Bold>
                                                História familiar
                                            </Bold>
                                        </Text>
                                    </View>
                                    <View style={[styles.tableData, styles.borderBottomRight]} flex={1}>
                                        <Text style={style}>
                                        Revisar o histórico de:{'\n'}{'\n'}
                                        • Doenças cardiovasculares e hipertensão{'\n'}
                                        • Dislipidemias{'\n'}
                                        • Diabetes{'\n'}
                                        • Neoplasias
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
                    title="EXAME FÍSICO"
                    onPress={() => navigation.navigate('311-HIV')}
                />
                <Botao
                    title="PERIODICIDADE DAS CONSULTAS"
                    onPress={() => navigation.navigate('312-HIV')}
                />
                <Botao
                    title="MENU ANTERIOR"
                    onPress={() => navigation.navigate('055-HIV')}
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



