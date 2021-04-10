import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from '../actions/types';

//Object-based Reducer

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }; //return single record [action.payload.id] is not an array, it is key-interpolation syntax
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }; //return single record
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }; //return single record
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
