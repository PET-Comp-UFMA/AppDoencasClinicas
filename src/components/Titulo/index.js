import React from 'react';
import {Component} from 'react';

import {View, 
    TouchableOpacity, 
    Text,
    StyleSheet
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import { useTheme } from '@react-navigation/native';

import Seta from './src/assets/icons/left.svg';



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
        this.titulostyle = StyleSheet.create({
            titulo: {
                        fontSize          : 28,
                        textAlign         : 'center',
                        color             : '#323F4B',
                        fontFamily        : 'Mulish_Bold',
                        textAlignVertical : 'center',
                        color             : this.props.colors.text
                    }});

        let backbutton;
        // Verifica se pode voltar
        if (this.navigation.canGoBack()) {
            backbutton = (
                <TouchableOpacity onPress={this.navigation.goBack}>
                    <Seta height={25} stroke={this.props.colors.primary}/>
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
            <View style={styles.view} >
                {backbutton}
                <View
                    flex={0.85} // Por algum motivo o react tem uma borda no header
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

    const { colors } = useTheme();

    return <Titulo {...props} navigation={navigation} colors={colors}/>

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
    }
});
