import React from 'react';
import { Text, View, Linking } from 'react-native';
import { box, format, titulo } from '../../style/style';

export default function InfoCuriosidades(props) {
    return (
        <View style={box.container}>
            <View style={titulo.container}>
                <Text style={titulo.tit}>
                    {props.curios}
                </Text>
            </View>
            <View>
                <Text style={format.subtit}>
                    {props.vocesabia}
                </Text>
            </View>
            <View>
                <Text style={format.parag}>
                    A definição de saúde possui implicações legais, sociais e econômicas dos estados de saúde e doença; sem dúvida, a definição mais difundida é a encontrada no preâmbulo da Constituição da Organização Mundial da Saúde: saúde é um estado de completo bem-estar físico, mental e social, e não apenas a ausência de doenças.
                </Text>
                <Text style={{ color: 'blue', marginBottom:15, marginLeft:15 }}
                    onPress={() => Linking.openURL('https://pt.wikipedia.org/wiki/Sa%C3%BAde')}>
                    Saiba Mais
                </Text>
            </View>
        </View>
    )
}