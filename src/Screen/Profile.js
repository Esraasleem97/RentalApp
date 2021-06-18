import React, {useState} from "react";

import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import {GlobalStyle} from "../Style/GlobalStyle";
import {FormStyle} from "../Style/FormStyle";
import FloatingLabelInput from "../Components/FloatingLabelInput";

export default function Profile ({navigation}) {
        const [value,setValue] = useState('');
        const handleTextChange = (newText) =>{ return setValue(newText)};
        return (
            <SafeAreaView style={GlobalStyle.body}>
                <View style={GlobalStyle.container}>
                    <ScrollView>
                        <View style={FormStyle.content}>
                            <Image  style={{width:100 ,height:100,marginVertical:20}}
                                    source={require('../../assets/avatar-2.png')}
                            />
                            <Text style={FormStyle.text}>My Profile</Text>
                            <View style={FormStyle.form_control}>
                                <FloatingLabelInput
                                    label="Username"
                                    value={value}
                                    onChangeText={handleTextChange}
                                />
                                <FloatingLabelInput
                                    label="Email"
                                    value={value}
                                    onChangeText={handleTextChange}
                                />
                                <FloatingLabelInput
                                    label="Phone Number"
                                    value={value}
                                    onChangeText={handleTextChange}
                                />

                                <FloatingLabelInput
                                    label="Country"
                                    value={value}
                                    onChangeText={handleTextChange}
                                />
                                <FloatingLabelInput
                                    label="City"
                                    value={value}
                                    onChangeText={handleTextChange}
                                />
                                <FloatingLabelInput
                                    label="Address"
                                    value={value}
                                    onChangeText={handleTextChange}
                                />


                            </View>

                            <TouchableOpacity style={FormStyle.button} onPress={() => navigation.navigate('Home')}>
                                <Text style={FormStyle.btn_text}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )

}

