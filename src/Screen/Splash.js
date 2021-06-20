import React, {useEffect} from "react";
import SvgUri from "expo-svg-uri";
import {StyleSheet, Text, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import Loader from "../Components/Loader";
import * as SecureStore from "expo-secure-store";
import {checkToken} from "../Redux/actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import Messages from "../Components/Messages";


const Splash = ({navigation}) => {

    const dispatch = useDispatch()

    const {userToken} = useSelector(state => state);

    const {loading, user, error} = userToken

    const checkTokenAsync = async () => {
        let userToken;

        try {
            userToken = await SecureStore.getItemAsync('user')
            return  await dispatch(checkToken(userToken));
        } catch (e) {
            console.log(e)
        }

    }
    useEffect(() => {


        checkTokenAsync().then(() => {

            if (user && user.success) {
                return navigation.replace('Home')
            }
            return navigation.replace('Login')
        })


    }, [dispatch, user]);


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
                <Text style={styles.text}>With the included booking form above the fold, everyone visiting your page
                    can
                    take action right away.</Text>
            </View>
            {error && <Messages children={error} color='#fff'/>}
            {loading && <Loader color='#fff'/>}
        </View>
    )
};

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
        marginTop: 50,
        alignSelf: 'center',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eef5ff',
        borderRadius: 30,
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