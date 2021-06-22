import React from "react";
import Splash from "../Screen/Splash";
import Login from "../Screen/Login";
import Register from "../Screen/Register";
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNav = ({check}) => {

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Splash" component={Splash} screenOptions={{headerShown: false}}/>
            <Stack.Screen name="Login"  options={{
                headerStyle: {backgroundColor: '#1960d8', borderBottomWidth: 0, elevation: 0},
                headerTitleStyle: {fontSize: 25},
                headerTintColor: '#fff'
            }}>

                {props => <Login {...props} checkAuthorization={check}/>}
            </Stack.Screen>
            <Stack.Screen name="Register" component={Register} options={{
                headerStyle: {backgroundColor: '#1960d8', borderBottomWidth: 0, elevation: 0},
                headerTitleStyle: {fontSize: 25},
                headerTintColor: '#fff'
            }}/>
        </Stack.Navigator>
    )
}

export default StackNav


