import todoapi from "../apis/todoapi";

import { reset } from "redux-form";

import history from "../history";

import {
  FETCH_LISTS,
  SIGN_IN,
  SIGN_OUT,
  SET_SELECTED_LIST,
  CREATE_ITEM,
  DELETE_ITEM,
  CHECK_ITEM,
  UN_CHECK_ITEM,
  DELETE_LIST,
  CREATE_LIST,
  SET_EDIT_ITEM,
  STOP_EDIT,
  EDIT_ITEM,
  EDIT_LIST,
  RESET_STATE,
} from "./types";

//For Google Auth
export const signIn = (userId) => async (dispatch, getState) => {
  await dispatch({ type: SIGN_IN, payload: userId });

  await dispatch(fetchLists(userId));
  history.push("/main");
};

export const signOut = (userId) => (dispatch) => {
  dispatch({ type: SIGN_OUT });
  dispatch({ type: RESET_STATE });

  history.push("/");
};

export const fetchLists = (user_id) => async (dispatch, getState) => {
  const response = await todoapi.get(`/lists/${user_id}`);

  //   console.log("action - fetch lists", response);

  dispatch({ type: FETCH_LISTS, payload: response.data });

  //determines if the object is empty and if so sets it to be the first list -includes timeout to avoid loading errors (only happens once on load to ensure a list is selected)
  if (Object.keys(getState().selected).length === 0) {
    function waitForElement() {
      if (
        getState().lists !== "undefined" &&
        Object.keys(getState().lists).length !== 0
        //only sets to first list if there are list available
      ) {
        const list_id = Object.values(getState().lists)[0]._id;

        // console.log("list-id", list);
        dispatch(setSelectedList(list_id));
      } else {
        //has not loaded so need to wait
        setTimeout(waitForElement, 100);
      }
    }
    waitForElement();
  }
};

export const createList = (formValues, user_id) => async (dispatch) => {
  const response = await todoapi.post(`/lists/${user_id}`, { ...formValues });
  console.log("Create List action", response);

  dispatch({ type: CREATE_LIST, payload: response.data });
  dispatch(reset("toDoForm")); //this resets the form value to be blank after successful addition
  history.push("/main");
};

export const deleteList = (user_id, list_id) => async (dispatch) => {
  const response = await todoapi.delete(`/lists/${user_id}/${list_id}`);

  console.log("Delete list action", list_id, response);

  dispatch({ type: DELETE_LIST, payload: list_id });
  history.push("/main");
};

export const setSelectedList = (list_id) => async (dispatch, getState) => {
  dispatch(fetchLists(getState().auth.userId)); //ensures that lists are updated whenever new list is selected/changed
  const arrayOfLists = Object.values(getState().lists);

  const selectedList = arrayOfLists.find((list) => list._id === list_id);

  //   console.log("set selected called", selectedList);
  dispatch({ type: SET_SELECTED_LIST, payload: selectedList });
};

//create new to do item

export const createItem = (formValues, user_id, list_id) => async (
  dispatch,
  getState
) => {
  const response = await todoapi.post(`/todos/${user_id}/${list_id}`, {
    ...formValues,
  });
  //   console.log("Create Item", response.data.todo_items);

  dispatch({ type: CREATE_ITEM, payload: response.data });
  dispatch(fetchLists(getState().auth.userId)); //--
  dispatch(reset("toDoForm"));
};

export const deleteItem = (user_id, list_id, todo_id) => async (dispatch) => {
  let response = await todoapi.delete(
    `/todos/${user_id}/${list_id}/${todo_id}`
  );

  //   console.log("delete item action", response.data);

  dispatch({ type: DELETE_ITEM, payload: response.data });
};

export const checkItem = (user_id, list_id, todo_id) => async (dispatch) => {
  const response = await todoapi.patch(
    `/todos/${user_id}/${list_id}/${todo_id}`,
    { completed: true }
  );

  //   console.log("Item checked off ", response);

  dispatch({ type: CHECK_ITEM, payload: response.data });
};

export const uncheckItem = (user_id, list_id, todo_id) => async (dispatch) => {
  const response = await todoapi.patch(
    `/todos/${user_id}/${list_id}/${todo_id}`,
    { completed: false }
  );

  // console.log("Item UN checked ", response.data.todo_items);

  dispatch({ type: UN_CHECK_ITEM, payload: response.data });
};

export const setEditItem = (todo_id) => (dispatch) => {
  dispatch({ type: SET_EDIT_ITEM, payload: todo_id });
};

export const stopEdit = () => (dispatch) => {
  dispatch({ type: STOP_EDIT });
};

export const editItem = (formValues, user_id, list_id, todo_id) => async (
  dispatch
) => {
  const response = await todoapi.patch(
    `/todos/${user_id}/${list_id}/${todo_id}`,
    { ...formValues }
  );

  console.log("edit item action ", response.data);

  dispatch({ type: EDIT_ITEM, payload: response.data });
};

export const editList = (formValues, user_id, list_id) => async (dispatch) => {
  const response = await todoapi.patch(`/lists/${user_id}/${list_id}`, {
    ...formValues,
  });

  console.log("Edit list action ", response);

  dispatch({ type: EDIT_LIST, payload: response.data });
  history.push("/main");
};
