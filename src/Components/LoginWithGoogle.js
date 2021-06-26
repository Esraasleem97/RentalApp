import React, {useState} from 'react';
import * as Google from 'expo-google-app-auth';
import {TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";


export default function LoginWithGoogle({navigation}) {

    const [googleSubmitting, setGoogleSubmitting] = useState(false);
    const handleGoogleSignIn = async () => {
        setGoogleSubmitting(true);
        const config = {
            iosClientId: `890345618749-30gfh32mjnttuhpo0lqlsbsok6mf4ei0.apps.googleusercontent.com`,
            androidClientId: `890345618749-dpi7sjkeinut7ik9c3307nbs9ajv5apt.apps.googleusercontent.com`,
            scopes: ['profile', 'email']
        };

       const data = await Google.logInAsync(config)
        console.log(data)
            // .then((result) => {
            //     const {type, user} = result;
            //     if (type == 'success') {
            //         const {name,email, photoUrl} = user;
            //         console.log('Google sign successful');
            //         console.log({name,email, photoUrl});
            //         setTimeout(() => navigation.navigate('Home',{email,name,photoUrl}), 1000)
            //     } else {
            //         console.log('Google sign in was cancelled');
            //     }
            //     setGoogleSubmitting(false)
            // })
            // .catch((error) => {
            //     console.log(error);
            //
            // })
    }

    return (
        <View>
            {!googleSubmitting && (
                <TouchableOpacity style={{marginHorizontal: 10}} google={true} onPress={handleGoogleSignIn}>
                    <MaterialCommunityIcons name='google-plus' color='orange' size={35}/>
                </TouchableOpacity>
            )}
            {googleSubmitting && (
                <TouchableOpacity style={{marginHorizontal: 10}} google={true} disabled={true} >
                    <MaterialCommunityIcons name='google-plus' color='orange' size={35}/>
                </TouchableOpacity>
            )}
        </View>
    )
}
