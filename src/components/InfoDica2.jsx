import React from 'react';
import { Text, View } from 'react-native';
import { box, format, titulo } from '../../style/style';

export default function InfoDica2() {
    return (

        <View style={box.container}>
            <View style={titulo.container}>
                <Text style={titulo.tit}>
                    As novas recomendações europeias de atividade física contra a obesidade
                </Text>
            </View>
            <View>
                <Text style={format.subtit}>
                    Por Alexandre Raith, da Agência Einstein
                </Text>
                <Text style={format.paragdic}>
                    A Associação Europeia para o Estudo da Obesidade avaliou as evidências científicas para trazer diretrizes atualizadas sobre exercícios e perda de peso
                </Text>
                <Text style={format.paragdic}>
                    Especialistas da Associação Europeia para o Estudo da Obesidade  (EASO, na sigla em inglês) resumiram em um novo documento diversas pesquisas científicas atuais sobre o uso da atividade física  no combate à obesidade. O suplemento, publicado no periódico Obesity Reviews, traz recomendações para enfrentar o excesso de peso e ainda destaca o potencial dos exercícios no controle de complicações desse quadro.
                </Text>
                <Text style={format.paragdic}>
                    Em relação à perda de gordura corporal, os profissionais europeus sugerem um treinamento aeróbico programado, com cerca de 150 a 200 minutos por semana, em intensidade moderada. Adaptações individuais de acordo com o perfil da pessoa podem ser discutidos com os especialistas.
                </Text>
                <Text style={format.paragdic}>
                    No entanto, o documento ressalta que a atividade física isolada resulta em reduções de dois a três quilos, em média. Nesse quesito, a maioria dos estudos aponta que equilibrar a dieta tende a promover perdas de peso mais expressivas — embora pequenas reduções já ajudem na saúde.
                </Text>
            </View>
        </View>
    )
}