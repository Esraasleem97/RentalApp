import React, {useCallback, useEffect, useState} from "react";
import SvgUri from "expo-svg-uri";
import {
    Alert,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {GlobalStyle} from "../Style/GlobalStyle";
import {useSelector, useDispatch} from "react-redux";
import {googleLogin, userRegisterHandler} from "../Redux/actions/userActions";
import Loader from "../Components/Loader";
import Messages from "../Components/Messages";
import {USER_REFRESH} from "../Redux/constants/userConstants";
import {FormStyle} from "../Style/FormStyle";


export default function Register({checkAuthorization}) {

    const wait = timeout => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);

    const [username, setUsername] = useState('');

    const [email, setEmail] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');

    const [password, setPassword] = useState(null);

    const [confirmPass, setConfirmPass] = useState(null);

    const [googleSubmitting, setGoogleSubmitting] = useState(false);

    const {userRegister} = useSelector((state) => state);

    const {loading, error, user} = userRegister;

    const {userGoogleLogin} = useSelector(state => state)

    const {user: userGoogleLoginInfo, loading: googleLoading} = userGoogleLogin

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch({type: USER_REFRESH})

        if (user && user.token) {
            checkAuthorization(true)
        }
        if (userGoogleLoginInfo && userGoogleLoginInfo.google) {
            return checkAuthorization(true)
        }

    }, [user, dispatch])

    const GoogleSubmitHandler = () => {

        setGoogleSubmitting(true);

        dispatch(googleLogin())

    }
    const SubmitRegisterHandler = () => {

        if (password == null || confirmPass == null) {
            return Alert.alert('Warning','Confirm Password OR Password can\'t be empty' )
        }

        if(password !== confirmPass ) {

            return  Alert.alert('Warning','Confirm Password should be match with Password')
        }

        dispatch(userRegisterHandler({
            username,
            email,
            phone_number:phoneNumber,
            password
        }))

    }
    return (
        <SafeAreaView style={GlobalStyle.body}>
            <View style={GlobalStyle.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                >
                    <View style={FormStyle.content}>

                        <SvgUri width="190" height="190"
                                source={require('../../assets/car-rent.svg')}
                        />
                        <View style={{
                            flexDirection: 'row',
                            marginBottom: 5,
                            width: 200,
                            justifyContent: 'space-between'
                        }}>
                            <Ionicons name="code-working" size={15} color="#6e9ded"/>
                            <Ionicons name="cog" size={15} color="#6e9ded"/>
                            <Ionicons name="construct" size={15} color="#6e9ded"/>
                            <Ionicons name="speedometer" size={15} color="#6e9ded"/>
                            <Ionicons name="car" size={15} color="#6e9ded"/>
                        </View>
                        <Text style={styles.text}>Register</Text>
                        <View style={FormStyle.form_control}>
                            <View style={FormStyle.input}>
                                <TextInput placeholder='Username'
                                           onChangeText={(value) => setUsername(value)}
                                />

                            </View>
                            {error && error.username && <Messages children={error.username}/>}
                            <View style={FormStyle.input}>
                                <TextInput placeholder='Email'
                                           onChangeText={(value) => setEmail(value)}
                                />

                            </View>
                            {error && error.email && <Messages children={error.email}/>}
                            <View style={FormStyle.input}>
                                <TextInput placeholder='Phone Number'
                                           onChangeText={(value) => setPhoneNumber(value)}
                                />

                            </View>
                            {error && error.phone_number && <Messages children={error.phone_number}/>}
                            <View style={FormStyle.input}>
                                <TextInput placeholder='Password'
                                           secureTextEntry={true}
                                           onChangeText={(value) => setPassword(value)}
                                />

                            </View>
                            {error && error.password && <Messages children={error.password}/>}
                            <View style={FormStyle.input}>
                                <TextInput placeholder='Confirm Password'
                                           secureTextEntry={true}
                                           onChangeText={(value) => setConfirmPass(value)}/>
                            </View>
                            {error && error.password && <Messages children={error.password}/>}

                        </View>
                        {loading || googleLoading ?
                            <Loader/>
                            :
                            <View style={GlobalStyle.btn_container}>
                                <TouchableOpacity style={styles.button} onPress={SubmitRegisterHandler}>
                                    <Text style={styles.btn_text}>Register</Text>
                                </TouchableOpacity>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                    <View style={GlobalStyle.border}/>
                                    <Text>OR Register : </Text>
                                    <View style={GlobalStyle.border}/>
                                </View>
                                <View style={GlobalStyle.icon}>
                                    <TouchableOpacity>
                                        <MaterialCommunityIcons name='facebook' color='#1960d8' size={25}/>
                                    </TouchableOpacity>
                                    {/* google login handler */}
                                    {!googleSubmitting && (
                                        <TouchableOpacity style={{marginHorizontal: 10}} google={true}
                                                          onPress={GoogleSubmitHandler}>
                                            <MaterialCommunityIcons name='google-plus' color='orange' size={35}/>
                                        </TouchableOpacity>
                                    )}
                                    {googleSubmitting && (
                                        <TouchableOpacity style={{marginHorizontal: 10}} google={true} disabled={true}>
                                            <MaterialCommunityIcons name='google-plus' color='orange' size={35}/>
                                        </TouchableOpacity>
                                    )}

                                </View>
                            </View>
                        }
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    content: {
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
        marginBottom: 30,
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

});
