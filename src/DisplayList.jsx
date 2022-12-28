import { useState } from "react"
import TaskHeader from "./TaskHeader"
import toDoLibrary from "./toDoLibrary"
import TaskBody from "./TaskBody"
import FormAddTask from './FormAddTask'

// ! Listitem and taskheader are redundent.  can condense down...

const DisplayList = (props) =>{
  const [state, setState] = useState()
  const [library, setLibrary] = props.hookLibrary
  const [activeProject, setActiveProject] = props.hookActiveProject

  


  const ListItem =  (props)=> {
    
    if (activeProject.projectName =="All"){
      return <TaskHeader props = {props.item} hookLibrary = {[library, setLibrary]}/>
    } else if (activeProject.projectName == props.item.projectName)
    {
    return <TaskHeader props = {props.item} hookLibrary = {[library, setLibrary]}/>
    }}

  return (
    <div id = "toDoList">
      <div id = "taskHeaderDiv" style ={{color: activeProject.projectColor}}>
        <h2>{activeProject.projectName}</h2>
      </div>
      {library.map((item)=>
        <ListItem key ={item.reactKey}
          item = {item}/>
        )}
      <FormAddTask hookActiveProject = {[activeProject, setActiveProject]} hookLibrary = {[library, setLibrary]}/>
      </div>
  )

}

export default DisplayList
















// LEGACY CODE - BEFORE SPLITTLING INTO COMPONENTS

// ? function that comes before return.

// const markComplete = (reactKey)=> {

//   const removeTask = document.getElementById("container"+reactKey)
//   removeTask.classList.add("removeTaskAnimation")

//   const index = toDoLibrary.findIndex(item =>{
//     return item.reactKey == reactKey
//   })

//   toDoLibrary.splice(index,1)
//   setTimeout(()=>setLibrary([...toDoLibrary]), 1000)
// }




// const viewDetails = (reactKey)=> {
//   const taskContainer = document.getElementById("container"+reactKey)
//   taskContainer.classList.toggle("showDetails")

//   const taskBody = document.getElementById("body"+reactKey)
//   taskBody.classList.toggle("hidden")
// }



// return (
//   <div className = "taskContainer" id = {"container"+props.item.reactKey}>
//     <div className = "taskHeader" id = {"header"+props.item.reactKey}>
//       {props.item.toDoName} 
//       <div className="taskButtons">
//         <button onClick={()=>viewDetails(props.item.reactKey)} className="detailsBtn">
//         <i className="fa fa-list" aria-hidden="true"></i>
//         </button>
//         <button onClick={()=>markComplete(props.item.reactKey)} className="finishedBtn">
//           <i className="fa fa-check fa-lg" aria-hidden="true"></i>
//         </button>
//       </div>
//     </div>
//     <div id ={"body"+props.item.reactKey} className = {"taskBody hidden"}>
     
//      {/* ! here is where all I was last working. Adds the details to the tasks. 
//      I feel like each thing (or most) should be a separate function.  */}
     
//      <div>{priority()}</div>
//      <div>{props.item.description}</div>
//      <div>Project: {props.item.project}</div>
//      <div>{props.item.deadline}</div>

//     </div>
//   </div>
// )}
