import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {
    userGoogleReducer,
    userLoginReducer,
    userRegisterReducer,
    userTokenReducer,
    userUpdateReducer
} from "./Reducer/userReducre";


const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userToken: userTokenReducer,
    userUpdate: userUpdateReducer,
    userGoogleLogin:userGoogleReducer
});


export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
