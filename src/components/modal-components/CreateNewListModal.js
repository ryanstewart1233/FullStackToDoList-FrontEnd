import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import Modal from "./Modal";
import history from "../../history";
import { createList } from "../../actions";
import CustomButton from "../CustomButton";

//has to live outside to prevent field from un-focusing on typing
const renderTaskInput = ({ input }) => {
  return (
    <div className="form__input form__input--full" key="task-input">
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

const CreateNewListModal = (props) => {
  const onSubmit = (formValues) => {
    console.log("Submit create list attempted");
    props.createList(formValues, props.user_id);
  };

  const renderContent = () => {
    return (
      <form
        name="create-list-form"
        className="form form--centered"
        onSubmit={props.handleSubmit(onSubmit)}
      >
        <div className="form__inputs">
          <Field name="list_name" component={renderTaskInput} />
        </div>
        <div className="form__buttons">
          <CustomButton color="primary" type="submit">
            Create Task
          </CustomButton>
          <Link to="/main" className="ui button">
            <CustomButton color="grey">Cancel</CustomButton>
          </Link>
        </div>
      </form>
    );
  };

  return (
    <Modal
      onDismiss={() => history.push("/main")}
      title="Create New List"
      content={renderContent()}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  //   console.log(ownProps);
  return {
    user_id: state.auth.userId,
    // list: state.lists[ownProps.match.params.list_id],
  };
};

export default connect(mapStateToProps, { createList })(
  reduxForm({
    form: "toDoForm",
    enableReinitialize: true,
    // validate,
  })(CreateNewListModal)
);
