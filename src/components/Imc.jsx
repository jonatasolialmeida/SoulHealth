import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { box, titulo, form } from '../../style/style';

export default function Imc(){
    const [imc, setImc] = useState({
        peso:'',
        altura:'',
        resultado:''
    })

    const handleInputChange = (name, value) => {
        setImc({
            ...imc, [name]: value
        })
    }

    const calcImc = ()=> {
        if (imc.resultado < 18.4){
            return(
                <Text>Seu Imc {imc.resultado.toFixed(2)} está abaixo do ideal, pode ocasionar (Fadiga, Stress e Ansiedade) </Text>
            )
        } if (imc.resultado > 18.4 && imc.resultado < 25){
            return(
                <Text>Seu Imc {imc.resultado.toFixed(2)} está ideal, você têm um menor risco de doenças cardíacas e vasculares.</Text>
            )
        } if (imc.resultado >= 25){
            return(
                <Text>
                    Seu Imc {imc.resultado.toFixed(2)} está acima do  ideal, pode ocasionar (Fadiga, má circulação e varizes) 
                </Text>
            )
        }
    }


    return(
        
        <View style={box.container}>
            <View style={titulo.container}>
                <Text style={titulo.tit}>Calcule seu Imc</Text>
            </View>
            <View style={form.calc}>
                <TextInput 
                style={form.borderinput}
                onChangeText={
                    (valor) => handleInputChange('peso', Number(valor))
                }
                keyboardType='numeric'
                placeholder='Digite seu peso'/>
                <TextInput 
                style={form.borderinput}
                onChangeText={
                    (valor) => handleInputChange('altura', Number(valor))
                }
                keyboardType='numeric'
                placeholder='Digite sua altura'/>
                <Button 
                onPress={
                    ()=>{
                        setImc({
                            ...imc, resultado: (imc.peso)/(imc.altura*imc.altura)
                        })
                    }
                }
                title='Calcular'/>
            </View>
            <View>
                <Text style={box.container}>
                <Text style={{textAlign:'center'}}>
                    {calcImc(imc.resultado)}
                </Text>
                </Text>
            </View>
        </View>
    )
}