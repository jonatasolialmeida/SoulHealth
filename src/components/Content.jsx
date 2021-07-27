import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import InfoBoasVindas from './InfoBoasVindas'
import InfoCuriosidades from './InfoCuriosidades'
import InfoApresentImc from './InfoApresentImc'
import InfoDica1 from './InfoDica1'
import InfoDica2 from './InfoDica2'
export default function Content(){
    return(
        <ScrollView>
            <InfoBoasVindas/>
            <InfoCuriosidades curios='Curiosidades' vocesabia='Saúde'/>
            <InfoApresentImc/>
            <InfoDica1/>
            <InfoDica2/>
        </ScrollView>   
    )
}