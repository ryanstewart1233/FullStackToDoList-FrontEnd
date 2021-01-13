import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import "../styles/CreateTask.scss";

import { createItem } from "../actions";

//these two need to live outside the functional component to avoid form losing focus during typing
const renderTaskInput = ({ input }) => {
  return (
    <div className="form__input" key="task-input">
      <label htmlFor="content" className="form__input__label">
        Title
      </label>
      <input
        {...input}
        key="1234"
        type="text"
        name="content"
        autoComplete="off"
      />
    </div>
  );
};

const renderDateInput = ({ input }) => {
  return (
    <div className="form__input">
      <label htmlFor="duedate" className="form__input__label">
        Due date
      </label>
      <input {...input} type="datetime-local" name="duedate" />
    </div>
  );
};

const CreateTask = (props) => {
  // console.log(props);
  const onSubmit = (formValues) => {
    console.log("Submit attempted");
    props.createItem(formValues, props.user_id, props.selected._id);
  };

  return (
    <div className="create-task">
      <div className="create-task__title">Create New Task</div>
      <div className="create-task__box">
        <form
          name="create-task-form"
          id="create-task-form"
          key="12345"
          className="form"
          onSubmit={props.handleSubmit(onSubmit)}
        >
          <div className="form__inputs">
            <Field key="123" name="content" component={renderTaskInput} />
            <Field name="due_date" component={renderDateInput} />
          </div>

          <button type="submit">Create Task</button>
        </form>
      </div>
    </div>
  );
};

// const validate = (formValues) => {
//   const errors = {};

//   if (!formValues.content) {
//     errors.content = "You must enter some content";
//   }

//   return errors;
// };

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    user_id: state.auth.userId,
    selected: state.selected,
  };
};

export default connect(mapStateToProps, { createItem })(
  reduxForm({
    form: "toDoForm",
    enableReinitialize: true,
    // validate,
  })(CreateTask)
);
