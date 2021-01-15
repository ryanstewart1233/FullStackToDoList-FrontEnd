import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import Modal from "./Modal";
import history from "../../history";
import { createList } from "../../actions";

//has to live outside to prevent field from un-focusing on typing
const renderTaskInput = ({ input }) => {
  return (
    <div className="form__input" key="task-input">
      <label htmlFor="list_name" className="form__input__label">
        Title
      </label>
      <input
        {...input}
        type="text"
        name="list_name"
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

const EditItemModal = (props) => {
  console.log(props);
  const deleteList = () => {
    props.deleteList(props.user_id, props.list._id);
  };
  const renderActions = () => {
    return (
      <React.Fragment>
        <button className="ui button negative" onClick={() => deleteList()}>
          Delete
        </button>
        <Link to="/main" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  const onSubmit = (formValues) => {
    console.log("Submit create list attempted");
    props.createList(formValues, props.user_id);
  };

  const renderContent = () => {
    return (
      <form
        name="create-list-form"
        className="form"
        onSubmit={props.handleSubmit(onSubmit)}
      >
        <div className="form__inputs">
          <Field name="content" component={renderTaskInput} />
          <Field name="due_date" component={renderDateInput} />
        </div>

        <button type="submit">Create Task</button>
      </form>
    );
  };

  return (
    <Modal
      onDismiss={() => history.push("/main")}
      title="Create New List"
      content={renderContent()}
      actions={renderActions()}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  //   console.log(ownProps);
  return {
    user_id: state.auth.userId,
    list: state.lists[ownProps.match.params.list_id],
  };
};

export default connect(mapStateToProps, { createList })(
  reduxForm({
    form: "toDoForm",
    enableReinitialize: true,
    // validate,
  })(EditItemModal)
);
