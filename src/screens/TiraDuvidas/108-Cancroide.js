import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
import Bold from './src/components/Bold';
import Imagem from './src/components/Imagem';
import Parag from './src/components/Parag';
import Botao from './src/components/Botao';
import { useTheme } from '@react-navigation/native';

export default function T108({ navigation }) {
    // Atualiza as cores se o modo noturno estiver ligado
    const { colors } = useTheme();

    // Configuração de texto para as próximas telas
    Text.defaultProps = Text.defaultProps || {}
    Text.defaultProps.style = {
        color: colors.text,
        fontFamily: 'Mulish_Regular',
        fontSize: 20,
        marginHorizontal: 20,
        textAlign: 'center',
        lineHeight: 35
    }
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
                    <Imagem source={require("./src/assets/images/F022.png")} title={""} number={"F022"} />
                    <Imagem source={require("./src/assets/images/F023.png")} title={""} number={"F023"} />
                    <Imagem source={require("./src/assets/images/F024.png")} title={""} number={"F024"} />
                </View>



            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="Próximo"
                    onPress={() => navigation.navigate('109-HerpesGenital')}
                />

            </View>


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