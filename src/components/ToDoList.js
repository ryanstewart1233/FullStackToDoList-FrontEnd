import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {} from "../actions";

import "../styles/ToDoList.scss";
import ToDoItem from "./ToDoItem";

import { useSelector } from "react-redux";

const ToDoList = (props) => {
  const RenderItems = () => {
    if (props.todo_items?.length !== 0) {
      return props.todo_items?.map((item) => {
        return (
          <div className="todo-list__item">
            <ToDoItem key={item._id} title={item.content} />
          </div>
        );
      });
    }
  };

  // console.log(selectedListItems);
  return (
    <div className="todo-list">
      <div className="todo-list__title">Shopping list</div>
      <div className="todo-list__list">
        {RenderItems()}
        <div className="todo-list__item">
          <ToDoItem title="get milk" />
        </div>
        <div className="todo-list__item">
          <ToDoItem />
        </div>
        <div className="todo-list__item">
          <ToDoItem />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todo_items: state.selected.todo_items,
  };
};

export default connect(mapStateToProps, null)(ToDoList);
