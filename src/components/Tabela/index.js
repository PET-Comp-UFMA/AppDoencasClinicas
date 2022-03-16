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
    }
    render() {

        // Limpa o array antes de adicionar
        this.tableHead = [];
        this.tableData = [];

        // Texto opcional
        let Head;
        if (this.props.tableHead) {
            Head = (<DataTable.Header
                        style={styles.header}
                        key={Math.random().toString(36)} // Gera uma chave aleatória para cada objeto. Evita chaves iguais
                    >
                        {this.tableHead}
                    </DataTable.Header>)
        }

        // Arrumar todos os títulos das colunas
        for ( var numObjeto in this.props.tableHead ) {
            this.tableHead.push(
                <View
                    key={Math.random().toString(36)}
                    style={styles.container}
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

                let style = [styles.tableData]


                // Objeto da esquerda
                if (numObjeto == 0) {
                    // Se só tiver uma linha
                    if (this.props.tableData.length == 1) {
                        style.push(styles.borderBottomLeft)
                        // Se não tiver cabeçalho
                        if (numLinha == 0 && !Head) {
                            style.push(styles.borderTopLeft)
                        }
                    // Se tiver mais que uma linha, essa for a primeira e não tiver cabeçalho
                    } else if (numLinha == 0 && !Head) {
                        style.push(styles.borderTopLeft)
                    
                    // Se essa for a última linha
                    } else if (numLinha == this.props.tableData.length - 1) {
                        style.push(styles.borderBottomLeft)
                    }
                // Objeto da direita
                } else if (numObjeto == this.props.tableData[numLinha].length - 1) {
                    if (this.props.tableData.length == 1) {
                        style.push(styles.borderBottomRight)
                        if (numLinha == 0 && !Head) {
                            style.push(styles.borderTopRight)
                        }
                    } else if (numLinha == 0 && !Head) {
                        style.push(styles.borderTopRight)
                    
                    // Se essa for a última linha
                    } else if (numLinha == this.props.tableData.length - 1) {
                        style.push(styles.borderBottomRight)
                    }
                }
                
                dataLinha.push(
                    <View flex={5} 
                                style={style}
                                key={Math.random().toString(36)}
                                >
                                <Text style={this.cellStyle.cell} onPress={this.props.tableData[numLinha][numObjeto].props.onPress}>{this.props.tableData[numLinha][numObjeto].props.children}</Text>
                            </View>
                )
            }

            this.tableData.push(
                <DataTable.Row style={{borderBottomWidth: 0}}
                    key={Math.random().toString(36)} // Gera uma chave aleatória para cada objeto. Evita chaves iguais   
                >
                    {dataLinha}
                </DataTable.Row>
            )
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