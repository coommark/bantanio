import { combineReducers } from 'redux';
import authReducer from './reducers/authReducers';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    authReducer,
    form: formReducer
});
