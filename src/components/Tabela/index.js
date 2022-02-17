import React from "react";
import { Component } from "react/cjs/react.production.min";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



export default class Tabela extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: props.tableHead,
            tableData: props.tableData
        }
    }

    render() {
        const state = this.state;
       
        let headRow;
        let dataRow;
        let estiloDados;
        if (state.tableHead){
            headRow = <Row data={state.tableHead} style={styles.head} textStyle={styles.textHead} />;
            dataRow = <Rows data={state.tableData} textStyle={styles.text} />;
            estiloDados = styles.data;
        }
        else {
            headRow = <Row style={styles.head} textStyle={styles.textHead} />;
            dataRow = <Rows data={state.tableData} textStyle={styles.text} />;
            estiloDados = null;
        }
        return (
            <View style={styles.container}>
                <Table borderStyle={styles.border} style={estiloDados}>
                    {headRow}
                    <Rows data={state.tableData} textStyle={styles.textData} />
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 22.5, 
    },
    border: { 
        borderWidth: 1, 
        borderColor: '#59998D', 
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
        fontFamily: "Mulish-Bold",
    },
    textData: { 
        fontSize: 12, 
        margin: 6,
        alignSelf: 'center',
        color: 'black',
        fontFamily: "Mulish-Regular",
    },
    text: { 
        margin: 6 
    },
    vazio: {

    }
});