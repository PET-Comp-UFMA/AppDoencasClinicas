import React, { Component } from "react";
import {
    Image,
    View,
    StyleSheet,
    Modal,
    Text,
    TouchableOpacity,
} from "react-native"

import ScreenModalImage from "../ScreenModalImage";

export default class Imagem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }

        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal(){
        this.setState({
            visible: !this.state.visible
        });
    }



    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toggleModal}>
                    <Image 
                        source={this.props.source}
                        style={styles.imagem}
                    />
                    <Modal 
                        visible={this.state.visible} 
                        animationType={this.props.animation ? this.props.animation : "fade"} 
                        transparent={this.props.transparent ? this.props.transparent : true}
                    >
                       
                        <ScreenModalImage 
                            source={this.props.source}
                            toggleModal={this.toggleModal}
                            title={this.props.title ? this.props.title : "Titulo"}
                        />

                    </Modal>
                </TouchableOpacity>
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