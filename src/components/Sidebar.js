import "../styles/Sidebar.scss";

import GoogleAuth from "./GoogleAuth";

function Sidebar() {
  return (
    <div className="side-bar">
      <div className="side-bar__container">
        <div className="side-bar__section">
          <div className="side-bar__title">ToDo List</div>
        </div>
        <div className="side-bar__section">
          <div className="side-bar__lists">
            <ul>
              <li className="side-bar__list-item side-bar__list-item--active">
                shopping list
              </li>
              <li className="side-bar__list-item"> other list</li>
              <li className="side-bar__list-item">+ Create New List</li>
            </ul>
          </div>
        </div>
        <div className="side-bar__section">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
