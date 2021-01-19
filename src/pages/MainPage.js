import { useState, useEffect } from "react";

import "../styles/MainPage.scss";

import Sidebar from "../components/Sidebar";
import CreateEditTask from "../components/CreateEditTask";
import ToDoList from "../components/ToDoList";

import MobileSideBar from "../components/MobileSideBar";

function MainPage() {
  const initalWindowSize = window.innerWidth;

  const [windowSize, setWindowSize] = useState(initalWindowSize);
  const [sideBarVisible, setSideBarVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
      // console.log("resized to: ", window.innerWidth)
    }

    window.addEventListener("resize", handleResize);
  });
  console.log(windowSize);

  //todo -- button to pop out lists

  const CollapseSideBar = () => {
    setSideBarVisible((sideBarVisible) => !sideBarVisible);
    console.log("collapsed", sideBarVisible);
  };

  const renderMobileSideBar = () => {
    //1px greater than bp-smaller to ensure it loads at 800
    if (windowSize < 801) {
      return <MobileSideBar onClick={CollapseSideBar} />;
    }
  };
  return (
    <div className="main">
      <Sidebar is_visible={sideBarVisible} set_is_visible={setSideBarVisible} />
      <div className="main__section">
        {renderMobileSideBar()}
        <CreateEditTask />
        <ToDoList />
      </div>
    </div>
  );
}

export default MainPage;
