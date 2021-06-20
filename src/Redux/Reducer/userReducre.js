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
    USER_REFRESH,
    USER_TOKEN_REQUESTS,
    USER_TOKEN_SUCCESS,
    USER_TOKEN_FAILED

} from "../constants/userConstants.js";


/**
 *
 * @param state
 * @param action
 * @returns {{loading: boolean}|{}|{loading: boolean, error}|{loading: boolean, user}}
 */
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUESTS:
            return {loading: true, error: {}}
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload,
            }
        case USER_LOGIN_FAILED:
            return {loading: false, error: action.payload}

        case USER_LOGOUT:
            return {}

        case USER_REFRESH:
            return {}
        default:
            return state
    }
}


export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUESTS:
            return {loading: true}
        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
            }
        case USER_REGISTER_FAILED:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}


export const userUpdateReducer = (state = {success: false, userInfo: {}}, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUESTS:
            return {success: false, loading: true}
        case USER_UPDATE_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                success: true
            }
        case USER_UPDATE_FAILED:
            return {loading: false, updateErrors: action.payload}

        default:
            return state
    }
}

export const userTokenReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_TOKEN_REQUESTS:
            return {loading: true}
        case USER_TOKEN_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case USER_TOKEN_FAILED:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}



