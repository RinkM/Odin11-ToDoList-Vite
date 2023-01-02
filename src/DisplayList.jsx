import { useState } from "react"
import TaskHeader from "./TaskHeader"
import FormAddTask from './FormAddTask'
import differenceInCalendarDays from "date-fns/differenceInCalendarDays"
import AddTaskBtn from "./AddTaskBtn"

// ! SortItem and taskheader are redundent.  can condense down...

const DisplayList = (props) =>{
  const [library, setLibrary] = props.hookLibrary
  const [activeProject, setActiveProject] = props.hookActiveProject
  const [deadlineFilter, setDeadlineFilter] = props.hookDeadlineFilter




// ! this is the + Add Task button function. <AddTaskBtn/>
  // const AddTaskBtn = () => {
  //   return(
  //     // <div id = "addTaskBtn" className="backgroundTask taskForm">
  //       <button className="flex" id = "newTaskBtn" onClick={()=>showForm()}>+ New Task</button>
          
  //     // </div>
  //   )
  // }


  const SortItem =  (props)=> {
    const daySort = () => {
      const today = Date.now();
      const days = differenceInCalendarDays(props.item.dueDate, today);
      console.log("daystildue", days)
      console.log("activeprojcect time", deadlineFilter)
      if (deadlineFilter.filter == "Any Time"){
        return true
      } else if (days >= deadlineFilter.filter) {
        return false
      } else {
        return true
      };
    }

    const projectSort = () =>{
      // console.log("projectSort", activeProject.projectName, props.item.projectName)

      if (activeProject.projectName =="All"){
        return true
      } else if (activeProject.projectName == props.item.projectName){
        return true
      }else {
        return false
      };
    }

    if (daySort() == true && projectSort() ==true){
      return <TaskHeader 
      hookActiveProject = {[activeProject, setActiveProject]} 
      hookDeadlineFilter = {[deadlineFilter, setDeadlineFilter]} 
      props = {props.item} hookLibrary = {[library, setLibrary]}/>
    } else if (daySort() == false && projectSort() ==true){


    } else if (daySort() == true && projectSort() ==false){
    }
  }
console.log("deadlineFilter", deadlineFilter)
  return (
    <div id = "toDoList">
      <div id = "taskHeaderDiv" style ={{color: activeProject.projectColor}}>
        <h2>{activeProject.projectName} Projects Due: {deadlineFilter.listText}</h2>
      </div>
      {library.map((item)=>
        <SortItem 
        key ={item.reactKey+Date.now()} 
        item = {item}/>
        )}

      <div id = "taskFormDiv" className="taskFormContainer backgroundForm">
        <AddTaskBtn/>
        <FormAddTask 
        hookActiveProject = {[activeProject, setActiveProject]} 
        hookLibrary = {[library, setLibrary]}/>
      </div>
    </div>
      
  )

}

export default DisplayList



