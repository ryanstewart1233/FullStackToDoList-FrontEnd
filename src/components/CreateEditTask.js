import React from "react";
import { Field, getFormInitialValues, reduxForm } from "redux-form";
import { connect } from "react-redux";

import "../styles/CreateEditTask.scss";

import { createItem, stopEdit, editItem } from "../actions";
import ToDoForm from "./ToDoForm";

const CreateEditTask = (props) => {
  const onCreateSubmit = (formValues) => {
    console.log("onCreateSubmit", formValues);
    props.createItem(formValues, props.user_id, props.selected._id);
  };

  const onEditSubmit = (formValues) => {
    console.log("onEditSubmit", formValues);
    props.editItem(
      formValues,
      props.user_id,
      props.selected._id,
      props.edit_todo_id
    );
    props.stopEdit();
  };

  const getFormInitialValues = () => {
    const results = props.selected.todo_items.filter(
      (item) => item._id === props.edit_todo_id
    );

    const content = results[0]?.content;
    const due_date = results[0]?.due_date.substring(0, 10);

    return { content: content, due_date: due_date };
  };

  const editCancel = () => {
    props.stopEdit();
  };

  const renderForm = () => {
    if (props.edit_todo_id === null) {
      return (
        <ToDoForm
          onSubmit={onCreateSubmit}
          title="Create New Task"
          buttonText="Create Task"
        />
      );
    } else if (props.edit_todo_id !== null) {
      return (
        <ToDoForm
          onSubmit={onEditSubmit}
          title="Edit Task"
          buttonText="Edit Task"
          initialValues={getFormInitialValues()}
          onEditCancel={editCancel}
        />
      );
    }
  };

  return <React.Fragment>{renderForm()}</React.Fragment>;
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    user_id: state.auth.userId,
    selected: state.selected,
    edit_todo_id: state.edit.selected_todo,
  };
};

export default connect(mapStateToProps, { createItem, stopEdit, editItem })(
  CreateEditTask
);
