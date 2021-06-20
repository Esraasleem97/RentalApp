import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {userLoginReducer, userRegisterReducer} from "./Reducer/userReducre";


const rootReducer = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer
});

export const store = createStore(rootReducer,
    (applyMiddleware(thunk))
);
