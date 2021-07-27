import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { boasvindas, box, titulo } from '../../style/style';

export default function InfoBoasVindas() {
    const [news, setNews] = useState({
        email:'',
        guardar:''
    })

    const handleInputChange = (name, value) => {
        setNews({
            ...news, [name]: value
        })
    }
console.log(news.guardar)
    return (
        <View style={box.container}>
            <View style={titulo.container}>
                <Text style={titulo.tit}>
                    Seja Bem Vindo!
                </Text>
            </View>
            <View>
                <Text style={{textAlign:'center', fontSize:15}}>
                    Assine nossa Newsletter
                </Text>
            </View>
            <View style={boasvindas.news}>
                <TextInput 
                onChangeText={
                    (valor) => handleInputChange('email', (valor))}
                placeholder='Seu@email.com'/>
                <Button
                onPress={
                    ()=> setNews({
                        ...news, guardar: (news.email)
                    })
                }
                title='Enviar'/>
            </View>
        </View>
    )
}