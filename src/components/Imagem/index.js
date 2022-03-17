import React, { Component } from "react";
import {
  Image,
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native"


import ScreenModalImage from "../ScreenModalImage";

export default class Imagem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleModal}>

          <ImageBackground
            source={this.props.source}
            style={styles.image}>
          </ImageBackground>

          <Modal
            visible={this.state.visible}
            animationType={this.props.animation ? this.props.animation : "fade"}
            transparent={this.props.transparent ? this.props.transparent : true}
            hardwareAccelerated={true}
            statusBarTranslucent={true}
          >

            <ScreenModalImage
              source={this.props.source}
              toggleModal={this.toggleModal}
              title={this.props.title ? this.props.title : "Título"}
              number={this.props.number ? this.props.number : "F000"}
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
  image: {
    width: 360,
    height: 350
  },
  text: {
    fontSize: 24,
    fontFamily: 'Mulish_Bold',
    color: 'white',
    textAlign: 'center',
    width: 165,
  },
  textbg: {
    overflow: "hidden",
    width: 165,
    height: 39,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
});
