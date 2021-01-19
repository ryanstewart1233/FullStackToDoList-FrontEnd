import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__section"></div>
        <div className="footer__section">
          <div className="footer__title">ToDoList</div>
        </div>
        <div className="footer__section">
          <nav className="footer__nav">
            <a href="#" className="footer__nav__item">
              <GoogleAuth />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
