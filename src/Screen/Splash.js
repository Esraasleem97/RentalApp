import React from "react";
import SvgUri from "expo-svg-uri";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';


const Splash = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={{fontSize: 18}}>GET CAR DETAILS</Text>
                <SvgUri width="250" height="250"
                        source={require('../../assets/car-rent.svg')}
                />
                <View style={{flexDirection: 'row', marginBottom: 25, width: 200, justifyContent: 'space-between'}}>
                    <Ionicons name="code-working" size={15} color="#6e9ded"/>
                    <Ionicons name="cog" size={15} color="#6e9ded"/>
                    <Ionicons name="construct" size={15} color="#6e9ded"/>
                    <Ionicons name="speedometer" size={15} color="#6e9ded"/>
                    <Ionicons name="car" size={15} color="#6e9ded"/>
                </View>
                <Text style={styles.text}>With the included booking form above the fold, everyone visiting your page can
                    take action right away.</Text>
            </View>
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btn_text}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )};

export default Splash

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1960d8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eef5ff',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,

    },
    text: {
        color: '#555',
        paddingHorizontal: 30,
        alignItems: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    button: {
        position: 'relative',
        bottom: 0,
        paddingVertical: 20,
        backgroundColor: '#1960d8',
        width: '100%',


    },
    btn_text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }
});
