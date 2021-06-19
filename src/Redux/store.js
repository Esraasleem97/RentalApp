import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {loginReducer} from './../Reducer/index';

const rootReducer = combineReducers({

});

export const store = createStore(rootReducer,
    (applyMiddleware(thunk))
);