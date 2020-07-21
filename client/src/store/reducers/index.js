import loginReducer from './login';
import { combineReducers } from 'redux';
import filterReducer from './filter';
import brandReducer from './brand';
//import categoryReducer from './category';
//import counterReducer from './counter';

const allReducers = combineReducers({
    /*category: categoryReducer,
    counter: counterReducer,*/
    loggedIn: loginReducer,
    filter: filterReducer,
    brand: brandReducer
});

export default allReducers;