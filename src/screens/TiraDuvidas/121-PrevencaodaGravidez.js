import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Bold from '../../components/Bold';
import Parag from '../../components/Parag';
import Botao from '../../components/Botao';
import Tabela from '../../components/Tabela';
import { useTheme } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';

export default function T121({ navigation }) {
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
                    <Parag>De acordo com o Decreto-Lei nº 2.848, de 7 de dezembro de 1940, artigo 128, inciso II do Código Penal brasileiro 314, o abortamento é permitido quando a gravidez resulta de estupro, risco de morte da gestante ou anencefalia.</Parag>
                    <Parag>O método mais adequado para a anticoncepção de emergência consiste na utilização de levonorgestrel.</Parag>
                </View>

                <View>
                    <DataTable flex={1}>
                        <DataTable.Header style={styles.header}>
                            <Text style={styles.tableHeadText}>
                                APREENTAÇÃO
                            </Text>
                            <Text style={styles.tableHeadText}>
                                POSOLOGIA
                            </Text>
                        </DataTable.Header>
                        
                        <DataTable.Row>
                            <View style={styles.tableData} flex={1}>
                                <Text style={style}> Comprimidos de 0,75mg (cartela com 2 comprimidos) e 1,5mg de levornogestrel (cartela com 1 comprimido)</Text>
                            </View>

                            <View flex={1}>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}><Bold>1ª opção:</Bold> comprimido de 1,5mg VO ou 2 comprimidos de 0,75mg, dose única, até 5 dias após a relação sexual</Text>
                                        </View>
                                
                                </View>
                                <View flex={1} flexDirection={'row'}>
                                        <View style={styles.tableData} flex={1}>
                                            <Text style={style}> <Bold>2ª opção:</Bold> 1 comprimido de 0,75mg, VO de 12/12 horas, no total de 2 comprimidos, até 5 dias após a relação sexual</Text>
                                        </View>
                                       
                                </View>
                            </View>
                        </DataTable.Row>
                    </DataTable>
                </View>

                <View>
                    <Parag>Você poderá escolher uma das opções abaixo. E ainda, clicar em <Bold>TIRA DÚVIDAS</Bold> para ir ao menu dessa seção, ou em <Bold>FINALIZAR</Bold> e ser direcionado ao <Bold>MENU PRINCIPAL</Bold>.</Parag>
                </View>



            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="Tira Dúvidas"
                    onPress={() => navigation.navigate('102-TiraDuvidas')}
                />
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
