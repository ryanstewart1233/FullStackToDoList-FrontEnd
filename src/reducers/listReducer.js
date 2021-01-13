import _ from "lodash";
import { CREATE_ITEM, FETCH_LISTS } from "../actions/types";

const INITIAL_STATE = {};

// eslint-disable-next-line

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };

    default:
      return state;
  }
};
