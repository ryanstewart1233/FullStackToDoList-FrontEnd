import todoapi from '../apis/todoapi'

import { reset } from 'redux-form'

import {
    SIGN_IN,
    SIGN_OUT,

    CREATE_ITEM,
    EDIT_ITEM,
    FETCH_ITEMS,
    DELETE_ITEM,

    EDIT_MODE_ON,
    EDIT_MODE_OFF,
    EDIT_SPECIFIC_ITEM,
    EDIT_SPECIFIC_LIST,
    STOP_SPECIFIC_EDIT,

    RESET_TODO_ITEMS,
    RESET_LIST_ITEMS,

    CHECK_ITEM,
    UN_CHECK_ITEM,

    CREATE_LIST,
    EDIT_LIST,
    FETCH_LISTS,
    DELETE_LIST

} from './types'

//For Google Auth
export const signIn = (userId) => async dispatch => {

    await dispatch({ type: SIGN_IN, payload: userId })
    // dispatch(fetchItems(userId)) //putting this here immediately fixes the slow load problem
    dispatch(fetchLists(userId))
}

export const signOut = (userId) => dispatch => {

    dispatch({ type: SIGN_OUT })
    dispatch(resetListItems())

}


// export const signOut = () => {
//     return {
//         type: SIGN_OUT
//     }
// }


//For Edit mode
export const editModeOn = () => {
    return {
        type: EDIT_MODE_ON
    }
}

export const editModeOff = () => {
    return {
        type: EDIT_MODE_OFF
    }
}

export const editSpecificItem = (todo_id) => {

    // console.log("Edit specific action called", todo_id);
    return {
        type: EDIT_SPECIFIC_ITEM,
        payload: todo_id
    }
}

export const stopSpecificEdit = () => {

    return {
        type: STOP_SPECIFIC_EDIT
    }
}


export const editSpecificList = (list_id) => {

    console.log("Edit specific list action called", list_id);
    return {
        type: EDIT_SPECIFIC_LIST,
        payload: list_id
    }
}





//Resetting todo items and list items to avoid duplication 
export const resetToDoItems = () => {

    return {
        type: RESET_TODO_ITEMS
    }
}

export const resetListItems = () => async (dispatch, getState) => {

    var interval = setInterval(() => {
        if (getState().auth.isSignedIn === false) {
            dispatch({ type: RESET_LIST_ITEMS })
            clearInterval(interval)
        } else {
            console.log("still in loop");
        }
    }, 20)



}


export const fetchItems = (user_id, list_id) => async dispatch => {
    user_id = String(user_id)

    let response = await todoapi.get(`/todos/${user_id}/${list_id}`)



    console.log("fetch items", response.data[0].todo_items);

    dispatch({ type: FETCH_ITEMS, payload: response.data[0].todo_items })
}


export const createItem = (formValues, user_id, list_id) => async (dispatch) => {
    user_id = String(user_id)

    const response = await todoapi.post(`/todos/${user_id}/${list_id}`, { ...formValues })
    console.log("Create Item", response.data.todo_items)

    dispatch({ type: CREATE_ITEM, payload: response.data.todo_items })
    dispatch(reset('toDoForm')) //this resets the form value to be blank after successful addition
}

export const deleteItem = (user_id, list_id, todo_id) => async dispatch => {

    let response = await todoapi.delete(`/todos/${user_id}/${list_id}/${todo_id}`)

    console.log("delete item action", response.data.todo_items)

    console.log(response);
    dispatch({ type: DELETE_ITEM, payload: response.data.todo_items })
}

export const editItem = (formValues, user_id, list_id, todo_id) => async dispatch => {

    const response = await todoapi.patch(`/todos/${user_id}/${list_id}/${todo_id}`, { ...formValues })

    console.log("edit item action ", response.data.todo_items);

    dispatch({ type: EDIT_ITEM, payload: response.data.todo_items })

}

//Checking off todo items


export const checkItem = (user_id, list_id, todo_id) => async dispatch => {

    const response = await todoapi.patch(`/todos/${user_id}/${list_id}/${todo_id}`, { completed: true })

    // console.log("Item checked off ", response.data.todo_items);

    dispatch({ type: CHECK_ITEM, payload: response.data.todo_items })

}


export const uncheckItem = (user_id, list_id, todo_id) => async dispatch => {

    const response = await todoapi.patch(`/todos/${user_id}/${list_id}/${todo_id}`, { completed: false })

    // console.log("Item UN checked ", response.data.todo_items);

    dispatch({ type: UN_CHECK_ITEM, payload: response.data.todo_items })

}



//everything past here is to do with the new website layout using lists!!

export const fetchLists = (user_id) => async dispatch => {
    user_id = String(user_id)

    const response = await todoapi.get(`/lists/${user_id}`)

    // console.log("Fetch lists action", response);

    dispatch({ type: FETCH_LISTS, payload: response.data })
}


export const createList = (formValues, user_id) => async (dispatch) => {
    user_id = String(user_id)

    const response = await todoapi.post(`/lists/${user_id}`, { ...formValues })
    console.log("Create List action", response)

    dispatch({ type: CREATE_LIST, payload: response.data })
    dispatch(reset('toDoForm')) //this resets the form value to be blank after successful addition
}

export const deleteList = (user_id, list_id) => async dispatch => {

    const response = await todoapi.delete(`/lists/${user_id}/${list_id}`)

    console.log("Delete list action", list_id, response)

    dispatch({ type: DELETE_LIST, payload: list_id })
}

export const editList = (formValues, user_id, list_id) => async dispatch => {

    const response = await todoapi.patch(`/lists/${user_id}/${list_id}`, { ...formValues })

    console.log("Edit list action ", response);

    dispatch({ type: EDIT_LIST, payload: response.data })

}


