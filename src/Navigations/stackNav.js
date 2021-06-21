import React from "react";
import {Image, StyleSheet, TouchableOpacity} from "react-native";
import Home from "../Screen/Home";
import Splash from "../Screen/Splash";
import Details from "../Screen/Details";
import Login from "../Screen/Login";
import Register from "../Screen/Register";
import {createStackNavigator} from '@react-navigation/stack';
import Profile from "../Screen/Profile";
import {useNavigation} from "@react-navigation/native";
const Stack = createStackNavigator();
function Header ()  {
    const navigation = useNavigation()

    return (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image style={styles.img_profile} source={require('../../assets/avatar-2.png')}/>
            </TouchableOpacity>
    )
}

const StackNav = () => {


    return (

            <Stack.Navigator initialRouteName="Login"  >
                <Stack.Screen name="Splash" component={Splash}  screenOptions={{headerShown: false}}/>
                <Stack.Screen name="Login" component={Login} options={{
                    headerStyle: {backgroundColor: '#1960d8',borderBottomWidth:0,elevation:0},
                    headerTitleStyle:{fontSize:25},
                    headerTintColor : '#fff'}}/>
                <Stack.Screen name="Register" component={Register} options={{
                    headerStyle: {backgroundColor: '#1960d8',borderBottomWidth:0,elevation:0},
                    headerTitleStyle:{fontSize:25},
                    headerTintColor : '#fff'
                }}/>
                <Stack.Screen name="Home" component={Home} options={{
                                  headerRight: props => <Header {...props} />,
                                  headerStyle: {backgroundColor: '#1960d8',borderBottomWidth:0,elevation:0},
                                  headerTitleStyle:{fontSize:22},
                                  headerTintColor : '#fff'
                              }}/>
                <Stack.Screen name="Details" component={Details} options={{
                                  headerRight: props => <Header {...props} />,
                                  headerStyle: {backgroundColor: '#1960d8',borderBottomWidth:0,elevation:0},
                                  headerTitleStyle:{fontSize:22},
                                  headerTintColor : '#fff'
                              }}/>
                <Stack.Screen name="Profile" component={Profile} options={{
                                  headerRight: props => <Header {...props} />,
                                  headerStyle: {backgroundColor: '#1960d8',borderBottomWidth:0,elevation:0},
                                  headerTitleStyle:{fontSize:22},
                                  headerTintColor : '#fff'
                              }}/>
            </Stack.Navigator>
    )
}

export default StackNav

const styles = StyleSheet.create({

    img_profile: {
        width: 45,
        height: 45,
        borderRadius: 100,
        marginHorizontal:30
    },
})
