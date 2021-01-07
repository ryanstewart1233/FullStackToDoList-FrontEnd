import React from "react";
import "../styles/ToDoItem.scss";

const ToDoItem = (props) => {
  //react library for icons would work
  //todo - tick icon, Edit icon, delete Icon

  //todo - due date red for overdue, normal for the same day, green for over a day left
  return (
    <div className="item">
      <div className="item__title">Get Milk</div>
      <div className="item__menu">
        <div className="item__symbols">
          <div className="item__symbols-1">.</div>
          <div className="item__symbols-2">/</div>
          <div className="item__symbols-3">-</div>
          <div className="item__symbols-4">#</div>
        </div>
        <div className="item__due-date">10/12/2020</div>
      </div>
    </div>
  );
};

export default ToDoItem;
