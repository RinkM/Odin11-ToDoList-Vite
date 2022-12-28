
import { set } from "date-fns/esm"
import { Formik } from "formik"
import { useFormik } from "formik"
import toDoLibrary from "./toDoLibrary"
import TaskFactory from "./TaskFactory"



const FormAddTask = (props)=>{
  const [activeProject, setActiveProject] = props.hookActiveProject
  const [library, setLibrary] = props.hookLibrary

  const addItem = (values)=>{
    toDoLibrary.push(TaskFactory.TaskFactory(values, activeProject))
        console.log(values)
    setLibrary([...toDoLibrary])
    console.log([...toDoLibrary]);
      }

  const showForm = ()=> {
    const form = document.getElementById("taskFormID")
    form.classList.toggle("hidden")
    const button = document.getElementById("newTaskBtn")
    button.classList.toggle("hidden")
    button.classList.toggle("flex")
  
  }


  const addTaskBtn = () => {
    return(
      // <div id = "addTaskBtn" className="backgroundTask taskForm">
        <button className="backgroundForm flex" id = "newTaskBtn" onClick={()=>showForm()}>+ New Task</button>
          
      // </div>
    )
  }

  const formik = useFormik({
    initialValues: {
      toDoName: "",
      description:"",
      deadline: "",
      priority: "",
      project:"Food"
    },
  onSubmit: values => {
    
    showForm()
    console.log(values)


    addItem(values);
    // alert(JSON.stringify(values, null, 2));
  },


});
return (
  <div id = "taskFormContainer" className="taskFormContainer ">
    {addTaskBtn()}
    <form id = "taskFormID" className="taskForm backgroundForm addTaskBtn hidden" onSubmit={formik.handleSubmit}>
      
      <div id = "formTaskName">
        <label id = "taskNameLabel" htmlFor="toDoName">Action Item: </label>
        <input
          id="toDoName"
          name="toDoName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.toDoName}
        />
      </div>
      


      <div id = "formTaskDescription">
        <label id = "descriptionLabel" htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </div>

      <div id = "formTaskDeadline">
        <label id = "deadlineLabel" htmlFor="deadline">Deadline:</label>
        <input

          id="deadline"
          name="deadline"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.deadline}
        />
      </div>


      <div id = "formTaskPriority">
        <label id = "priorityLabel" htmlFor="priority">Priority</label>
        <select 
          id = "prioritySelect"
          name ="priority"
          onChange={formik.handleChange}
          value={formik.values.priority}
        >
          <option value="" label = "Select Priority">Select Priority</option>
          <option value="1" label = "Low">Low</option>
          <option value="2" label = "Medium">Medium</option>
          <option value="3" label = "High">High</option>
        </select>
      </div>

      <button id = "taskFormBtn" className= "formButton" type="submit">Add Item</button>

    </form>
  </div>
);
}



export default FormAddTask