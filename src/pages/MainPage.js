import "../styles/MainPage.scss";
import Sidebar from "../components/Sidebar";
import CreateEditTask from "../components/CreateEditTask";
import ToDoList from "../components/ToDoList";

function MainPage() {
  return (
    <div className="main">
      <Sidebar />
      <div className="main__section">
        <CreateEditTask />
        <ToDoList />
      </div>
    </div>
  );
}

export default MainPage;
