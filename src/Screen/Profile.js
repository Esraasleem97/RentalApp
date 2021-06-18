import React, {Component} from "react";

import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import {GlobalStyle} from "../Style/GlobalStyle";
import {FormStyle} from "../Style/FormStyle";
import FloatingLabelInput from "../Components/FloatingLabelInput";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }
    handleTextChange = (newText) => this.setState({ value: newText });
    render() {
        const {navigation} = this.props
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
                                    value={this.state.value}
                                    onChangeText={this.handleTextChange}
                                />
                                <FloatingLabelInput
                                    label="Email"
                                    value={this.state.value}
                                    onChangeText={this.handleTextChange}
                                />
                                <FloatingLabelInput
                                    label="Phone Number"
                                    value={this.state.value}
                                    onChangeText={this.handleTextChange}
                                />

                                <FloatingLabelInput
                                    label="Country"
                                    value={this.state.value}
                                    onChangeText={this.handleTextChange}
                                />
                                <FloatingLabelInput
                                    label="City"
                                    value={this.state.value}
                                    onChangeText={this.handleTextChange}
                                />
                                <FloatingLabelInput
                                    label="Address"
                                    value={this.state.value}
                                    onChangeText={this.handleTextChange}
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
    };
}

