import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Bold from '../../components/Bold';
import Imagem from '../../components/Imagem';
import Parag from '../../components/Parag';
import Botao from '../../components/Botao';
import Tabela from '../../components/Tabela';
import { useTheme } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';

export default function T112({ navigation }) {
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
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Parag><Bold>Agente causador:</Bold> bactéria Treponema pallidum.</Parag>
                    <Parag><Bold>Diagnóstico diferencial:</Bold> sífilis, cancroide, tuberculose cutânea, amebíase cutânea, neoplasias ulceradas, leishmaniose tegumentar americana e outras doenças cutâneas ulcerativas e granulomatosas.</Parag>
                </View>


                <View>
                    <DataTable flex={1}>
                        <DataTable.Header style={styles.header}>
                            <Text style={styles.tableHeadText}>
                                Classificação
                            </Text>
                            <Text style={styles.tableHeadText}>
                                Subclassificação
                            </Text>
                            <Text style={styles.tableHeadText}>
                                Manifestações Clínicas
                            </Text>
                        </DataTable.Header>
                        
                        <DataTable.Row>
                            <View style={styles.tableData} flex={1}>
                                <Text style={styles.textTitle}><Bold>Sífilis recente (até 1 ano de evolução)</Bold></Text>
                            </View>

                            <View flex={2}>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={styles.textTitle}>Primária(10-90 dias)</Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={styles.textTitle}>Úlcera rica em treponemas, geralmente única  e indolor, com borda bem definida e regular, base endurecida e fundo limpo, que ocorre no local de entrada da bactéria.</Text>
                                        </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={styles.textTitle}>Secundária(6 semanas a 6 meses)</Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={styles.textTitle}>Erupção macular eritematosa pouco visível (roséola), principalmente no tronco e raiz dos membros. Habitualmente, atingem a região plantar e palmar.</Text>
                                        </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={styles.textTitle}>Latente Recente</Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={styles.textTitle}>Período em que não se observa nenhum sinal ou sintoma. O diagnóstico faz-se exclusivamente pela reatividade dos testes treponêmicos e não treponêmico.</Text>
                                        </View>
                                </View>
                            </View>
                        </DataTable.Row>
                        <DataTable.Row>
                            <View style={[styles.tableData, styles.borderBottomLeft]} flex={1}>
                                <Text style={styles.textTitle}><Bold>Sífilis tardia (mais de 1 ano de evolução)</Bold></Text>
                            </View>

                            <View flex={2}>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={styles.textTitle}>Latente Tardia</Text>
                                        </View>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={styles.textTitle}>Período em que não se observa nenhum sinal ou sintoma. O diagnóstico faz-se exclusivamente pela reatividade dos testes treponêmicos e não treponêmico.</Text>
                                        </View>
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1} >
                                            <Text style={styles.textTitle}>Terciária (1-40 anos)</Text>
                                        </View>
                                        <View style={[styles.tableData,styles.borderBottomRight]} flex={1}>
                                            <Text style={styles.textTitle}> É comum o acometimento do sistema nervoso e do sistema cardiovascular. Além disso, verifica-se a formação de gomas sifilíticas (tumorações com tendência a liquefação) na pele, mucosas, ossos ou qualquer tecido. As lesões podem causar desfiguração, incapacidade e até morte.</Text>
                                        </View>
                                </View>
                            </View>
                        </DataTable.Row>
                    </DataTable>
                </View>

                <View>
                    <Imagem source={require("../../assets/images/F030.png")} title={""} number={"F030"} />
                    <Imagem source={require("../../assets/images/F031.png")} title={""} number={"F031"} />
                    <Imagem source={require("../../assets/images/F032.png")} title={""} number={"F032"} />
                </View> 



            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="Finalizar"
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
    texto: {
        marginBottom: 10,

    },
    textTitle: {
        fontSize: 11,
        margin: 6,
        alignSelf: 'center',
        color: 'black',
        fontFamily: "Mulish_Regular"
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
});



const tableHead = [
    <Text style={styles.textHead}>Classificação</Text>,
    <Text style={styles.textHead}>Subclassificação</Text>,
    <Text style={styles.textHead}>Manifestações Clínicas</Text>
]

const table1 = [
    [
        <Text customStyle={styles.test}>Primária(10-90 dias)</Text>,
    ],
    [
        <Text customStyle={styles.test}>Secundária(6 semanas a 6 meses)</Text>,

    ],
    [
        <Text customStyle={styles.test}>Latente Recente</Text>,
    ]
]

const table1_1 = [
    [
        <Text style={styles.textData}>Úlcera rica em treponemas, geralmente única  e indolor, com borda bem definida e regular, base endurecida e fundo limpo, que ocorre no local de entrada da bactéria.</Text>
    ],
    [
        <Text>Erupção macular eritematosa pouco visível (roséola), principalmente no tronco e raiz dos membros. Habitualmente, atingem a região plantar e palmar.</Text>
    ],
    [
        <Text> Período em que não se observa nenhum sinal ou sintoma. O diagnóstico faz-se exclusivamente pela reatividade dos testes treponêmicos e não treponêmico.</Text>
    ]
]


const tableData = [
    [
        

        <Text style={styles.textTitle}>
            <Bold>Sífilis recente (até 1 ano de evolução)</Bold>
        </Text>,

        <Text>dsadsadsa</Text>,
        <Text>sdsadsadasd</Text>

        //<Text><Tabela tableData={table1} tableStyle={styles.tableCell2} customStyle={styles.test} noRoundBorder={true}></Tabela></Text>,

        //<Text><Tabela tableData={table1_1} tableStyle={styles.tableCell} noRoundBorder={true}></Tabela></Text>,

    ],

    [
        <Text style={styles.textTitle}>
            <Bold>Sífilis tardia (mais de 1 ano de evolução)</Bold>
        </Text>,

        <Text style={styles.textData}>
            Latente tardia
        </Text>,

        <Text style={styles.textData}>
            Período em que não se observa nenhum sinal ou sintoma. O diagnóstico faz-se exclusivamente pela reatividade dos testes treponêmicos e não treponêmico.
        </Text>,
    ],

    [

        <Text style={styles.textData}>
            Terciária (1-40 anos)
        </Text>,

        <Text style={styles.textData}>
            É comum o acometimento do sistema nervoso e do sistema cardiovascular. Além disso, verifica-se a formação de gomas sifilíticas (tumorações com tendência a liquefação) na pele, mucosas, ossos ou qualquer tecido. As lesões podem causar desfiguração, incapacidade e até morte.
        </Text>,
    ],

];

