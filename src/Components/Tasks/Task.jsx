import React from "react";
import TaskItem from "./TaskItem";

const Task = (props) => {
  return (
    <>
      {props.data.map((item, index) => (
        <TaskItem key={index} task={item}/>
      ))}
    </>
  );
};

export default Task;
