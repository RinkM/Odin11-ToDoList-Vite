import { useState } from "react"

import toDoLibrary from "./toDoLibrary"



const DisplayList = (props) =>{
  const [state, setState] = useState()
  const [library, setLibrary] = props.hookLibrary


  const markComplete = (reactKey)=> {

    const removeTask = document.getElementById("container"+reactKey)
    removeTask.classList.add("removeTaskAnimation")

    const index = toDoLibrary.findIndex(item =>{
      return item.reactKey == reactKey
    })

    toDoLibrary.splice(index,1)
    setTimeout(()=>setLibrary([...toDoLibrary]), 1000)
  }

  const viewDetails = (reactKey)=> {
    const taskContainer = document.getElementById("container"+reactKey)
    taskContainer.classList.toggle("showDetails")

    const taskBody = document.getElementById("body"+reactKey)
    taskBody.classList.toggle("hidden")
  }

  

  const ListItem =  (props)=> {

    const priority = ()=>{
      if (props.item.priority == 3){
        return (<span className="spanPriority"> Priority: 
          <i style ={{color: "red"}} className="priority fa fa-exclamation-circle fa-lg" aria-hidden="true">
            </i>
            High</span>
        )
      } else if (props.item.priority == 2){
        return (<span className="spanPriority">Priority: 
          <i style = {{color: "orange"}} className="priority fa fa-exclamation-circle fa-lg" aria-hidden="true"></i>Medium</span>
        )
      } else if (props.item.priority == 1){
        return (<span className="spanPriority">Priority: 
          <i style = {{color: "green"}}className="priority fa fa-exclamation-circle fa-lg" aria-hidden="true"></i>Low</span>
        )
      } else if (props.item.priority == null){
        return 
      }
    }

    return (
    <div className = "taskContainer" id = {"container"+props.item.reactKey}>
      <div className = "taskHeader" id = {"header"+props.item.reactKey}>
        {props.item.toDoName} 
        <div className="taskButtons">
          <button onClick={()=>viewDetails(props.item.reactKey)} className="detailsBtn">
          <i className="fa fa-list" aria-hidden="true"></i>
          </button>
          <button onClick={()=>markComplete(props.item.reactKey)} className="finishedBtn">
            <i className="fa fa-check fa-lg" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div id ={"body"+props.item.reactKey} className = {"taskBody hidden"}>
       
       {/* ! here is where all I was last working. Adds the details to the tasks. 
       I feel like each thing (or most) should be a separate function.  */}
       
       <div>{priority()}</div>
       <div>{props.item.description}</div>
       <div>Project: {props.item.project}</div>
       <div>{props.item.dueDate}</div>

      </div>
    </div>
  )}


  return (
    <div id = "toDoList">
      {library.map((item)=>
        <ListItem key ={item.reactKey}
          item = {item}/>
        )}
      </div>
  )

}

export default DisplayList
