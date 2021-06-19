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

} from "../constants/userConstants.js";

import axios from "axios";
import {API_PROTECTION, LOGIN} from "../../Api";


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

        localStorage.setItem('user', JSON.stringify(data))

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

export const userRegisterHandler = (userData={}) => async (dispatch) => {

    try {
        dispatch({type: USER_REGISTER_REQUESTS})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post(`api/users`, userData, config);


        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })


        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (e) {
        dispatch({
            type: USER_REGISTER_FAILED,
            payload: e.response && e.response.data.message
                ? e.response.data.message
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
export const UserUpdate = (user) => async (dispatch, getState) => {

    try {
        dispatch({type: USER_UPDATE_REQUESTS})

        const {userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`/api/users/profile`, user, config);


        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: data
        })


        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (e) {
        dispatch({
            type: USER_UPDATE_FAILED,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.message
        })

    }
}


/**
 *
 * @returns {(function(*, *): void)|*}
 * @constructor
 */
export const Logout = () => (dispatch) => {

    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})

}
