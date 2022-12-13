




const TaskBody = (props)=>{
  
console.log(props.props)

  const priority = (priority)=>{
    console.log(priority)
    if (priority == 3){
      return (<span className="spanPriority"> Priority: 
        <i style ={{color: "red"}} className="priority fa fa-exclamation-circle fa-lg" aria-hidden="true">
          </i>
          High</span>
      )
    } else if (priority == 2){
      return (<span className="spanPriority">Priority: 
        <i style = {{color: "orange"}} className="priority fa fa-exclamation-circle fa-lg" aria-hidden="true"></i>Medium</span>
      )
    } else if (priority == 1){
      return (<span className="spanPriority">Priority: 
        <i style = {{color: "green"}}className="priority fa fa-exclamation-circle fa-lg" aria-hidden="true"></i>Low</span>
      )
    } else if (priority == null){
      return 
    }
  }

  return( <div id ={"body"+props.props.reactKey} className = {"taskBody hidden"}>
       
      {/* ! here is where all I was last working. Adds the details to the tasks. 
      I feel like each thing (or most) should be a separate function.  */}
      
      <div className="taskPriority">{priority(props.props.priority)}</div>
      <div className="taskDescription">{props.props.description}</div>
      <div className="taskProject">Project: {props.props.project}</div>
      <div className="taskDeadline">{props.props.deadline}</div>

     </div>
  )
}



export default TaskBody