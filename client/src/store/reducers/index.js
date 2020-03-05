import counterReducer from './counter';
import loginReducer from './login';
import { combineReducers } from 'redux';
import categoryReducer from './category';

const allReducers = combineReducers({
    category: categoryReducer,
    counter: counterReducer,
    isLogged: loginReducer
});

export default allReducers;