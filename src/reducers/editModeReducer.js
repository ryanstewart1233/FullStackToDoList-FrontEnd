import {
  EDIT_MODE_ON,
  EDIT_MODE_OFF,
  EDIT_SPECIFIC_ITEM,
  EDIT_SPECIFIC_LIST,
  STOP_SPECIFIC_EDIT,
} from "../actions/types";

const INITIAL_STATE = {
  editMode: false,
  selected_todo: null,
  selected_list: null,
};

// eslint-disable-next-line
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_MODE_ON:
      return { ...state, editMode: true };
    case EDIT_SPECIFIC_ITEM:
      return { ...state, selected_todo: action.payload, selected_list: null };
    case EDIT_SPECIFIC_LIST:
      return { ...state, selected_list: action.payload, selected_todo: null };
    case STOP_SPECIFIC_EDIT:
      return { ...state, selected_todo: null, selected_list: null };
    case EDIT_MODE_OFF:
      return INITIAL_STATE;
    default:
      return state;
  }
};
