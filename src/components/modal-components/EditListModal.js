import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import Modal from "./Modal";
import history from "../../history";
import { editList } from "../../actions";

import EditListForm from "./EditListForm";

const EditListModal = (props) => {
  const onSubmit = (formValues) => {
    console.log("Edit list attempted");
    props.editList(formValues, props.user_id, props.list._id);
  };

  const renderContent = () => {
    return (
      <EditListForm
        onSubmit={onSubmit}
        initialValues={{ list_name: props.list.list_name }}
      />
    );
  };

  return (
    <Modal
      onDismiss={() => history.push("/main")}
      title="Edit List Title"
      content={renderContent()}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user_id: state.auth.userId,
    list: state.lists[ownProps.match.params.list_id],
  };
};

export default connect(mapStateToProps, { editList })(
  reduxForm({
    form: "toDoForm",
    enableReinitialize: true,
  })(EditListModal)
);
