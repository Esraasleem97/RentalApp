import React from "react";
import SvgUri from "expo-svg-uri";
import {StyleSheet, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';


const Splash = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <SvgUri width="250" height="250"
                        source={require('../../assets/car-rent.svg')}
                />
                <View style={{flexDirection: 'row', marginBottom: 25, width: 200, justifyContent: 'space-between'}}>
                    <Ionicons name="code-working" size={15} color="#01155a"/>
                    <Ionicons name="cog" size={15} color="#01155a"/>
                    <Ionicons name="construct" size={15} color="#01155a"/>
                    <Ionicons name="speedometer" size={15} color="#01155a"/>
                    <Ionicons name="car" size={15} color="#01155a"/>
                </View>
                {/*<Text style={{fontSize: 18 ,color: '#f6eded'}}>GET CAR DETAILS</Text>*/}

            </View>
        </View>
    )
};

export default Splash

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#010c3b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        alignSelf: 'center',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#89adf1',

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
