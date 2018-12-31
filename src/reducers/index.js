import { combineReducers } from 'redux';
import { Registration } from './auth_reducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    Registration,
    form: formReducer
})