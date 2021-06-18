import React, {Component} from "react";
import SvgUri from "expo-svg-uri";
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {GlobalStyle} from "../Style/GlobalStyle";
//
// const Page = ({navigation}) => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.content}>
//
//                 <SvgUri width="200" height="200"
//                         source={require('../../assets/car-rent.svg')}
//                 />
//                 <View style={{flexDirection: 'row', marginBottom: 10, width: 200, justifyContent: 'space-between'}}>
//                     <Ionicons name="code-working" size={15} color="#6e9ded"/>
//                     <Ionicons name="cog" size={15} color="#6e9ded"/>
//                     <Ionicons name="construct" size={15} color="#6e9ded"/>
//                     <Ionicons name="speedometer" size={15} color="#6e9ded"/>
//                     <Ionicons name="car" size={15} color="#6e9ded"/>
//                 </View>
//                 <Text style={styles.text}>Login</Text>
//                 <View style={styles.form_control}>
//                     <View style={styles.input}>
//                         <TextInput placeholder='Username'/>
//                     </View>
//                     <View style={styles.input}>
//                         <TextInput placeholder='Password'/>
//                     </View>
//                     <TouchableOpacity><Text style={{color: '#888'}}>Forget Password?</Text></TouchableOpacity>
//                     <TouchableOpacity><Text style={{color: '#1960d8', paddingVertical: 10}}>Create
//                         Account</Text></TouchableOpacity>
//                 </View>
//
//             </View>
//
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
//                 <Text style={styles.btn_text}>Login</Text>
//             </TouchableOpacity>
//
//         </View>
//     )
// }
export default function  Login({navigation}) {
        return (
            <SafeAreaView style={styles.body}>
                <View style={styles.container}>
                    <ScrollView>
                    <View style={styles.content}>

                            <SvgUri width="190" height="190"
                                    source={require('../../assets/car-rent.svg')}
                            />
                            <View style={{flexDirection: 'row', marginBottom: 5, width: 200, justifyContent: 'space-between'}}>
                                <Ionicons name="code-working" size={15} color="#6e9ded"/>
                                <Ionicons name="cog" size={15} color="#6e9ded"/>
                                <Ionicons name="construct" size={15} color="#6e9ded"/>
                                <Ionicons name="speedometer" size={15} color="#6e9ded"/>
                                <Ionicons name="car" size={15} color="#6e9ded"/>
                            </View>
                            <Text style={styles.text}>Login</Text>
                            <View style={styles.form_control}>
                                <View style={styles.input}>
                                    <TextInput placeholder='Username'/>
                                </View>
                                <View style={styles.input}>
                                    <TextInput placeholder='Password'/>
                                </View>
                                <TouchableOpacity><Text style={{color: '#888'}}>Forget Password?</Text></TouchableOpacity>

                            </View>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.btn_text}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={() => navigation.navigate('Register')} >
                            <Text>Don't have an account?</Text>
                            <Text style={{color: '#1960d8', paddingHorizontal: 5}}>Create Account</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                            <View style={styles.border} ></View>
                            <Text>OR Register : </Text>
                            <View style={styles.border} ></View>
                        </View>

                        <View style={GlobalStyle.icon}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name='facebook' color='#1960d8' size={25}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginHorizontal:10}}>
                                <MaterialCommunityIcons name='google-plus' color='orange' size={35}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </ScrollView>
                </View>
            </SafeAreaView>


        )

}


const styles = StyleSheet.create({
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
        marginTop: 5
    },
    content: {
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
       marginBottom:20,
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
    border:{
        borderTopWidth: 1,
        borderTopColor:'#cecaca',
        width:30,
        marginHorizontal:5

    },
});
