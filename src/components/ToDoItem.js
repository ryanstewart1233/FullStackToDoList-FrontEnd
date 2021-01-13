import React from "react";
import "../styles/ToDoItem.scss";

//React Icons
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";

const ToDoItem = (props) => {
  //react library for icons would work
  //todo - tick icon, Edit icon, delete Icon

  //todo - due date red for overdue, normal for the same day, green for over a day left

  const renderTickCross = () => {
    //if completed render cross. if not render tick
    //todo - above

    // return (
    //   <div className="item__symbol item__symbol-1 item__symbol--x">
    //     <ImCross />
    //   </div>
    // );

    return (
      <div className="item__symbol item__symbol-1">
        <TiTick />
      </div>
    );
  };
  return (
    <div className="item">
      <div className="item__title">{props.title}</div>
      <div className="item__menu">
        <div className="item__symbols">
          {renderTickCross()}
          <div className="item__symbol item__symbol-2">
            <MdEdit />
          </div>
          <div className="item__symbol item__symbol-3">
            <BsTrash />
          </div>
        </div>
        <div className="item__due-date">Thursday 14th 2021</div>
      </div>
    </div>
  );
};

export default ToDoItem;
