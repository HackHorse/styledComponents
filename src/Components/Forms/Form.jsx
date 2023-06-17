import React, { useState } from "react";
import "./Form.scss";
import Button from "../Buttons/Button";

const Form = (props) => {
  const [task, setTask] = useState({enteredTask: ""});
  const [isValid, setIsValid] = useState(true);

  const onChangeHandler = (event) => {
    setTask((prevState) => {
      return { ...prevState, enteredTask: event.target.value };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(task.enteredTask.trim().length === 0){
        setIsValid(false);
        return;
          }
    const formTaskData = [
        task.enteredTask
    ];
    props.sendTaskData(formTaskData);

    setTask({enteredTask: ""});
  };



  return (
    <div className="form" onSubmit={onSubmitHandler}>
      <form action="" method="post">
        <div className={`forminner ${!isValid ? 'invalid' : ''}`}>
            <label htmlFor="task">Your Task: </label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Write your task...."
            value={task.enteredTask}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <Button type="submit">Add Your Task</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
