import todoapi from "../apis/todoapi";

import { reset } from "redux-form";

import {
  FETCH_LISTS,
  SIGN_IN,
  SIGN_OUT,
  SET_SELECTED_LIST,
  CREATE_ITEM,
  DELETE_ITEM,
  CHECK_ITEM,
  UN_CHECK_ITEM,
} from "./types";

//For Google Auth
export const signIn = (userId) => async (dispatch, getState) => {
  await dispatch({ type: SIGN_IN, payload: userId });

  await dispatch(fetchLists(userId));
};

export const signOut = (userId) => (dispatch) => {
  dispatch({ type: SIGN_OUT });
  //   dispatch(resetListItems());
};

export const fetchLists = (user_id) => async (dispatch, getState) => {
  const response = await todoapi.get(`/lists/${user_id}`);

  //   console.log("action - fetch lists", response);

  dispatch({ type: FETCH_LISTS, payload: response.data });

  //determines if the object is empty and if so sets it to be the first list -includes timeout to avoid loading errors (only happens once on load to ensure a list is selected)
  if (Object.keys(getState().selected).length === 0) {
    function waitForElement() {
      //   console.log("getState", getState());
      if (getState().lists !== "undefined") {
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
  dispatch(fetchLists(getState().auth.userId)); //todo -simple fix for issue (if you click off list then back on it doesnt work) - find better solution
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
