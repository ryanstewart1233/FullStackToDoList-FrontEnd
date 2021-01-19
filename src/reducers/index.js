import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

//my imports
import authReducer from "./authReducer";
import editReducer from "./editReducer";

import listReducer from "./listReducer";

import selectListReducer from "./selectListReducer";

export default combineReducers({
  auth: authReducer,
  lists: listReducer,
  selected: selectListReducer,
  edit: editReducer,
  form: formReducer, //must be wired up to form for redux-form to work. Renamed as this make it much clearer which reducer this is on about
});

//need one reducer per piece of data you want to keep in the store
