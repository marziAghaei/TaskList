import React from 'react';

import { FaWindowClose } from "react-icons/fa";

 const task = ({task,onDelete,reminderToggle}) => {
    return (
    <div className={`task event ${task.reminder && "reminder"}`} onDoubleClick={()=>reminderToggle(task.id)}>
        <div>
        <p>{task.text}</p>
        <p>{task.day}</p>
        {/* <p>{task.reminder.toString()}</p> */}
        </div>
        <FaWindowClose className="task__close" 
        onClick={() => onDelete(task.id)}/>
        </div>);
};

export default task;

// to use react icon => npm install react-icons --save
// https://react-icons.github.io/react-icons/

// event.stopPropagation() =>search konam =>when we have 2 onclick ,we use it in meddle funct to stop this onclick to 
// run other one