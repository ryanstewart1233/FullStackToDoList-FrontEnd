import todoapi from "../apis/todoapi";

import { reset } from "redux-form";

import { FETCH_LISTS, SIGN_IN, SIGN_OUT, SET_SELECTED_LIST } from "./types";

//For Google Auth
export const signIn = (userId) => async (dispatch, getState) => {
  await dispatch({ type: SIGN_IN, payload: userId });
  // dispatch(fetchItems(userId)) //putting this here immediately fixes the slow load problem
  //   dispatch(fetchLists(userId));

  await dispatch(fetchLists(userId));

  //   const listArray = Object.values(getState().lists);
  //   console.log("getState", listArray);
  //   dispatch(setSelectedList(listArray[0]._id));
};

export const signOut = (userId) => (dispatch) => {
  dispatch({ type: SIGN_OUT });
  //   dispatch(resetListItems());
};

export const fetchLists = (user_id) => async (dispatch, getState) => {
  const response = await todoapi.get(`/lists/${user_id}`);

  console.log("action - fetch lists", response);

  dispatch({ type: FETCH_LISTS, payload: response.data });
  console.log(getState().selected);

  if (getState().selected === {}) {
    //changed
    function waitForElement() {
      console.log("getState", getState());
      if (getState().lists !== "undefined") {
        const list = Object.values(getState().lists)[0];

        console.log("list-id", list);
        dispatch(setSelectedList(list));
      } else {
        //has not loaded so need to wait
        setTimeout(waitForElement, 100);
      }
    }
    waitForElement();
  }
};

export const setSelectedList = (list_id) => (dispatch, getState) => {
  const arrayOfLists = Object.values(getState().lists);

  const selectedList = arrayOfLists.find((list) => list._id === list_id);

  console.log("set selected called", selectedList);
  dispatch({ type: SET_SELECTED_LIST, payload: selectedList });
};
