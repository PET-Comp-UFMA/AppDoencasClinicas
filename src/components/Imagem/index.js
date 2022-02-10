import React, { Component } from "react";
import {
    Image,
    View,
    StyleSheet,
    Modal,
    Text,
    TouchableOpacity
} from "react-native"

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
                    <Modal visible={this.state.visible} animationType="slide" transparent={true}>
                        <View style={styles.viewModal}>
                            <TouchableOpacity style={styles.buttonCloseModal}>
                                <Image style={{width: 60, height: 60}} source={require("../../assets/icons/close.png")}/>
                            </TouchableOpacity>
                            <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
                                <View style={{alignItems: "center", justifyContent: "center", width: 340, height: 60,backgroundColor: "#59998D"}}>
                                    <Text style={{fontSize: 28}}>Titulo</Text>
                                </View>
                                <Image source={require("../../assets/images/F001.png")} style={{width: 340, height: 340}}/>
                            </View>
                        </View>
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
    },

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
    }
});