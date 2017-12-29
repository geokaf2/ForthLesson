import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions/index';
import _ from 'lodash';

export default (state ={}, action) => {
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:

            //if exist already in the state is been replaced

            //always return a new object - never edit state object

            //ES6
            return {...state, [action.payload.data.id]: action.payload.data };

            //ES5 - the same as above
            //const post = action.payload.data;
            //const newState = { ...state };
            //newState[post.id] = post;
            //return newState;
        case DELETE_POST:
            const id = action.payload;
            return _.omit(state, id); //returs a new object
        default:
            return state;
    }
}