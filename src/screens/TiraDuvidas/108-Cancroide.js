import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import Bold from '@components/Bold';
import Imagem from '@components/Imagem';
import Parag from '@components/Parag';
import Botao from '@components/Botao';


export default function T108({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Parag><Bold>Agente causador:</Bold> Haemophilus ducreyi.</Parag>
                    <Parag><Bold>Denomina-se também:</Bold> cancro mole, cancro venéreo ou cancro de Ducrey, e é mais frequente em homens.</Parag>
                    <Parag><Bold>Período de incubação:</Bold> 3 a 5 dias.</Parag>
                    <Parag><Bold>Manifestações clínicas:</Bold> lesões são dolorosas, geralmente múltiplas. A borda é irregular, contornos eritemato-edematosos e fundo heterogêneo, recoberto por exsudato necrótico, amarelado, com odor fétido, que, quando removido, revela tecido de granulação com sangramento fácil.</Parag>
                    <Parag><Bold>Diagnóstico diferencial:</Bold> cancro duro (sífilis primária), herpes genital, LGV, donovanose e erosões traumáticas infectadas.</Parag>
                </View>

                <View>
                    <Imagem source={require("@images/F022.png")} title={""} number={"F022"}/>
                    <Imagem source={require("@images/F023.png")} title={""} number={"F023"}/>
                    <Imagem source={require("@images/F024.png")} title={""} number={"F024"}/>
                </View>

                <View style={styles.containerBotao}>
                    <Botao
                        title="Próximo"
                        onPress={() => navigation.navigate('109-HerpesGenital')}
                    />
                    
                </View>

            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingTop: 15,
        width: '100%'
    },
    containerBotao: {
        marginTop: 30,
        width: '100%'
    },
    texto: {
        marginBottom: 10,
        
    },
});