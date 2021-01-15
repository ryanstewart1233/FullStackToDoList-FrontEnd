import GoogleAuth from "./GoogleAuth";

import "../styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__section"></div>
        <div className="header__section">
          <div className="header__title">ToDoTogether</div>
        </div>
        <div className="header__section">
          <nav className="header__nav">
            <a href="#" className="header__nav__item">
              <GoogleAuth />
            </a>
            <a href="#" className="header__nav__item">
              SignUp
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
