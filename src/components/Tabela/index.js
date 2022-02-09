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
            tableHead: ['Head', 'Head2', 'Head3'],
            tableData: [
                ['1', '2', '3', ],
                ['a', 'b', 'c',],
                ['1', '2', '456\n789', ],
                ['a', 'b', 'c', ]
            ]
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Table borderStyle={styles.border} style={styles.data}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.textHead} />
                    <Rows data={state.tableData} textStyle={styles.text} />
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
    },
    border: { 
        borderWidth: 1, 
        borderColor: '#59998D', 
    },
    head: { 
        height: 30, 
        backgroundColor: '#59998D', 
        alignContent: 'center', 
        borderTopStartRadius: 5, 
        borderTopEndRadius: 5,
    },
    data: {
        borderBottomStartRadius: 5, 
        borderBottomEndRadius: 5,
    },
    textHead: { 
        fontSize: 12, 
        margin: 6 
    },
    text: { 
        margin: 6 
    }
});