import React, {useEffect, useState} from 'react';
import * as Google from 'expo-google-app-auth';
import {TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {IOS_GOOGLE_API, ANDROID_GOOGLE_API} from "../Api";
import {useDispatch, useSelector} from "react-redux";
import {googleLogin} from "../Redux/actions/userActions";


export default function LoginWithGoogle({checkAuthorization}) {
    const [googleSubmitting, setGoogleSubmitting] = useState(false);

    const dispatch = useDispatch()

    const {userGoogleLogin} = useSelector(state => state)

    const {user,error} = userGoogleLogin
console.log(user,error);
    useEffect(() => {
        if (user) {
            checkAuthorization(true)
        }
    }, [user])

    const handleGoogleSignIn = async () => {

        setGoogleSubmitting(true);

        const config = {
            iosClientId: `${IOS_GOOGLE_API}`,
            androidClientId: `${ANDROID_GOOGLE_API}`,
            scopes: ['profile', 'email']
        };


        try {
            const data = await Google.logInAsync(config)

            if (data) {

                dispatch(googleLogin({
                    email: data.user.email,
                    username: data.user.email,
                    password: data.user.email
                }))

            }

        } catch (e) {
            console.log(e)
        }


    }

    return (
        <View>
            {!googleSubmitting && (
                <TouchableOpacity style={{marginHorizontal: 10}} google={true} onPress={handleGoogleSignIn}>
                    <MaterialCommunityIcons name='google-plus' color='orange' size={35}/>
                </TouchableOpacity>
            )}
            {googleSubmitting && (
                <TouchableOpacity style={{marginHorizontal: 10}} google={true} disabled={true}>
                    <MaterialCommunityIcons name='google-plus' color='orange' size={35}/>
                </TouchableOpacity>
            )}
        </View>
    )
}
