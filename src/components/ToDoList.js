import "../styles/ToDoList.scss";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const activeList = "Shopping List"; //receive as props

  return (
    <div className="todo-list">
      <div className="todo-list__title">To Do - {activeList}</div>
      <div className="todo-list__list">
        <div className="todo-list__item">
          <ToDoItem />
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
}

export default ToDoList;
