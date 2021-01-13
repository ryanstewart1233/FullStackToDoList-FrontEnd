import { connect } from "react-redux";

import { BsTrash } from "react-icons/bs";

import "../styles/Sidebar.scss";

import GoogleAuth from "./GoogleAuth";

import { fetchLists, setSelectedList } from "../actions";

const Sidebar = (props) => {
  const changeSelectedList = (list_id) => {
    // console.log("change list called", list_id);
    props.setSelectedList(list_id);
  };

  const renderLists = () => {
    return props.lists.map((list) => {
      // console.log("log lists", list);
      //todo - if selected_list === list id then render with item--active else render normally
      if (props.selected?._id === list._id) {
        return (
          <li className="side-bar__list-item" key={list._id}>
            <span className="side-bar__list-title side-bar__list-title--active">
              {list.list_name}
            </span>
            <span className="side-bar__list-icon">
              <BsTrash />
            </span>
          </li>
        );
      } else
        return (
          <li className="side-bar__list-item" key={list._id}>
            <span
              className="side-bar__list-title"
              onClick={() => changeSelectedList(list._id)}
            >
              {list.list_name}
            </span>
            <span className="side-bar__list-icon">
              <BsTrash />
            </span>
          </li>
        );
    });
  };

  return (
    <div className="side-bar">
      <div className="side-bar__container">
        <div className="side-bar__section">
          <div className="side-bar__title">ToDo List</div>
        </div>
        <div className="side-bar__section">
          <div className="side-bar__lists">
            <ul>
              {renderLists()}
              <li className="side-bar__list-new">+ Create New List</li>
            </ul>
          </div>
        </div>
        <div className="side-bar__section">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    user_id: state.auth.userId,
    lists: Object.values(state.lists),
    selected: state.selected,
  };
};

export default connect(mapStateToProps, { fetchLists, setSelectedList })(
  Sidebar
);
