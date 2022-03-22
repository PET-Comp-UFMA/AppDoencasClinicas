import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    View,
} from "react-native";

export default class Parag extends Component {
    render(){
        return(
            <View style={styles.paragrafo}>
                <Text>{this.props.children}</Text>
            </View>
            
        );
    }
};

const styles = StyleSheet.create({ 
    paragrafo: {
        marginTop: 10,
        marginBottom: 15,
    }

});