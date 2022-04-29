import React from 'react';
import {Component} from 'react';

import {View, 
    TouchableOpacity, 
    Text,
    StyleSheet,
    ImageBackground,
    Platform
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import { useTheme } from '@react-navigation/native';


class Titulo extends Component {
    constructor(props) {
        super(props);

        const {navigation} = this.props;
        this.navigation    = navigation;

        var titulo         = props.children;
        this.titulo        = titulo;

        this.setState      = {title: titulo};
        
    }

    render() {

        // Título da tela
        // IOS tem tamanho de fonte menor
        let flexsize;
        if (Platform.OS == "ios") {
           flexsize = 0.74;
           this.titulostyle = StyleSheet.create({
            titulo: {
                        fontSize          : 18,
                        textAlign         : 'center',
                        color             : '#323F4B',
                        fontFamily        : 'Mulish_Bold',
                        textAlignVertical : 'center',
                        color             : this.props.colors.text
                    }});
        } else {
            flexsize=0.85;
            this.titulostyle = StyleSheet.create({
            titulo: {
                        fontSize          : 28,
                        textAlign         : 'center',
                        color             : '#323F4B',
                        fontFamily        : 'Mulish_Bold',
                        textAlignVertical : 'center',
                        color             : this.props.colors.text
                    }});
        }

        let backbutton;
        // Verifica se pode voltar
        if (this.navigation.canGoBack()) {
            if (Platform.OS == "android") {
                if (this.props.dark) {
                backbutton = (
                    <TouchableOpacity onPress={this.navigation.goBack}>
                        <ImageBackground style={styles.image} source={require("../assets/icons/left_white.png")}/>
                    </TouchableOpacity>
                );
                } else {
                    backbutton = (
                        <TouchableOpacity onPress={this.navigation.goBack}>
                            <ImageBackground style={styles.image} source={require("../assets/icons/left.png")}/>
                        </TouchableOpacity>
                    );
                }
            }
        }


        return (
            <View style={styles.view} >
                {backbutton}
                <View
                    flex={flexsize} // Por algum motivo o react tem uma borda no header
                >
                    <Text style={this.titulostyle.titulo}>    
                        {this.titulo}
                    </Text>
                </View>
            </View>
        );
    }
}

export default function (props) {
    const navigation = useNavigation();

    const { colors, dark } = useTheme();

    return <Titulo {...props} navigation={navigation} colors={colors} dark={dark}/>

}

const styles = StyleSheet.create({
    view: {
        flex              : 1,
        flexDirection     : "row",
        justifyContent    : "flex-start",
        alignItems        : "center"
    },
        text: {
        color             : 'black',
        fontSize          : 30,
        textAlign         : 'center',
        color             : '#323F4B',
        fontFamily        : 'Mulish_Bold',
        textAlignVertical : 'center'
    },
    image: {
        width: 25,
        height: 25
    }
});
