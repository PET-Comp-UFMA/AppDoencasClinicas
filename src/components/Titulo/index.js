import React from 'react';
import {Component} from 'react/cjs/react.production.min';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import Seta from 'icons/left.svg';

class Titulo extends Component {
  constructor(props) {
    super(props);

    const {navigation} = this.props;
    this.navigation = navigation;

    var titulo    = props.children;
    this.titulo   = titulo.toUpperCase();

    this.setState = {title: titulo};
  }

  render() {
    let backbutton;
    // Verifica se pode voltar
    if (this.navigation.canGoBack()) {
      backbutton = (
        <TouchableOpacity onPress={this.navigation.goBack}>
          <Seta height={25} stroke={'grey'} />
        </TouchableOpacity>
      );
    } else {
      backbutton = (
        <TouchableOpacity>
          <Seta height={25} stroke={''} />
        </TouchableOpacity>
      );
    }

    return (
      <View
        flex={1}
        flexDirection  = "row"
        justifyContent = "flex-start"
        alignItems     = "center">
        {backbutton}
        <View
          flex={0.85} // Por algum motivo o react tem uma borda no header
        >
          <Text
            width={120}
            style={{
              color: 'black',
              fontSize: 30,
              textAlign: 'center',
              fontFamily: 'Mulish-Bold',
              textAlignVertical: 'center',
            }}>
            {this.titulo}
          </Text>
        </View>
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <Titulo {...props} navigation={navigation} />;
}
