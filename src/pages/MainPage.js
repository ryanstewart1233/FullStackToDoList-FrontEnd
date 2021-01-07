import "../styles/MainPage.scss";
import Sidebar from "../components/Sidebar";
import CreateTask from "../components/CreateTask";
import ToDoList from "../components/ToDoList";

function MainPage() {
  return (
    <div className="main">
      <Sidebar />
      <div className="main__section">
        <CreateTask />
        <ToDoList />
      </div>
    </div>
  );
}

export default MainPage;
