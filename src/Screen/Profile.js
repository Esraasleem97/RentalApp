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


    const [username, setUsername] = useState();

    const [email, setEmail] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');

    const [country, setCountry] = useState('');

    const [city, setCity] = useState('');

    const [address, setAddress] = useState('');

    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const {userToken} = useSelector(state => state);

    const {user , error , loading} = userToken


    useEffect(() => {

        setUsername(user.username)
        setEmail(user.email)
        setPhoneNumber(user.phone_number)
        setCountry(user.country)
        setCity(user.city)
        setAddress(user.address)


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
        }));

        const {userUpdate} = useSelector(state => state);

        const {loading, user: userUpdated, error} = userUpdate

        setUsername(userUpdated.username)
        setEmail(userUpdated.email)
        setPhoneNumber(userUpdated.phone_number)
        setCountry(userUpdated.country)
        setCity(userUpdated.city)
        setAddress(userUpdated.address)
    }

    return (
        <SafeAreaView style={GlobalStyle.body}>
            <View style={GlobalStyle.container}>
                <ScrollView>
                    <View style={FormStyle.content}>
                        <Image style={{width: 100, height: 100, marginVertical: 20}}
                               source={require('../../assets/avatar-2.png')}
                        />
                        <Text style={FormStyle.text}>My Profile</Text>
                        <View style={FormStyle.form_control}>
                            <FloatingLabelInput
                                label="Username"
                                value={username}
                                onChangeText={(value) => setUsername(value)}
                            />
                            {error && error.username && <Messages children={error.username}/>}


                            <FloatingLabelInput
                                label="Email"
                                value={email}
                                onChangeText={(value) => setEmail(value)}
                            />
                            {error && error.email && <Messages children={error.email}/>}


                            <FloatingLabelInput
                                label="Phone Number"
                                value={phoneNumber}
                                onChangeText={(value) => setPhoneNumber(value)}
                            />
                            {error && error.phone_number && <Messages children={error.phone_number}/>}

                            <FloatingLabelInput
                                label="Country"
                                value={country}
                                onChangeText={(value) => setCountry(value)}
                            />
                            {error && error.country && <Messages children={error.country}/>}
                            <FloatingLabelInput
                                label="City"
                                value={city}
                                onChangeText={(value) => setCity(value)}
                            />
                            {error && error.city && <Messages children={error.city}/>}
                            <FloatingLabelInput
                                label="Address"
                                value={address}
                                onChangeText={(value) => setAddress(value)}
                            />
                            {error && error.address && <Messages children={error.address}/>}
                            <FloatingLabelInput
                                label="Password"
                                secureTextEntry={true}
                                onChangeText={value => setPassword(value)}
                            />
                            {error && error.password && <Messages children={error.password}/>}

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

