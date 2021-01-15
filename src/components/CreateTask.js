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
      <label htmlFor="duedate" className="form__input__label">
        Due date
      </label>
      <input {...input} type="date" name="duedate" required />
    </div>
  );
};

const CreateTask = (props) => {
  //todo - either find a way to make the edit in a modal or make this both create and edit
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
          className="form"
          onSubmit={props.handleSubmit(onSubmit)}
        >
          <div className="form__inputs">
            <Field name="content" component={renderTaskInput} />
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
