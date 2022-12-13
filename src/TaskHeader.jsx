import toDoLibrary from "./toDoLibrary"


const TaskHeader = (props) =>{
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

return (
  <div className = "taskHeader" id = {"header"+props.props.reactKey}>
    {props.props.toDoName} 
    <div className="taskButtons">
      <button onClick={()=>viewDetails(props.props.reactKey)} className="detailsBtn">
        <i className="fa fa-list" aria-hidden="true"></i>
      </button>
      <button onClick={()=>markComplete(props.props.reactKey)} className="finishedBtn">
       <i className="fa fa-check fa-lg" aria-hidden="true"></i>
       </button>
    </div>
  </div>
)

}



export default TaskHeader