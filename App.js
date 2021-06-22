import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from "./src/Navigations/stackNav";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./src/Redux/store";
import {checkToken} from "./src/Redux/actions/userActions";
import DrawerNav from "./src/Navigations/drawerNav";


function App() {


    const {userToken} = useSelector(state => state);

    const {user} = userToken

    const dispatch = useDispatch()

    const [isAuthorized, setIsAuthorized] = useState(false);

    const checkAuthorization = (value) => {
        setIsAuthorized(value)
    }

    useEffect(() => {
        dispatch(checkToken());

        if (user) {
            return setIsAuthorized(true)
        }else{
            return setIsAuthorized(false)
        }


    }, [dispatch])



    return (

        <NavigationContainer>
            {user && user.success
                ? <DrawerNav check={checkAuthorization} />
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

