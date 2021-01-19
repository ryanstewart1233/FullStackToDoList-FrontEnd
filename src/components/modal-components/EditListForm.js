import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import CustomButton from "../CustomButton";

//has to be separate component in order to receive initial values prop from redux form
const renderListInput = ({ input }) => {
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

const EditListForm = (props) => {
  console.log("edit list props", props);
  return (
    <form
      name="edit-list-form"
      className="form form--centered"
      onSubmit={props.handleSubmit(props.onSubmit)}
    >
      <div className="form__inputs ">
        <Field name="list_name" component={renderListInput} />
      </div>
      <div className="form__buttons">
        <CustomButton color="primary" type="submit">
          Edit List
        </CustomButton>
        <Link to="/main" className="ui button">
          <CustomButton color="grey">Cancel</CustomButton>
        </Link>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "toDoForm",
  enableReinitialize: true,
})(EditListForm);
