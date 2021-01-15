import _ from "lodash";
import { FETCH_LISTS, DELETE_LIST, CREATE_LIST } from "../actions/types";

const INITIAL_STATE = {};

// eslint-disable-next-line

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case DELETE_LIST:
      return _.omit(state, action.payload);
    case CREATE_LIST:
      return { ...state, [action.payload._id]: action.payload };
    default:
      return state;
  }
};
