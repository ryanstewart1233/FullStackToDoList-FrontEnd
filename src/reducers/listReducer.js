import _ from "lodash";
import {
  CREATE_LIST,
  EDIT_LIST,
  FETCH_LISTS,
  DELETE_LIST,
  RESET_LIST_ITEMS,
} from "../actions/types";

const INITIAL_STATE = {};

// eslint-disable-next-line
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_LIST:
      return { ...state, [action.payload._id]: action.payload };
    case FETCH_LISTS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case EDIT_LIST:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_LIST:
      return _.omit(state, action.payload);
    case RESET_LIST_ITEMS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
