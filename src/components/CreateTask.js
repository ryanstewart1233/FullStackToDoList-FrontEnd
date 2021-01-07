import "../styles/CreateTask.scss";

function CreateTask() {
  return (
    <div className="create-task">
      <div className="create-task__title">Create New Task</div>
      <div className="create-task__box">
        <form action="#" className="form">
          <div className="form__inputs">
            <div className="form__input">
              <label htmlFor="title" className="form__input__label">
                Title
              </label>
              <input type="text" name="title" />
            </div>
            <div className="form__input">
              <label htmlFor="duedate" className="form__input__label">
                Due date
              </label>
              <input type="date" name="duedate" />
            </div>
          </div>

          <button type="submit">Create Task</button>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
