import "../styles/LandingPage.scss";
import Header from "../components/Header";
import Description from "../components/Description";

import AppImage from "../images/todolist.png";

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />

      <div className="img-container">
        <img src={AppImage}></img>
      </div>
    </div>
  );
}

export default LandingPage;
