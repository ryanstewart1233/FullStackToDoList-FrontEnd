import _ from "lodash";
import { SET_SELECTED_LIST } from "../actions/types";

const INITIAL_STATE = {};

// eslint-disable-next-line

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SELECTED_LIST:
      return action.payload;
    default:
      return state;
  }
};
