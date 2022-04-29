import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
import { setStatusBarBackgroundColor, setStatusBarStyle } from 'expo-status-bar';

import ImageZoom from 'react-native-image-pan-zoom';
import { BlurView } from 'expo-blur';

import Botao from './Botao';

export default class ScreenModalImage extends Component {

  // <Fechar height={50} width={50} marginTop={25} marginRight={5} stroke={'#59998D'} />
  render() {

    return (
      <TouchableOpacity style={styles.viewModal} activeOpacity={2} onPress={this.props.toggleModal}>
        <BlurView intensity={100} tint="dark" style={styles.viewModal}>
          <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>

            <ImageZoom
              cropWidth={Dimensions.get('window').width}
              cropHeight={Dimensions.get('window').height}
              imageWidth={345}
              imageHeight={345}
              minScale={1.0}
              style={styles.viewModal}
            >

              <Image
                source={this.props.source}
                style={styles.image}>
              </Image>

            </ImageZoom>


          </View>

        </BlurView>

        <View style={styles.containerBotao}>
          <Botao
            title="Fechar"
            onPress={this.props.toggleModal}
          />
        </View>


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
  },
  closeButton: {
    height: 50,
    width: 50,
    marginTop: 25,
    marginRight: 5
  },
  containerBotao: {
    
    width: '100%'
  },
});
