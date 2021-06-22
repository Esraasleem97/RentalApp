import React from "react";
import {FontAwesome5} from "@expo/vector-icons";
import {StyleSheet, TouchableOpacity, View,Dimensions} from "react-native";
const windowHeight = Dimensions.get('window').height;
export default function Bars({navigation}) {
    return (
        <View style={styles.barContainer}>
            <TouchableOpacity style={styles.bars} onPress={() => navigation.openDrawer()}>
                <FontAwesome5 name='bars' size={25} color='#fff'/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    barContainer :{
        width: '100%',
        position: 'relative',


    },
    bars: {
        position: 'absolute',
        right: 10,
        bottom: windowHeight/7,
        width: 60,
        height: 60,
        backgroundColor: '#1960d8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    }
})
