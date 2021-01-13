import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { deleteItem, checkItem, uncheckItem } from "../actions";

import "../styles/ToDoList.scss";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const list_id = props.selected._id;
  const checkItem = (todo_id) => {
    // console.log("check item", todo_id);
    props.checkItem(props.user_id, list_id, todo_id);
  };

  const uncheckItem = (todo_id) => {
    // console.log("un check item", todo_id);
    props.uncheckItem(props.user_id, list_id, todo_id);
  };

  const RenderItems = () => {
    if (props.selected.todo_items?.length !== 0) {
      return props.selected.todo_items?.map((item) => {
        return (
          <div className="todo-list__item" key={item._id}>
            <ToDoItem
              todo_id={item._id}
              title={item.content}
              completed={item.completed}
              due_date={item.due_date}
              delete={deleteItem}
              checkItem={checkItem}
              uncheckItem={uncheckItem}
            />
          </div>
        );
      });
    }
  };

  const deleteItem = (todo_id) => {
    const list_id = props.selected._id;
    props.deleteItem(props.user_id, list_id, todo_id);
  };

  // console.log(selectedListItems);
  return (
    <div className="todo-list">
      <div className="todo-list__title">{props.selected.list_name}</div>
      <div className="todo-list__list">{RenderItems()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user_id: state.auth.userId,
    selected: state.selected,
  };
};

export default connect(mapStateToProps, { deleteItem, checkItem, uncheckItem })(
  ToDoList
);
