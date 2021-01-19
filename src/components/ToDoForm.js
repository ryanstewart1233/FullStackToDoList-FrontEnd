import React from "react";
import { Field, reduxForm } from "redux-form";

import CustomButton from "./CustomButton";

import "../styles/ToDoForm.scss";

const renderTaskInput = ({ input }) => {
  return (
    <div className="form__input" key="task-input">
      <label htmlFor="content" className="form__input__label">
        Title
      </label>
      <input
        {...input}
        type="text"
        name="content"
        autoComplete="off"
        required
      />
    </div>
  );
};

const renderDateInput = ({ input }) => {
  return (
    <div className="form__input">
      <label htmlFor="due_date" className="form__input__label">
        Due date
      </label>
      <input {...input} type="date" name="due_date" required />
    </div>
  );
};

const ToDoForm = (props) => {
  //todo - either find a way to make the edit in a modal or make this both create and edit
  // console.log(props);

  const renderButtons = () => {
    console.log(props);
    if (props.onEditCancel) {
      return (
        <div className="form__buttons">
          <CustomButton color="primary" type="submit">
            {props.buttonText}
          </CustomButton>
          <CustomButton color="grey" type="submit" onClick={props.onEditCancel}>
            Cancel
          </CustomButton>
        </div>
      );
    } else {
      return (
        <CustomButton color="primary" type="submit">
          {props.buttonText}
        </CustomButton>
      );
    }
  };

  return (
    <div className="create-task">
      <div className="create-task__title">{props.title}</div>
      <div className="create-task__box">
        <form
          name="create-task-form"
          className="form"
          onSubmit={props.handleSubmit(props.onSubmit)}
        >
          <div className="form__inputs">
            <Field name="content" component={renderTaskInput} />
            <Field name="due_date" component={renderDateInput} />
          </div>

          {renderButtons()}
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "toDoForm",
  enableReinitialize: true,
})(ToDoForm);
