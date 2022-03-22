import React from "react";
import { Component } from "react/cjs/react.production.min";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useTheme } from '@react-navigation/native';


class Tabela extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: props.tableHead,
            tableData: props.tableData
        }
    }
    render(){
        const state = this.state;
        
        let headRow;
        let estiloDados;
        if (state.tableHead){
            headRow = <Row data={state.tableHead} style={styles.head}/>;
        }
        else {
            headRow = <Row style={styles.head}  />;
            estiloDados = null;
        }

        
        const textstyle = StyleSheet.create({
            data: {
                fontSize: 12, 
                margin: 6,
                alignSelf: 'center',
                color: this.props.colors.text,
                fontFamily: "Mulish_Regular",
            }
        })

        return (
            <View style={styles.container}>
                <Table borderStyle={styles.border} style={estiloDados}>
                    {headRow}
                    <Rows data={state.tableData} textStyle={textstyle.data}/>
                </Table>
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
        flex: 1, 
        padding: 16, 
        paddingTop: 22.5, 
        backgroundColor: 'white' // Lib não aplica modificações no texto. Veja https://github.com/Gil2015/react-native-table-component/issues/145
    },
    TableText: {
        margin: 10
    },
    border: { 
        borderWidth: 1, 
        borderColor: '#59998D'
    },
    head: { 
        height: 30, 
        backgroundColor: '#59998D', 
        alignContent: 'center', 
        borderTopStartRadius: 10, 
        borderTopEndRadius: 10,
        borderColor: '#FFF'
        
    },
    data: {
        borderTopRightRadius: 10, 
        borderTopLeftRadius: 10,
        borderTopStartRadius: 10,
    },
    textHead: { 
        fontSize: 12, 
        margin: 6,
        alignSelf: 'center',
        color: '#FFFFFF',
        fontFamily: "Mulish_Bold",
    },
    textData: { 
        fontSize: 12, 
        margin: 6,
        alignSelf: 'center',
        color: 'black',
        fontFamily: "Mulish_Regular",
    },
    text: { 
        margin: 6 
    },
    vazio: {

    }
});
