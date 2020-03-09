import loginReducer from './login';
import { combineReducers } from 'redux';
//import categoryReducer from './category';
//import counterReducer from './counter';

const allReducers = combineReducers({
    /*category: categoryReducer,
    counter: counterReducer,*/
    loggedIn: loginReducer,
});

export default allReducers;