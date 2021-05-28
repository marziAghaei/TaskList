import React from "react";
import Task from "./Task"


const Tasks = ({tasksList,onDelete,reminderToggle}) => {
   console.log(reminderToggle);
  return (
    <div>{tasksList.map((task , index) => {
        return <Task key={task.id} task={task} onDelete={onDelete} reminderToggle={reminderToggle}/>
    })}   
    </div>
  )
}


export default Tasks;
