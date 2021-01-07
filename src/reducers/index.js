import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

//my imports
import authReducer from "./authReducer";
import todoReducer from "./todoReducer";
import editModeReducer from "./editModeReducer";
import listReducer from "./listReducer";

export default combineReducers({
  auth: authReducer,
  toDoList: todoReducer,
  edit: editModeReducer,
  lists: listReducer,
  form: formReducer, //must be wired up to form for redux-form to work. Renamed as this make it much clearer which reducer this is on about
});

//need one reducer per piece of data you want to keep in the store
