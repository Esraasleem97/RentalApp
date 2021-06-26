import React, {useEffect, useState} from "react";

import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {GlobalStyle} from "../Style/GlobalStyle";
import {FormStyle} from "../Style/FormStyle";
import FloatingLabelInput from "../Components/FloatingLabelInput";
import {useDispatch, useSelector} from "react-redux";
import {checkToken, UserUpdateHandler} from "../Redux/actions/userActions";
import Loader from "../Components/Loader";
import Messages from "../Components/Messages";


export default function Profile() {

    const dispatch = useDispatch()

    const [username, setUsername] = useState();

    const [email, setEmail] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');

    const [country, setCountry] = useState('');

    const [city, setCity] = useState('');

    const [address, setAddress] = useState('');

    const [password, setPassword] = useState('');

    const [id, setId] = useState('');

    const {userToken} = useSelector(state => state);

    const {user} = userToken

    const {userUpdate} = useSelector(state => state);

    const {error, loading} = userUpdate

    useEffect(() => {

        if (user) {
            setUsername(user.username)
            setEmail(user.email)
            setPhoneNumber(user.phone_number)
            setCountry(user.country)
            setCity(user.city)
            setAddress(user.address)
            setId(user.id)
        } else {
            dispatch(checkToken())
        }
    }, [user])


    const SubmitHandler = () => {

        dispatch(UserUpdateHandler({
            username,
            email,
            phone_number: phoneNumber,
            country,
            city,
            address,
            password,
            id
        }));

    }

    return (
        <SafeAreaView style={GlobalStyle.body}>
            <View style={GlobalStyle.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={FormStyle.content}>
                        <Image style={{width: 100, height: 100, marginVertical: 20}}
                               source={require('../../assets/avatar-2.png')}
                        />
                        <Text style={FormStyle.text}>My Profile</Text>
                        <View style={FormStyle.form_control}>
                            {error && error.username && <Messages style={{marginLeft: 15}} children={error.username}/>}
                            <FloatingLabelInput
                                label="Username"
                                value={username}
                                onChangeText={(value) => setUsername(value)}
                            />


                            {error && error.email && <Messages style={{marginLeft: 15}} children={error.email}/>}
                            <FloatingLabelInput
                                label="Email"
                                value={email}
                                onChangeText={(value) => setEmail(value)}
                            />


                            {error && error.phone_number &&
                            <Messages style={{marginLeft: 20}} children={error.phone_number}/>}
                            <FloatingLabelInput
                                label="Phone Number"
                                value={phoneNumber}
                                onChangeText={(value) => setPhoneNumber(value)}
                            />

                            {error && error.country && <Messages style={{marginLeft: 20}} children={error.country}/>}

                            <FloatingLabelInput
                                label="Country"
                                value={country}
                                onChangeText={(value) => setCountry(value)}
                            />
                            {error && error.city && <Messages style={{marginLeft: 20}} children={error.city}/>}

                            <FloatingLabelInput
                                label="City"
                                value={city}
                                onChangeText={(value) => setCity(value)}
                            />
                            {error && error.address && <Messages style={{marginLeft: 20}} children={error.address}/>}

                            <FloatingLabelInput
                                label="Address"
                                value={address}
                                onChangeText={(value) => setAddress(value)}
                            />

                            {error && error.password && <Messages style={{marginLeft: 15}} children={error.password}/>}
                            <FloatingLabelInput
                                label="Password"
                                secureTextEntry={true}
                                onChangeText={value => setPassword(value)}
                            />


                        </View>
                        {loading
                            ? <Loader/>
                            :
                            <TouchableOpacity style={FormStyle.button} onPress={SubmitHandler}>
                                <Text style={FormStyle.btn_text}>Update</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    )

}

