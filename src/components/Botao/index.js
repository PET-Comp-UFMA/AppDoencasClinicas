import React,{ Component } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native";

export default class Botao extends Component {
    constructor(props){
        super(props);

        var titulo = this.props.title;
        this.state = { 
            title: titulo.toUpperCase()
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.botao}
                    onPress = {this.props.onPress}>
                    <Text style={styles.titulo}>
                        {this.state.title}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: 'flex-end'
    },

    botao: {
        height: 62,
        width: "88%",
        marginHorizontal: 15,
        marginVertical: 8,
        borderRadius: 28,
        
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#59998D",
    },

    titulo: {
        color: "#FFF",
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 0.5,
        fontFamily: "Mulish-Bold"
    },
});