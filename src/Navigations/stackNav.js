import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../Screen/Home";
import Splash from "../Screen/Splash";
import Details from "../Screen/Details";
import {Image, StyleSheet, Text, View} from "react-native";
import Login from "../Screen/Login";

const Stack = createStackNavigator();

const Header =() => {
    return (
        <View style={styles.header}>
            <Image style={styles.img_profile}
                   source={require('../../assets/avatar-2.png')}
            />
            <Text style={{color: '#fff', fontSize: 25}}>Car Rental</Text>
        </View>
    )
}
const LoginHeader =() => {
    return (
        <View style={styles.header}>
            <Text style={{color: '#fff', fontSize: 25}}>Login</Text>
        </View>
    )
}

const StackNav = () => {
    return (
            <Stack.Navigator initialRouteName="Splash"  >
                <Stack.Screen name="Splash" component={Splash} headerShown={false}
                />
                <Stack.Screen name="Login" component={Login} options={{
                    headerTitle: props => <LoginHeader {...props} />,
                    headerBackground: () => (
                        <View  style={styles.header} />
                    ),
                    headerTintColor : '#fff'
                }}
                />
                <Stack.Screen name="Home" component={Home}
                              options={{
                                  headerTitle: props => <Header {...props} />,
                                  headerBackground: () => (
                                      <View  style={styles.header} />
                                  ),
                                  headerTintColor : '#fff'
                              }}
                />
                <Stack.Screen name="Details" component={Details}
                              options={{
                                  headerTitle: props => <Header {...props} />,
                                  headerBackground: () => (
                                      <View  style={styles.header} />
                                  ),
                                  headerTintColor : '#fff'
                              }}
                />
            </Stack.Navigator>
    )
}
export default StackNav

const styles = StyleSheet.create({
    header: {
        height: 70,
        width: '100%',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#1960d8',
        paddingTop:20

    },
    img_profile: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginHorizontal:10
    },
})