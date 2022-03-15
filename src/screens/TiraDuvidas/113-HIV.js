import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import Bold from '@components/Bold';
import Parag from '@components/Parag';
import Botao from '@components/Botao';
import Tabela from '@components/Tabela';
import { useTheme } from '@react-navigation/native';

export default function T113({ navigation }) {
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
                    <Parag>Acolher as PVHIV significa incluí-las no serviço de saúde, considerando suas expectativas e necessidades. A experiência em lidar com pessoas vivendo com outras doenças crônicas confere à equipe da Atenção Básica um saber-fazer que pode ser ampliado para o cuidado às PVHIV.</Parag>
                    <Parag>Após se infectar pelo vírus HIV, uma pessoa pode permanecer durante anos com o vírus no organismo, sem apresentar nenhum sintoma. Nesse caso, dizemos que a pessoa é portadora do HIV.</Parag>
                    <Parag><Bold>AIDS ou SIDA – Síndrome da Imunodeficiência Adquiridas</Bold></Parag>
                    <Parag>É uma síndrome, porque apresenta um conjunto de sinais e sintomas que não dizem respeito apenas a uma doença. É uma síndrome da imunodeficiência, porque o vírus prejudica o sistema imunológico, tornando-o deficiente. E é adquirida, uma vez que resulta da ação de um agente. externo ao organismo humano.</Parag>
                    <Parag><Bold>Lembre-se:</Bold> O HIV é o vírus da imunodeficiência humana e a aids surge quando a pessoa se encontra doente, com manifestações decorrentes da presença do vírus no organismo. Assim, a pessoa pode estar infectada pelo HIV e não estar doente com aids.</Parag>
                </View>

                <View>
                    <Tabela tableData={tableData} tableHead={tableHead}></Tabela>
                </View>

                <View>
                    <Parag><Bold>Prevenção</Bold></Parag>
                    <Parag>Usar preservativo (camisinha) em todas as relações sexuais (vaginal anal e oral).</Parag>
                    <Parag>Não compartilhar seringas, agulhas e outros objetos perfurocortantes não esterilizados com outras pessoas.</Parag>
                    <Parag>Mulheres vivendo com HIV/aids não devem amamentar, e necessitam realizar acompanhamento pré-natal para que sejam tomadas as medidas necessárias à prevenção da transmissão vertical do HIV (da mãe para a criança).</Parag>

                    <Parag><Bold>Diagnóstico</Bold></Parag>
                    <Parag>O diagnóstico do HIV é feito por meio de testes laboratoriais ou testes rápidos. Por isso, ofereça o teste de HIV na sua Unidade de Saúde.</Parag>
                    <Parag><Bold>Lembre-se:</Bold> não é preciso exigir a participação das pessoas em palestras e reuniões antes ou depois do teste. Para realizar o teste, basta o profissional estar preparado para conversar sobre os possíveis resultados e esclarecer as dúvidas.</Parag>
                    <Parag>A infecção pelo HIV ainda não tem cura, mas tem tratamento. Quanto mais cedo uma pessoa for diagnosticada e tratada, melhor estará a condição de seu sistema imunológico e melhor será a qualidade de vida dessa pessoa.</Parag>
                    <Parag><Bold>Atenção:</Bold> a notificação compulsória é obrigatória a todos os profissionais de saúde: médicos, enfermeiros, odontólogos, médicos veterinários, biólogos, biomédicos, farmacêuticos e outros no exercício da profissão, bem como os responsáveis por organizações e estabelecimentos públicos e particulares de saúde e de ensino.</Parag>

                    <Parag><Bold>Tratamento</Bold></Parag>
                    <Parag>Ainda não há cura para a infecção pelo HIV, mas há tratamento. Com o uso dos medicamentos antirretrovirais (antes chamados de coquetel), que são disponibilizados gratuitamente pelo SUS, a pessoa pode levar uma vida com qualidade.</Parag>
                    <Parag>Quanto mais cedo for feito o diagnóstico e iniciado o tratamento, melhor será a qualidade de vida da pessoa, e menor será a probabilidade de evolução da infecção para a aids. </Parag>
                    <Parag>Para mais informações, acesse o “Protocolo Clínico e Diretrizes Terapêuticas para Manejo da Infecção pelo HIV em Adultos”.</Parag>
                </View>

                <View>
                    <Parag>Caso tenha concluído, clique em <Bold>FINALIZAR</Bold>, e será direcionado ao menu principal.</Parag>
                    <Parag>Ou, se preferir, clique na seta para a <Bold>ESQUERDA</Bold> para relembrar algumas informações.</Parag>
                    <Parag>Ou ainda você poderá clicar em <Bold>TIRA DÚVIDAS</Bold> para ir ao menu dessa seção.</Parag>
                </View>



            </ScrollView>

            <View style={styles.containerBotao}>
                <Botao
                    title="Tira Dúvidas"
                    onPress={() => navigation.navigate('102-TiraDuvidas')}
                />
                <Botao
                    title="Finalizar"
                    onPress={() => navigation.navigate('001-Inicio')}
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
    textTitle: {

        margin: 6,
        alignSelf: 'center',
        color: 'black',
        fontFamily: "Mulish_Regular",
    },

    tabela: {
        marginTop: -20
    },

    textData: {
        fontSize: 16,
        margin: 6,
        textAlign: 'left',
        color: 'black',
        fontFamily: "Mulish_Regular",
    },

    textHead: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18
    }
});

const tableHead = [
    <Text style={styles.textHead}>Transmissão do HIV</Text>,
]
const tableData = [
    [
        <Text style={styles.textTitle}>
            <Bold>Transmissão não ocorre nestes casos</Bold>
        </Text>,

        <Text style={styles.textTitle}>
            <Bold>Transmissão ocorre nestes casos</Bold>
        </Text>,
    ],

    [

        <Text style={styles.textData}>
            Beijo, abraço, carícia e aperto de mão.{"\n\n"}

            Picada de insetos.{"\n\n"}

            Saliva, lágrima, espirro e suor.{"\n\n"}

            Copos, talheres e pratos.{"\n\n"}

            Banheiro, vaso sanitário, piscina.
        </Text>,

        <Text style={styles.textData}>
            Relação sexual desprotegida (vaginal, anal ou oral).{"\n\n"}

            Da mãe para a criança, durante a gravidez, parto, sem as ações de profilaxia ou durante a amamentação.{"\n\n"}

            Pelo uso de instrumentos que cortam ou perfuram, não estabilizados (ex: agulhas, lâminas de bisturi, instrumentos para tatuagem, piercing, manicure/pedicure).
        </Text>
    ],


];


