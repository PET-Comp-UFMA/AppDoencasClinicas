import React from "react";
import { Component } from "react/cjs/react.production.min";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";

export default class Botao extends Component {
    constructor(props){
        super(props);

        var titulo = this.props.title;
        titulo = titulo.toUpperCase();

        this.setState = { title: titulo }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.botao}
                    onPress = {this.props.onPress}>
                    <Text style={styles.titulo}>
                        {this.setState.title}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
    },
    botao: {
        
        backgroundColor: "#59998D",
        borderRadius: 15,
        borderWidth: 0,
        height: 45,
        width: '80%',
        margin: 15,
        justifyContent: 'center',

    },
    titulo: {
        color: "#FFF",
        fontSize: 18,
        textAlign: 'center',
    }
});