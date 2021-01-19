import { HiMenu } from "react-icons/hi";

import "../styles/MobileSideBar.scss";

//this is a button to allow the showing and hiding of the sidebar once in mobile
const MobileSideBar = ({ onClick }) => {
  return (
    <div className="mobile-sidebar" onClick={() => onClick()}>
      <HiMenu />
    </div>
  );
};

export default MobileSideBar;
