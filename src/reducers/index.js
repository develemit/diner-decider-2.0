import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import users from '../actions/users'

const rootReducer = combineReducers({
  users,
  form: formReducer
});
export default rootReducer;
