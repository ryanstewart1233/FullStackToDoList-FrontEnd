import React from "react";
import ReactDOM from "react-dom";

import "../../styles/Modal.scss";

const Modal = (props) => {
  const renderActions = () => {
    if (props.actions) {
      return <div className="modal__actions">{props.actions}</div>;
    }
  };
  //this renders as a child of the modal div in index.html, so that it is not deeply nested but is at the top of the hierarchy in the file.
  return ReactDOM.createPortal(
    <div className="modal__background">
      {/* using the below e.stopPropagation means that only when you click on the outside div above does the user get directed back towards route ('/') */}
      <div onClick={(e) => e.stopPropagation()} className="modal__box">
        <div className="modal__header">{props.title}</div>
        <div className="modal__content">{props.content}</div>
        {renderActions()}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
