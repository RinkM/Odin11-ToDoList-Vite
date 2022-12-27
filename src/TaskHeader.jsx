import toDoLibrary from "./toDoLibrary"

import DueDate from "./DueDate"

const TaskHeader = (props) =>{
  const [library, setLibrary] = props.hookLibrary
  

  
  const markComplete = (reactKey)=> {
    const removeTask = document.getElementById("taskContainer"+reactKey)
    removeTask.classList.add("removeTaskAnimation")

    const index = toDoLibrary.findIndex(item =>{
      return item.reactKey == reactKey
    })
    toDoLibrary.splice(index,1)
    setTimeout(()=>setLibrary([...toDoLibrary]), 1000)
  }


  const viewDetails = (reactKey)=> {
    const taskContainer = document.getElementById("taskContainer"+reactKey)
    taskContainer.classList.toggle("showDetails")

    const taskBody = document.getElementById("body"+reactKey)
    taskBody.classList.toggle("hidden")
  }


  const priority = (priority)=>{
    if (priority == 3){
      return (
      <div className="taskPriority">
      <span className="spanPriority" style ={{color: "rgb(253, 57, 27)"}}>  
        <i className="priority fa fa-exclamation-circle fa-lg" aria-hidden="true">
          </i>
          High Priority</span></div>
      )
    } else if (priority == 2){
      return (<div className="taskPriority">
      <span className="spanPriority" style = {{color: "yellow"}}> 
        <i className="priority fa fa-exclamation-circle fa-lg" aria-hidden="true">
          </i>Medium Priority</span></div>
      )
    } else if (priority == 1){
      return (
      <div className="taskPriority">
      <span className="spanPriority" style = {{color: "cyan"}}> 
        <i className="priority fa fa-exclamation-circle fa-lg" aria-hidden="true">
          </i>Low Priority</span></div>
      )
    } else if (priority == null){
      return 
    }
  }


return (
  <div className="taskContainer backgroundTask" id = {"taskContainer"+props.props.reactKey}>
    <div style = {{backgroundColor: props.props.projectColor}} className="projectColor"  id ={"projectColor"+props.props.reactKey} ></div>
    <div className="taskDetailBtn">
        <button onClick={()=>viewDetails(props.props.reactKey)} className="detailsBtn">
          <i className="fa fa-list fa-2x iconColor" aria-hidden="true"></i>
        </button>
      </div>

    <div className="taskInfo">
      <div className = "taskTitle">
        <div className="taskName">{props.props.toDoName} 
        </div>


      </div>
      <div className = "taskSubTitle">
        {priority(props.props.priority)}
        <DueDate props = {props.props.dueDate}/>
      </div>
      <div id ={"body"+props.props.reactKey} className = {"taskBody hidden"}>
        <div className="taskDescription">{props.props.description}</div>
      </div>
    </div>
    <div className="taskButtons">
          
          <button onClick={()=>markComplete(props.props.reactKey)} className="finishedBtn">
            <i className="fa fa-check fa-2x iconColor" aria-hidden="true"></i>
            </button>
        </div>
    
  </div>
  

  
)

}




export default TaskHeader







