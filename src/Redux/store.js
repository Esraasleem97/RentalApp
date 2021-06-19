import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';


const rootReducer = combineReducers({

});

export const store = createStore(rootReducer,
    (applyMiddleware(thunk))
);