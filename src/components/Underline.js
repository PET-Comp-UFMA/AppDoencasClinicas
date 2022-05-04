import React,{ Component } from "react";
import { Text } from "react-native";


export default class Underline extends Component {  
    render(){
        return(
            <Text style={{textDecorationLine: 'underline'}}>{this.props.children}</Text>
        );
    }
};