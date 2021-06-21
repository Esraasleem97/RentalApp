import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from "./src/Navigations/stackNav";
import {Provider} from "react-redux";
import {store} from "./src/Redux/store";
import DrawerNav from "./src/Navigations/drawerNav";

export default function App() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <DrawerNav/>
            </NavigationContainer>
        </Provider>

    );
}

