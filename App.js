import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Header from './src/components/Header';
import Content from './src/components/Content';


export default function App() {
    return (
        <SafeAreaView>
            <Header/>
            <Content/>
            <StatusBar style='auto'/>
        </SafeAreaView>
    )
}