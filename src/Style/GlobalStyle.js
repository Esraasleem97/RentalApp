import React from "react";
import {StyleSheet} from "react-native";

export const GlobalStyle = StyleSheet.create({
    body: {
        width: '100%',
        height: "100%",
        backgroundColor: '#1960d8',

    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#eef5ff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: 'hidden',
        marginVertical: 5
    },
    content: {
        width: '100%',

    },
    icon : {
        marginVertical:15,
        flexDirection:'row',
        alignItems:'center'
    },
    border:{
        borderTopWidth: 1,
        borderTopColor:'#cecaca',
        width:30,
        marginHorizontal:5

    },
});
