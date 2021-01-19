import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Modal from "./Modal";
import history from "../../history";
import { deleteList } from "../../actions";

import CustomButton from "../CustomButton";

const DeleteListModal = (props) => {
  console.log(props);
  const deleteList = () => {
    props.deleteList(props.user_id, props.list._id);
  };
  const renderActions = () => {
    return (
      <React.Fragment>
        <CustomButton
          color="primary"
          className="ui Button negative"
          onClick={() => deleteList()}
        >
          Delete
        </CustomButton>

        <Link to="/main" className="ui button">
          <CustomButton color="grey">Cancel</CustomButton>
        </Link>
      </React.Fragment>
    );
  };

  const renderContent = () => {
    return "Are you sure you want to delete this list?";
  };

  return (
    <Modal
      onDismiss={() => history.push("/main")}
      title="Delete List"
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

export default connect(mapStateToProps, { deleteList })(DeleteListModal);
