import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from "./src/Navigations/stackNav";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./src/Redux/store";
import {USER_REFRESH} from "./src/Redux/constants/userConstants";
import {checkToken} from "./src/Redux/actions/userActions";


export default function App() {

    const {userToken} = useSelector(state => state);

    const {user} = userToken

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: USER_REFRESH})

        dispatch(checkToken());

    }, [user])

    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackNav/>
            </NavigationContainer>
        </Provider>

    );
}

