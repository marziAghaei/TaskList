import React, { useState,useEffect } from "react";
import Header from "./component/Header"
import './App.css';
import Tasks from "./component/Tasks"
import AddTask from"./component/AddTask"


const App = () => {
  const [title,setTitle] =useState ("Task Manager");
  const [tasks, setTasks] = useState([]);
 const [showAddtask,setShowAddtask] = useState(false);

useEffect(() => {
  const getTasks=async() =>{
    const taskFromServer= await fetchTask();
    setTasks(taskFromServer);
  }
getTasks();
}, []);
/**
 * fetch tasks
 */
const fetchTask=async() =>{
  const response = await fetch ("http://localhost:5000/tasks");
  const data= await response.json();
  return(data);
};

  /**
   * Delete a task
   */
  const handleDelete =async(taskId) => {
    await fetch (`http://localhost:5000/tasks/${taskId}`,{
      method:"DELETE"
    })
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // toggle reminder
 

  const reminderToggle = (id) => {
    // console.log(id);
     // steps:
// step1: find task with task id
// step2: reminder toggle
    let tempTask=tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task);
// step3: set new state
    setTasks(tempTask);
    }; 

    /**
     * Add task
     */
    const addTask=(task)=>{
      let id=Math.floor(Math.random()*100+1);
      // console.log(id);
      // console.log(task);
      let newTask={...task,id}
      setTasks([...tasks,newTask]);
    }

  const renderTask =
    tasks.length > 0 ? (
      <Tasks tasksList={tasks} onDelete={handleDelete} reminderToggle={reminderToggle}/>
    ) : (
      <div className="noTasks">No Tasks To show</div>
    );

  return (
    <div className="container">
      <Header headerTitle={title} onAdd={()=>setShowAddtask(!showAddtask)}
      showAddtask={showAddtask}
      />
     {showAddtask && <AddTask addTask={addTask}/>}
      {renderTask}
    </div>);
}
export default App;




//  // const renderTask = () => { }
//   { //   if (tasks.length) {
//   //     return <Tasks tasksList={tasks} onDelete={handleDelete} />;
//   //   } else {
//   //     return <div className="noTasks">No Tasks To show</div>;
//   //   }
//   // }; 




// functional component
// const App=()=>{
//  let age=32;
// let x =true;
// let description="my name is Marzi" 
//   return(
//     <div className="container">
//       <h1>my Header</h1>
  // <h2>my age is {age}<h2>
  // <p>{description}</p>
  // <p>{x ? "yes" : "no"}</p> =>turnery operator=>conditional formating
//       </div>
//   );
// };
//export default App;

//class component
// class App extends React.Component{
//   render(){
//     return(
//       <div>
// //       <h1>my Header</h1>
// //       </div>
//     )
//   }
// }
//export default App;