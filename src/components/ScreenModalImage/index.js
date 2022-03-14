import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { setStatusBarBackgroundColor, setStatusBarStyle} from 'expo-status-bar';


import Fechar from '@icons/close.svg';

import { BlurView } from 'expo-blur';


export default class ScreenModalImage extends Component {

  render() {

    return (
      <TouchableOpacity style={styles.viewModal} activeOpacity={2} onPress={this.props.toggleModal}>
        <BlurView intensity={100} tint="dark" style={styles.viewModal}>
          <TouchableOpacity style={styles.buttonCloseModal} onPress={this.props.toggleModal}>
            <Fechar height={50} width={50} marginTop={25} marginRight={5} stroke={'#59998D'} />
          </TouchableOpacity>

          <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>

            <View style={styles.viewTituloModal}>
              <Text style={styles.tituloModal}>{this.props.title}</Text>
            </View>

            <ImageBackground
              source={this.props.source}
              style={styles.image}>
              <View style={styles.textbg}>
                <ImageBackground
                  style={styles.image}
                  source={this.props.source}
                  blurRadius={50}>
                  <View style={styles.textbg}>
                    <Text style={styles.text}>{this.props.number}</Text>
                  </View>
                </ImageBackground>
              </View>
            </ImageBackground>

          </View>
        </BlurView>      
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  viewModal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: 'black'
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
  viewTituloModal: {
    alignItems: "center",
    justifyContent: "center",
    width: 345,
    height: 45,
    backgroundColor: "#59998D"
  },
  tituloModal: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Mulish_Bold"
  },
  image: {
    width: 345,
    height: 345
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
