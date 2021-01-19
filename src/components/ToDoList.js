import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { MdEdit } from "react-icons/md";

import { deleteItem, checkItem, uncheckItem, setEditItem } from "../actions";

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

  const deleteItem = (todo_id) => {
    const list_id = props.selected._id;
    props.deleteItem(props.user_id, list_id, todo_id);
  };

  const setEditItem = (todo_id) => {
    props.setEditItem(todo_id);
  };

  const onEdit = (list_id) => {
    //below stops the edit pen rendering before list name has
    if (Object.keys(props.selected).length !== 0) {
      return (
        <span className="todo-list__title__edit-icon">
          <Link to={`/main/edit/${list_id}`}>
            <MdEdit />
          </Link>
        </span>
      );
    }
  };

  const renderTitle = () => {
    return (
      <div className="todo-list__title">
        {props.selected.list_name}
        {onEdit(props.selected._id)}
      </div>
    );
  };

  const RenderItems = () => {
    //sorts the items by date and then renders them
    if (props.selected.todo_items?.length !== 0) {
      return props.selected.todo_items
        ?.sort(
          (a, b) =>
            new Date(a.due_date).getTime() - new Date(b.due_date).getTime()
        )
        .map((item) => {
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
                setEditItem={setEditItem}
              />
            </div>
          );
        });
    }
  };

  // const RenderItems = () => {
  //   if (props.selected.todo_items?.length !== 0) {
  //     return props.selected.todo_items?.map((item) => {
  //       return (
  //         <div className="todo-list__item" key={item._id}>
  //           <ToDoItem
  //             todo_id={item._id}
  //             title={item.content}
  //             completed={item.completed}
  //             due_date={item.due_date}
  //             delete={deleteItem}
  //             checkItem={checkItem}
  //             uncheckItem={uncheckItem}
  //             setEditItem={setEditItem}
  //           />
  //         </div>
  //       );
  //     });
  //   }
  // };

  // console.log(selectedListItems);
  return (
    <div className="todo-list">
      {renderTitle()}
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

export default connect(mapStateToProps, {
  deleteItem,
  checkItem,
  uncheckItem,
  setEditItem,
})(ToDoList);
