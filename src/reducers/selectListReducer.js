import _ from "lodash";
import {
  SET_SELECTED_LIST,
  DELETE_ITEM,
  CREATE_ITEM,
  CHECK_ITEM,
  UN_CHECK_ITEM,
  EDIT_ITEM,
  EDIT_LIST,
  RESET_STATE,
} from "../actions/types";

const INITIAL_STATE = {};

// eslint-disable-next-line

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SELECTED_LIST:
      return action.payload;
    case DELETE_ITEM:
      return action.payload;
    case CREATE_ITEM:
      return action.payload;
    case CHECK_ITEM:
      return action.payload;
    case UN_CHECK_ITEM:
      return action.payload;
    case EDIT_ITEM:
      return action.payload;
    case EDIT_LIST:
      return action.payload;
    case RESET_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
};
