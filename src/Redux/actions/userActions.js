import {
    USER_LOGIN_REQUESTS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGOUT,
    USER_REGISTER_REQUESTS,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILED,
    USER_UPDATE_REQUESTS,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILED,
    USER_TOKEN_REQUESTS,
    USER_TOKEN_SUCCESS,
    USER_TOKEN_FAILED,
    USER_GOOGLE_REQUESTS,
    USER_GOOGLE_FAILED,
    USER_LOGOUT_REQUESTS,
    USER_LOGOUT_FAILED, USER_REFRESH

} from "../constants/userConstants.js";

import axios from "axios";
import {
    ANDROID_GOOGLE_API,
    API_PROTECTION,
    GOOGLE_LOGIN,
    IOS_GOOGLE_API,
    LOGIN, LOGOUT,
    PROFILE,
    REGISTER,
    USER
} from "../../Api";
import * as SecureStore from 'expo-secure-store';
import * as Google from "expo-google-app-auth";


/**
 *
 * @param username
 * @param password
 * @returns {(function(*): Promise<void>)|*}
 * @constructor
 */
export const userLoginHandler = (username, password) => async (dispatch) => {

    try {
        dispatch({type: USER_LOGIN_REQUESTS})

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION
            }
        }

        const {data} = await axios.post(`${LOGIN}`, {username, password}, config);


        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_TOKEN_SUCCESS,
            payload: data
        })


        await SecureStore.deleteItemAsync('user')

        await SecureStore.setItemAsync('user', JSON.stringify(data))

    } catch (e) {
        dispatch({
            type: USER_LOGIN_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })

    }
}

/**
 *
 * @param userData
 * @returns {(function(*): Promise<void>)|*}
 */

export const userRegisterHandler = (userData = {}) => async (dispatch) => {

    try {
        dispatch({type: USER_REGISTER_REQUESTS})

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION

            }
        }

        const {data} = await axios.post(`${REGISTER}`, userData, config);


        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_TOKEN_SUCCESS,
            payload: data
        })

        await SecureStore.deleteItemAsync('user')

        await SecureStore.setItemAsync('user', JSON.stringify(data))

    } catch (e) {
        dispatch({
            type: USER_REGISTER_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })

    }
}


/**
 *
 * @param user
 * @returns {(function(*, *): Promise<void>)|*}
 * @constructor
 */
export const UserUpdateHandler = (user) => async (dispatch) => {

    try {
        dispatch({type: USER_UPDATE_REQUESTS})

        let getUser = await SecureStore.getItemAsync('user');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION,
                Authorization: JSON.parse(getUser).token || null
            }
        }

        const {data} = await axios.put(`${PROFILE}`, user, config);


        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: data
        })

        await SecureStore.deleteItemAsync('user')

        await SecureStore.setItemAsync('user', JSON.stringify(data))

    } catch (e) {
        dispatch({
            type: USER_UPDATE_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })

    }
}


export const checkToken = () => async (dispatch) => {

    try {
        dispatch({type: USER_TOKEN_REQUESTS})

        let getUser = await SecureStore.getItemAsync('user');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION,
                Authorization: JSON.parse(getUser).token || null
            }
        }

        const {data} = await axios.get(`${USER}`, config);

        dispatch({
            type: USER_TOKEN_SUCCESS,
            payload: data
        })


    } catch (e) {

        dispatch({
            type: USER_TOKEN_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })
    }


}


export const googleLogin = () => async (dispatch) => {

    try {
        dispatch({type: USER_GOOGLE_REQUESTS})


        const googleConfig = {
            iosClientId: `${IOS_GOOGLE_API}`,
            androidClientId: `${ANDROID_GOOGLE_API}`,
            scopes: ['profile', 'email']
        };


        const {user} = await Google.logInAsync(googleConfig)

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION
            }
        }

        const {data} = await axios.post(`${GOOGLE_LOGIN}`, {
            email: user.email,
            username: user.email,
            password: user.email
        }, config);


        dispatch({
            type: USER_TOKEN_SUCCESS,
            payload: data
        })

        await SecureStore.deleteItemAsync('user')

        await SecureStore.setItemAsync('user', JSON.stringify(data))


    } catch (e) {

        dispatch({
            type: USER_GOOGLE_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })
    }


}


/**
 *
 * @returns {(function(*, *): void)|*}
 * @constructor
 */
export const Logout = () => async (dispatch) => {


    try {
        dispatch({type: USER_LOGOUT_REQUESTS})

        let getUser = await SecureStore.getItemAsync('user');


        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_PROTECTION,
                Authorization: JSON.parse(getUser).token || null
            }
        }

        await axios.get(`${LOGOUT}`, config);

        await SecureStore.deleteItemAsync('user')

        dispatch({type: USER_LOGOUT})

        setTimeout(() => {
            dispatch({type: USER_LOGOUT_REQUESTS})
        }, 2000)

        dispatch({type: USER_REFRESH})
    } catch (e) {

        dispatch({
            type: USER_LOGOUT_FAILED,
            payload: e.response && e.response.data.errors
                ? e.response.data.errors
                : e.message
        })


    }
}
