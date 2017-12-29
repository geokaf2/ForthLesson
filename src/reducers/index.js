import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import FetchPostReducer from './reducer_post';

const rootReducer = combineReducers({
  posts: FetchPostReducer,
  form: formReducer //all form components will pass from this reducer
});

export default rootReducer;
