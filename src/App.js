import React, {useState} from "react";
import Form from "./Components/Forms/Form";
import Task from "./Components/Tasks/Task";

function App() {

const [newTask, setNewTask] = useState([]);

  const getTaskData = (data) => {

    setNewTask((taskdata)=>{
      return [data, ...taskdata];
    });
  }
  return (
    <>
    <Form sendTaskData={getTaskData}/>
    <Task data={newTask}/>
    </>
  );
}

export default App;
