import { StyleSheet } from "react-native";

export const box = StyleSheet.create({
    container:{
        borderWidth:2
    }
})

export const header = StyleSheet.create({
    container:{
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1e90ff'
    },
    text:{
        fontSize:40,
        fontWeight:"bold",
        color:'white'
    },
})

export const titulo = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
        marginBottom:15,
    },
    tit:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center"
    }
})

export const boasvindas = StyleSheet.create({
    news:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        margin:15
    }
})

export const format = StyleSheet.create({
    subtit:{
        fontWeight:"bold",
        marginLeft:15,
        marginTop:10,
        marginBottom:10,
        fontSize:18

    },
    parag:{
        fontSize:15,
        margin:15
    },
    paragdic:{
        fontSize:15,
        marginLeft:15,
        marginRight:15,
        marginBottom:15
    }
})

export const form = StyleSheet.create({
    calc:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:15,
    },
    borderinput:{
        borderWidth:1,
    }
})