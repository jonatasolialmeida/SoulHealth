import React from 'react';
import { Text, View } from 'react-native';
import Imc from './Imc';
import { box, format, titulo } from '../../style/style';

export default function InfoApresentImc() {
    return (
        
        <View style={box.container}>
            <View style={titulo.container}>
                <Text style={titulo.tit}>
                    IMC
                </Text>
            </View>
            <View>
                <Text style={format.parag}>
                O índice de massa corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal. Desenvolvido pelo polímata Lambert Quételet no fim do século XIX, trata-se de um método fácil e rápido para a avaliação do nível de gordura de cada pessoa, sendo, por isso, um preditor internacional de obesidade adotado pela Organização Mundial da Saúde (OMS).
                </Text>
            </View>
            <View>
                <Imc />
            </View>
        </View>
    )
}