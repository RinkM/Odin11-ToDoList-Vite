import { Formik } from "formik"
import { useFormik } from "formik"
import toDoLibrary from "./toDoLibrary"
import TaskFactory from "../TaskFactory"



const FormAddTask = (props)=>{
  const [activeProject, setActiveProject] = props.hookActiveProject
  const [library, setLibrary] = props.hookLibrary

  const addItem = (values)=>{
    toDoLibrary.push(TaskFactory.TaskFactory(values, activeProject));
    localStorage.setItem("taskLibrary", JSON.stringify(toDoLibrary));
    setLibrary([...toDoLibrary]);
    }


  const hideForm=()=>{
    const form = document.getElementById("formDiv")
    form.classList.add("hidden")

    const button = document.getElementById("newTaskBtn")
    button.classList.remove("hidden")
    button.classList.add("flex")
  }

  const formik = useFormik({
    initialValues: {
      toDoName: "",
      description:"",
      deadline: "",
      priority: "",
    },
    
  onSubmit: (values, {resetForm}) => {
    hideForm();
    addItem(values);
    resetForm();
  },


});
return (
  <div id = "formDiv" className="hidden">
    <form id = "taskFormID" className="taskForm addTaskBtn" onSubmit={formik.handleSubmit}>
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
        <label id = "priorityLabel" htmlFor="priority">Priority:</label>
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

      <div id = "taskFormBtns">
        <button id = "taskFormBtn" className= "formButton" type="submit">Add Item</button>
        <button id = "taskFormCancelBtn" className= "formButton" type="button"
        onClick={()=> hideForm()}>Cancel</button>


      </div>
      
    </form>
  </div>
);
}



export default FormAddTask