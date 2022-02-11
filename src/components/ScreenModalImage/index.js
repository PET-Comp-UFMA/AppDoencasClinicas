import React, { Component } from "react";
import {
    Image,
    View,
    StyleSheet,
    Modal,
    Text,
    TouchableOpacity
} from "react-native"

import Fechar from 'icons/close.svg';

export default class ScreenModalImage extends Component{

    render() {

        return(
            <View style={styles.viewModal}>
                <TouchableOpacity style={styles.buttonCloseModal} onPress={this.props.toggleModal}>
                    <Fechar height={50} width={50} marginTop={3} marginRight={5} stroke={'#59998D'} />
                </TouchableOpacity>

                <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>

                <View style={styles.viewTituloModal}>
                    <Text style={styles.tituloModal}>{this.props.title}</Text>
                </View>

                <Image 
                    source={this.props.source} 
                    style={styles.imageModal}
                />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewModal: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)"
    },

    textClose: {
        fontSize: 40
    },

    buttonCloseModal: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    iconCloseModal: {
        marginTop: 3,
        marginRight: 5,
        width: 50, 
        height: 50
    },

    viewTituloModal:{
        alignItems: "center",
        justifyContent: "center",
        width: 345,
        height: 45,
        backgroundColor: "#59998D"
    },

    tituloModal: {
        fontSize: 22,   
        color: "#fff",
        fontFamily: "Mulish-Bold"
    },

    imageModal: {
        width: 345,
        height: 345
    }
});