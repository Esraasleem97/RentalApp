import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {
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
});


export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
