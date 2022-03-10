import React from "react";
import { Component } from "react/cjs/react.production.min";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';


class Tabela extends Component {
    constructor(props) {
        super(props);
        this.tableHead = [];
        this.tableData = [];
    }
    render() {

        // Texto opcional
        let Head;
        if (this.props.tableHead) {
            Head = (<DataTable.Header style={styles.border}>
                        {this.tableHead}
                    </DataTable.Header>)
        }

        // Arrumar todos os títulos das colunas
        for ( var numObjeto in this.props.tableHead ) {
            this.tableHead.push(
                <View
                    key={Math.random().toString(36)} // Gera uma chave aleatória para cada objeto. Evita chaves iguais
                    style={styles.tableHead}
                >
                    <Text style={styles.tableHeadText}>{this.props.tableHead[numObjeto].props.children}</Text>
                </View>
            );
        }

        // Configuração da fonte das células(para o tema noturno)
        this.cellStyle = StyleSheet.create({
            cell: {
                        fontSize: 12,
                        color: 'black',
                        fontFamily: "Mulish_Regular",
                        color : this.props.colors.text,
                        textAlign: 'center',
                        flex:1,
                        textAlignVertical: 'center'
                    }});

        // Arrumar todas as colunas
        for ( var numLinha in this.props.tableData) {
            var dataLinha = [];

            // Bota os objetos na linha
            for( var numObjeto in this.props.tableData[numLinha] ) {

                // Se o título está vazio, botar borda na primeira linha da data
                if (!Head && numLinha == 0) {    
                    if (numObjeto == 0) {
                        dataLinha.push(
                            <View flex={5} style={styles.tableDataFirstLeft}>
                                <Text style={this.cellStyle.cell}>{this.props.tableData[numLinha][numObjeto].props.children}</Text>
                            </View>
                        )
                        continue
                    } else if (numObjeto == this.props.tableData[numLinha].length - 1) {
                        dataLinha.push(
                            <View flex={5} style={styles.tableDataFirstRight}>
                                <Text style={this.cellStyle.cell}>{this.props.tableData[numLinha][numObjeto].props.children}</Text>
                            </View>
                        )
                        continue
                    }
                }
                
                // ultima linha
                if (numLinha == this.props.tableData.length - 1) {
                    // Esquerda
                    if (numObjeto == 0) { 
                        dataLinha.push(
                            <View flex={5} style={styles.tableDataLastLeft}>
                                <Text style={this.cellStyle.cell}>{this.props.tableData[numLinha][numObjeto].props.children}</Text>
                            </View>
                        )
                        continue
                    // Direita
                    } else if (numObjeto == this.props.tableData[numLinha].length - 1) {
                        dataLinha.push(
                            <View flex={5} style={styles.tableDataLastRight}>
                                <Text style={this.cellStyle.cell}>{this.props.tableData[numLinha][numObjeto].props.children}</Text>
                            </View>
                        )
                        continue
                    // Centro e/ou qualquer outra
                    } else {
                        dataLinha.push(
                            <View flex={5} style={styles.tableData}>
                                <Text style={this.cellStyle.cell}>{this.props.tableData[numLinha][numObjeto].props.children}</Text>
                            </View>
                        )
                        continue
                    }
                }
                else {
                    dataLinha.push(
                        <View flex={5} style={styles.tableData}>
                            <Text style={this.cellStyle.cell}>{this.props.tableData[numLinha][numObjeto].props.children}</Text>
                        </View>
                    )
                }
            }

            
            // Bota a linha na lista
            if (!Head && numLinha == 0) {
                this.tableData.push(
                    <DataTable.Row
                        key={Math.random().toString(36)} // Gera uma chave aleatória para cada objeto. Evita chaves iguais
                        style={styles.tableRowFirst}
                    >
                        {dataLinha}
                    </DataTable.Row>
                )
            }
            else if (numLinha == this.props.tableData.length - 1) {
                this.tableData.push(
                    <DataTable.Row
                        key={Math.random().toString(36)} // Gera uma chave aleatória para cada objeto. Evita chaves iguais
                        style={styles.tableRowLast}
                    >
                        {dataLinha}
                    </DataTable.Row>
                )
            } else {
                this.tableData.push(
                    <DataTable.Row
                        key={Math.random().toString(36)} // Gera uma chave aleatória para cada objeto. Evita chaves iguais
                        style={styles.tableRow}
                    >
                        {dataLinha}
                    </DataTable.Row>
                )
            }

        }

        return (
          <View style={styles.container}>
              {Head}
              <DataTable>
                {this.tableData}
              </DataTable>
          </View>  
        );
    }
}


export default function (props) {
    const { colors } = useTheme();

    return <Tabela {...props} colors={colors}/>

}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    tableHead: {
        flex:1,
    },
    border: {
        backgroundColor: '#59998D',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,  
        marginHorizontal:16,
        paddingHorizontal: 0
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
    tableDataFirstLeft: {
        borderWidth: 1, 
        borderColor: '#59998D',
        borderTopLeftRadius: 10,
    },
    tableDataFirstRight: {
        borderWidth: 1, 
        borderColor: '#59998D',
        borderTopRightRadius: 10,
    },
    tableDataLastLeft: {
        borderWidth: 1, 
        borderColor: '#59998D',
        borderBottomLeftRadius: 10    
    },
    tableDataLastRight: {
        borderWidth: 1, 
        borderColor: '#59998D',
        borderBottomRightRadius: 10
    },
    tableRow: {
        marginHorizontal:16,
        paddingHorizontal:0,
        borderWidth: 1, 
        borderColor: '#59998D',
    },
    tableRowFirst: {
        marginHorizontal:16,
        paddingHorizontal:0,
        borderWidth: 1, 
        borderColor: '#59998D',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,  
    },
    tableRowLast: {
        marginHorizontal:16,
        paddingHorizontal:0,
        borderWidth: 1, 
        borderColor: '#59998D',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,  
    }
})