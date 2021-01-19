import React from "react";
import "../styles/ToDoItem.scss";

//React Icons
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";

import getDateFormat from "../functions/getDateFormat";

const ToDoItem = (props) => {
  //todo - due date red for overdue, normal for the same day, green for over a day left

  const renderTickCross = () => {
    //if completed render cross. if not render tick
    //todo - above
    if (props.completed === true) {
      return (
        <div
          className="item__symbol item__symbol-1 item__symbol--x"
          onClick={() => props.uncheckItem(props.todo_id)}
        >
          <ImCross />
        </div>
      );
    }
    if (props.completed === false) {
      return (
        <div
          className="item__symbol item__symbol-1"
          onClick={() => props.checkItem(props.todo_id)}
        >
          <TiTick />
        </div>
      );
    }
  };

  const renderIfCompleted = () => {
    if (props.completed === true) {
      return "item__completed";
    } else {
      return "";
    }
  };

  const renderDateColor = () => {
    //grey if the same day, red if overdue, green if more than a day remaining
    const today = new Date();
    const due_date = new Date(props.due_date);
    if (due_date.getDay() === today.getDay()) {
      return;
    }
    if (due_date < today) {
      return "item__due-date--overdue";
    } else if (due_date > today) {
      return "item__due-date--time-remaining";
    }
  };

  return (
    <div className="item">
      <div className="item__left">
        <div className="item__symbols">
          {renderTickCross()}
          <div
            className="item__symbol item__symbol-2"
            onClick={() => props.setEditItem(props.todo_id)}
          >
            <MdEdit />
          </div>
          <div
            className="item__symbol item__symbol-3"
            onClick={() => props.delete(props.todo_id)}
          >
            <BsTrash />
          </div>
        </div>
        <div className={`item__title ${renderIfCompleted()}`}>
          {props.title}
        </div>
      </div>
      <div className="item__right">
        <div className={`item__due-date ${renderDateColor()}`}>
          {getDateFormat(props.due_date)}
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
