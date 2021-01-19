import { SET_EDIT_ITEM, STOP_EDIT } from "../actions/types";

const INITIAL_STATE = {
  selected_todo: null,
};

// eslint-disable-next-line
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_EDIT_ITEM:
      return { ...state, selected_todo: action.payload };
    case STOP_EDIT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
