import React from "react";
import "../styles/ToDoItem.scss";

//React Icons
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";

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

  const renderDate = () => {
    //todo - fix the shitty dates
    var d = new Date(props.due_date);
    // console.log(d);
  };

  const renderIfCompleted = () => {
    if (props.completed === true) {
      return "item__completed";
    } else {
      return;
    }
  };
  return (
    <div className="item">
      <div className={`item__title ${renderIfCompleted()}`}>{props.title}</div>
      <div className="item__menu">
        <div className="item__symbols">
          {renderTickCross()}
          <div className="item__symbol item__symbol-2">
            <MdEdit />
          </div>
          <div
            className="item__symbol item__symbol-3"
            onClick={() => props.delete(props.todo_id)}
          >
            <BsTrash />
          </div>
        </div>
        <div className="item__due-date">Wednesday 14th 2021 {renderDate()}</div>
      </div>
    </div>
  );
};

export default ToDoItem;
