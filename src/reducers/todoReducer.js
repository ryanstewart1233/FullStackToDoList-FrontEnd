import _ from "lodash";
import {
  CREATE_ITEM,
  EDIT_ITEM,
  FETCH_ITEMS,
  DELETE_ITEM,
  CHECK_ITEM,
  UN_CHECK_ITEM,
  RESET_TODO_ITEMS,
} from "../actions/types.js";

const INITIAL_STATE = {};

// eslint-disable-next-line
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_ITEM:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_ITEMS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case EDIT_ITEM:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case DELETE_ITEM:
      return { ..._.mapKeys(action.payload, "_id") };
    case CHECK_ITEM:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case UN_CHECK_ITEM:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case RESET_TODO_ITEMS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
