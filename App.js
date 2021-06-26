import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from "./src/Navigations/stackNav";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./src/Redux/store";
import {checkToken} from "./src/Redux/actions/userActions";
import DrawerNav from "./src/Navigations/drawerNav";
import Splash from "./src/Screen/Splash";


function App() {

    const {userLogout} = useSelector(state => state);

    const {logout} = userLogout

    const {userToken} = useSelector(state => state);

    const {user} = userToken

    const dispatch = useDispatch()

    const [isAuthorized, setIsAuthorized] = useState(false);

    const [loading, setLoading] = useState(true);


    const checkAuthorization = (value) => {
        setIsAuthorized(value)
    }


    useEffect(() => {

        dispatch(checkToken());

        if (user && user.success && user.token && !logout) {
            setIsAuthorized(true)
        } else {
            setIsAuthorized(false)
        }

        setTimeout(async () => {
            setLoading(false);
        }, 2000)

        return () => {
            dispatch(checkToken());
        }
    }, [dispatch, logout])


    if (loading) {
        return <Splash/>
    }

    return (

        <NavigationContainer>
            {user && user.success
                ? <DrawerNav check={checkAuthorization}/>
                : isAuthorized
                    ? <DrawerNav check={checkAuthorization}/>
                    : <StackNav check={checkAuthorization}/>
            }
        </NavigationContainer>
    );
}

export default function Root() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

