import { useState } from "react";

import { connect } from "react-redux";

import { BsTrash } from "react-icons/bs";
import { ImCross } from "react-icons/im";

import "../styles/Sidebar.scss";

import GoogleAuth from "./GoogleAuth";

import { fetchLists, setSelectedList } from "../actions";

import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const [width, setWidth] = useState("small");
  const changeSelectedList = (list_id) => {
    // console.log("change list called", list_id);
    props.setSelectedList(list_id);
  };

  const onDelete = (list_id) => {
    return (
      <span className="side-bar__list-icon">
        <Link to={`/main/delete/${list_id}`}>
          <BsTrash />
        </Link>
      </span>
    );
  };

  const renderLists = () => {
    //renders the current selected list with an --active class modifier
    return props.lists.map((list) => {
      // console.log("log lists", list);
      //todo - if selected_list === list id then render with item--active else render normally
      if (props.selected?._id === list._id) {
        return (
          <li className="side-bar__list-item" key={list._id}>
            <span className="side-bar__list-title side-bar__list-title--active">
              {list.list_name}
            </span>
            {onDelete(list._id)}
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
            {onDelete(list._id)}
          </li>
        );
    });
  };

  const sideBarVisiblity = () => {
    if (props.is_visible === true) {
      return "side-bar__visible";
    } else return "side-bar__in-visible";
  };

  const set_visibility = () => {
    if (props.is_visible === true) {
      props.set_is_visible(false);
    } else if (props.is_visible === false) {
      props.set_is_visible(true);
    }
  };

  const render_X_onMobile = () => {
    if (props.is_visible === true) {
      return (
        <div
          className="side-bar__mobile-cross"
          onClick={() => set_visibility()}
        >
          <ImCross />
        </div>
      );
    }
  };

  return (
    <div className={`side-bar ${sideBarVisiblity()}`} width={"0"}>
      {render_X_onMobile()}
      <div className="side-bar__container">
        <div className="side-bar__section">
          <div className="side-bar__title">ToDoList</div>
        </div>
        <div className="side-bar__section">
          <div className="side-bar__lists">
            <ul>
              {renderLists()}
              <li className="side-bar__list-new">
                <Link to={"/main/create-list"}>+ Create New List</Link>
              </li>
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
