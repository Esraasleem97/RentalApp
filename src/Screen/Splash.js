import React from "react";
import {StyleSheet, View} from "react-native";
import LottieView from "lottie-react-native";


const Splash = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <LottieView source={require('../../assets/car.json')} autoPlay loop/>
            </View>
        </View>
    )
};

export default Splash

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#131F47',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        alignSelf: 'center',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',


    },
    text: {
        color: '#f6eded',

        paddingHorizontal: 50,
        alignItems: 'center',
        fontSize: 18
        // fontStyle: 'italic',
        // fontWeight: 'bold'
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
