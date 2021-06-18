import React from "react";
import {StyleSheet} from 'react-native'
export const FormStyle = StyleSheet.create({
    content: {
        width: '100%',
        alignItems: 'center',
    },
    form_control: {
        width: '80%',
        marginVertical: 12,
        alignItems: 'center',

    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowOpacity: .25,
        // shadowRadius: 20,
        // elevation: 5,
    },
    text: {
        color: '#555',
        paddingHorizontal: 30,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        fontFamily: 'monospace'

    },
    button: {
        marginBottom:30,
        paddingVertical: 13,
        backgroundColor: '#1960d8',
        width: '60%',
        borderRadius: 5


    },
    btn_text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    },
    icon : {
        marginVertical:15,
        flexDirection:'row-reverse',
        alignItems:'center'
    }
})
