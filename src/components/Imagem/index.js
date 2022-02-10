import React, { Component } from "react";
import {
    Image,
    View,
    StyleSheet
} from "react-native"

export default class Imagem extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Image 
                    source={this.props.source}
                    style={styles.imagem}
                />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22.5
    },

    imagem: {
        width: 300,
        height: 300
    }
});