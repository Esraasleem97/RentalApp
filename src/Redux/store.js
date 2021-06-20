import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {userLoginReducer, userRegisterReducer, userTokenReducer} from "./Reducer/userReducre";


const rootReducer = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer ,
    userToken:userTokenReducer ,
});

export const store = createStore(rootReducer,
    (applyMiddleware(thunk))
);
