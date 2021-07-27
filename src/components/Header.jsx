import React from 'react';
import { Text, View } from 'react-native';
import { header } from '../../style/style';

export default function Header(){
    return(
        <View style={header.container}>
            <Text style={header.text}>SoulHealth</Text>
        </View>
    )
}