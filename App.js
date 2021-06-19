import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from "./src/Navigations/stackNav";
import {Provider} from "react-redux";
import {store} from "./src/Redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackNav/>
            </NavigationContainer>
        </Provider>

    );
}

